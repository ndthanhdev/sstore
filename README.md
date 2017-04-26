## PREREQUISITES
1) Install [Docker](https://www.docker.com/)
2) Open command-line tool, change directory (cd) to sstore/laradock

## HOW TO RUN

#### IN PRODUCTION MODE *(NOT AVAILABLE)*: `docker-compose -f docker-compose.prod.yml up -d --build`
Frontend URL: `localhost`\
Backend URL: `api.localhost`

#### IN DEVELOPMENT MODE: `docker-compose up -d`
Frontend URL: `localhost:4200`, hot reload is enabled by default\
Backend URL: `api.localhost`\
*You can attach to sstore_front-end's container to see real-time logs*



## CLEAN UP:
*Note: Make sure you run clean up command in the mode matched with the run mode, otherwise some unexpected behaviors may occur*

#### IN PRODUCTION MODE *(NOT AVAILABLE)*: `docker-compose -f docker-compose.prod.yml down --volumes`
All containers, networks, volumes should be deleted. Images is not deleted for convenient

#### IN DEVELOPMENT MODE: `docker-compose down`
All containers, networks should be deleted. Images is not deleted for convenient

## MIGRATE & SEED DATABASE
1) Change Directory (cd) to sstore/laradock.
2) Access workspace container bash: `docker-compose exec workspace bash`
3) Change directory (cd) to backend: `cd backend/`
4) Migrate and seed database: `php artisan migrate:refresh --seed`





