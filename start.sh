#!/bin/bash

unclutter -idle 5 -root &
sudo rfkill unblock wlan
sudo python3 /home/pi/captive-portal/captive_portal.py &
cd /home/pi/player2
#. /home/pi/.bash_profile
mkdir -p /home/pi/.config/gtk-3.0 #gtk-3.0 directory not found in .config dir
cp shell-scripts/gtk-3.0/gtk.css /home/pi/.config/gtk-3.0
python remove.py &
python restart.py &
python thumbnails.py &
node monitor.mjs
sleep infinity
