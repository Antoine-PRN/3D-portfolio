#!/bin/bash

if [ ! -f .env ]; then
    echo "Le fichier .env est absent, le script doit être lancé depuis le dossier courant"
    ls -al
    pwd
    exit 1

else
    cd /app
    git pull -f
    npm install -f
    npm run build
    cp -r build/* /output/
fi