#!/bin/bash

#####################################################################
#
#   This file comes with the sporax keyboard layout
#   Module:      04-patch-system-files.sh
#
#   Copyright (C) 2010 Eduardo Suarez-Santana
#                      http://e.suarezsantana.com/
#
#   Warning:     Modify this script to suit your needs.
#

# Patch system files

XKBDIR=/usr/share/X11/xkb

diff $XKBDIR/symbols/es my-symbols_es > /dev/null

# returns 1 if different
if [ $? -eq 1 ]; then
    echo \# Run as superuser
    echo cd \"`pwd`\"
    echo alias cp
    echo unalias cp
    echo cp -v my-rules_base.xml $XKBDIR/rules/base.xml
    echo cp -v my-rules_base.lst $XKBDIR/rules/base.lst
    echo cp -v my-rules_evdev.xml $XKBDIR/rules/evdev.xml
    echo cp -v my-rules_evdev.lst $XKBDIR/rules/evdev.lst
    echo cp -v my-symbols_es $XKBDIR/symbols/es
    echo \# Redo cp alias
else
    echo \# Already patched
fi

