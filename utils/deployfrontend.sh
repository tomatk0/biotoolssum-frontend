#!/bin/bash

# SETTING UP A FRONTEND INSTANCE (change ID of query to a valid value in config.js)

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

command -v nvm

CURRENT_USER=$(whoami)

cd /home/$CURRENT_USER/biotoolssum-frontend

nvm install 19.7.0

npm install --legacy-peer-deps

npm run build

sudo mkdir /var/www/build

sudo scp -r ./build/* /var/www/build

sudo touch /etc/nginx/sites-available/frontend

cat << EOF | sudo tee /etc/nginx/sites-available/frontend
server {
    listen 81;
    root /var/www/build;
    index index.html index.htm;
    try_files \$uri /index.html;
    location / {
        try_files \$uri \$uri/ = 404;
    }
}
EOF

sudo ln -s /etc/nginx/sites-available/frontend /etc/nginx/sites-enabled/frontend

sudo systemctl restart nginx
