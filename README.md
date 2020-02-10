# The CRUD app (MVP)

## Prerequisites

* Ubuntu (18.04 LTS) (preferably)
* [Docker](https://docs.docker.com/install/linux/docker-ce/ubuntu/) (for running in a containerised environment)
* docker-compose (version 1.21.2, build a133471)

## Quickstart
This project is structured to use Docker containers for development and testing.

Run the app with:
```
git clone https://github.com/kmadisa/tut
docker-compose build
docker-compose up
docker exec -it frontend /bin/ash
cd employees/
ng serve
```

Then open the web browser to http://localhost:4200.


## Functionality

* [x] Develop a front-end application using Angular or similar technology that will consume the
API below and will present the user with a workable user experience, running within a
containerised environment.
* [ ] Demonstrate the use of TDD/BDD methodologies (front-end only)
* [ ] Demonstrate the use of good developer practices and principles (exception handling,
logging, caching, unit tests etc...)
* [x] Demonstrate how developer would extend the application they developed.
* [x] Create this Front-end within a Dockerized environment.
* [x] Provide instructions on building and running application, (Read Me)
* [ ] Create a Dockerized API using the specification given below using Django / Nodejs Express..
* [x] Create a “docker-compose.yml” file which one can run both environments in. 

## Issues and limitations

* Does not add new entries into the table (errors with POST/PUT request)
* Still need to manually ssh into the frontend container to run the app.
