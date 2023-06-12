#!/bin/bash
# Navigate to your application directory
cd /var/www/guanhua-ding-portfolio

# Start your application with PM2
yarn install &&
pm2 start yarn --name "guanhua-ding-portfolio" -- start
