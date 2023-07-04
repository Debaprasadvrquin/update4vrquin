#!/bin/sh
####################################################################
# this script will upgrade pisignage
# this script will do fllowing actions:
#	1) check .problem directory
#   2) check internet connectivity
#	3) get zip file
#   4) kill forever process
#	5) show update video and continue with upgrade process
#	6) Once finished reboot the system
#####################################################################
cd $HOME

if [ -f "$HOME/update.png" ]
then
    # fbi is not working and feh gets killed, so use pqiv
	# sudo fbi -T 1 $HOME/update.png &
    pqiv -f -i $HOME/update.png &
fi


echo "check .problem directory"
if [ -d "$HOME/player2.problem" ]; then
	sudo rm -rf  $HOME/player2.problem
fi

echo "get the new server release file"
ping -c 3 www.pisignage.com
rm $2
wget $1  -O $HOME/$2
if [ $? -ne 0 ]; then
	echo "wget could not get the release file" 1>&2
#	exit 1
    echo "Instead of exit, reboot"
    sudo systemctl reboot
    exit 1
fi

# sudo pkill -f node
echo "stopping pm2 piSignage"
pm2 stop piSignage
killall -s 9 chromium
killall -s 9 feh
killall -s 9 chromium-browser
#killall -s 9 pqiv
killall -s 9 vlc
killall -s 9 mpv
killall -s 9 evince

echo "wait for the process termination to complete"
sleep 15

echo "deleting prev directory if exists"
if [ -d "$HOME/player2.prev" ]; then
    sudo rm -rf  $HOME/player2.prev
fi
echo "saving the current image"
mv $HOME/player2 $HOME/player2.prev

echo "deleting prev updatefile if exists"
if [ -d "$HOME/update4vrquin.prev" ]; then
    sudo rm -rf  $HOME/update4vrquin.prev
fi
echo "saving the current image"
mv $HOME/update4vrquin $HOME/update4vrquin.prev

git clone https://github.com/Debaprasadvrquin/update4vrquin.git

echo "unzipping the New pi image"
unzip -o $2

echo "copying configuration files"
cp $HOME/player2.prev/config/* $HOME/player2/config

echo "copying the previous node modules"
cp -R $HOME/player2.prev/node_modules $HOME/player2

echo "copying the previous node modules for kiosk-ui"
cp -R $HOME/player2.prev/public/kiosk-ui/node_modules $HOME/player2/public/kiosk-ui

rm $2

sleep 5
cd $HOME/player2/public/kiosk-ui
echo "installing kiosk-ui npm packages"
npm install --omit=dev

cd $HOME/player2

chmod -R +x $HOME/player2/shell-scripts/*

sleep 5
echo "installing npm packages"
npm install --omit=dev

sleep 5
echo "executing upgrade scripts"
file="$HOME/player2/pi-upgrade.mjs"
if [ -f "$file" ]
then
	echo "executing node file pi-upgrade.mjs"
  node $file
fi

if [ -f "$file" ] && [ -d "$HOME/pisignage-data" ] && [ -f "$HOME/pisignage-data/upgrade.sh" ]; then
    /bin/sh $HOME/pisignage-data/upgrade.sh
fi

sync

echo "Rebooting after the update"
sudo python /home/pi/update4vrquin/vrquin.py
sudo systemctl reboot
