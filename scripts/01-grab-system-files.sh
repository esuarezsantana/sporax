#!/bin/bash

#####################################################################
#
#   This file comes with the sporax keyboard layout
#   Module:      01-grab-system-files.sh
#
#   Copyright (C) 2010 Eduardo Suarez-Santana
#                      http://e.suarezsantana.com/
#
#   Warning:     Modify this script to suit your needs.
#

# First we make a local copy of the files

XKBDIR=/usr/share/X11/xkb
cp -v $XKBDIR/rules/base.xml $HOSTNAME-rules_base.xml
cp -v $XKBDIR/rules/base.lst $HOSTNAME-rules_base.lst
cp -v $XKBDIR/rules/evdev.xml $HOSTNAME-rules_evdev.xml
cp -v $XKBDIR/rules/evdev.lst $HOSTNAME-rules_evdev.lst
cp -v $XKBDIR/symbols/es $HOSTNAME-symbols_es

