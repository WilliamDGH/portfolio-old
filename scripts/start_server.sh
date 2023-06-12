#!/bin/bash
# Navigate to your application directory
cd /var/www/guanhua-ding-portfolio

# Start your application with PM2
#!/bin/bash
echo "$(date) - Running install_dependencies.sh" >> /var/log/deploy.log
yarn install >> /var/log/deploy.log 2>&1
echo "$(date) - Finished running install_dependencies.sh" >> /var/log/deploy.log

pm2 start yarn --name "guanhua-ding-portfolio" -- start
