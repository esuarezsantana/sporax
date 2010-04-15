#!/bin/bash

#####################################################################
#
#   This file comes with the sporax keyboard layout
#   Module:      03-update-my-files.sh
#
#   Copyright (C) 2010 Eduardo Suarez-Santana
#                      http://e.suarezsantana.com/
#
#   Warning:     Modify this script to suit your needs.
#

# Update my files

echo \# Update my files with next commands
for i in my-*~1~; do
    echo vimdiff ${i/\.~1~/} $i
done

echo \# When finished, clean old copies
echo rm \*~\*~

