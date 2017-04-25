## PREREQUISITES
1) Install [Docker](https://www.docker.com/)
2) Open command-line tool, change directory (cd) to sstore/laradock

## HOW TO RUN

#### IN PRODUCTION MODE *(NOT AVAILABLE)*: `docker-compose -f docker-compose.prod.yml up -d --build`
Application URL: `localhost`

#### IN DEVELOPMENT MODE: `docker-compose up -d --build`
Application URL: `localhost:4200`, hot reload is enabled by default\
You can attach to sstore_front-end's container to see logs


## CLEAN UP:
*Note: Make sure you run clean up command in the mode matched with the run mode, otherwise some unexpected behaviors may occur*

#### IN PRODUCTION MODE *(NOT AVAILABLE)*: `docker-compose -f docker-compose.prod.yml down --volumes`
All containers, networks, volumes should be deleted. Images is not deleted for convenient

#### IN DEVELOPMENT MODE: `docker-compose down`
All containers, networks should be deleted. Images is not deleted for convenient







