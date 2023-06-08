#!/bin/bash
cd ~/portfolio
git pull origin main
yarn install &&
yarn build &&
pm2 restart [name]
