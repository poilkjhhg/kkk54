#!/bin/sh
UUID=${UUID:-'d8588ef0-e375-4241-bbef-73de62309293'}
sed -i "s#UUID#$UUID#g" ./config-vmess.json
