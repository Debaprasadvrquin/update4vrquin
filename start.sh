#!/bin/bash

unclutter -idle 5 -root &
sudo rfkill unblock wlan
cd $HOME/player2
#. /home/pi/.bash_profile
mkdir -p $HOME/.config/gtk-3.0 #gtk-3.0 directory not found in .config dir
cp shell-scripts/gtk-3.0/gtk.css $HOME/.config/gtk-3.0
node monitor.mjs
sleep infinity



