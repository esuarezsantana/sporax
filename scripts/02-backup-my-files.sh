#!/bin/bash

#####################################################################
#
#   This file comes with the sporax keyboard layout
#   Module:      02-backup-my-files.sh
#
#   Copyright (C) 2010 Eduardo Suarez-Santana
#                      http://e.suarezsantana.com/
#
#   Warning:     Modify this script to suit your needs.
#

# Backup my files

for i in $HOSTNAME-*; do
    name=`echo $i | cut -d"-" -f 2-`
    cp --backup=numbered -v $i my-$name
done

