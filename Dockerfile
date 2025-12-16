FROM node:latest-alpine

# Mettre à jour le système et installer git 
RUN apt-get update && apt-get install --no-install-recommends -y git  \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Définir le répertoire de travail
WORKDIR /app

# Cloner le dépôt, installer les dépendances et configurer le point d'entrée
RUN git clone https://github.com/Antoine-PRN/3D-portfolio.git /app \
    && git checkout main \
    && ls -al /app \
    && npm install

# Configurer le script d'entrée
COPY entrypoint.sh /app/entrypoint.sh
RUN chmod +x /app/entrypoint.sh
ENTRYPOINT ["/app/entrypoint.sh"]        