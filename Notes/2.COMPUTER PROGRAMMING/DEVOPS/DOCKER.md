
### what

- Docker is a container platform that allows you to build, test and deploy applications quickly
- A developer defines all the applications and it’s dependencies in a Dockerfile which is then used to build Docker images that defines a Docker container.
- Doing this ensures that your application will run in any environment

### why

- Microservices, Data Processing, Continuous Integration and Delivery, Containers as a Service.  
    ![[docker2.png]]   
    ![[docker5.png]]
    ![[docker3.png]]

### Docker Image

- A Docker Image is a file that defines a Docker Container.
- image (class) , containers (instance)

### Docker container

- A container is a runnable instance of an image.

### Build docker image

1.  Create a file named ‘Dockerfile’
2.  inside put
    - FROM ubuntu  
        MAINTAINER kunal kushwaha [kunal@gmail.com](mailto:kunal@gmail.com)  
        RUN apt-get update  
        CMD \[“echo”, “Hello World”\]
3.  cmd : `docker build -t "tag_name" .`

### Docker architecture

![[docker4.png]]

### Docker components

![[docker1.png]]

### Docker daemon

### Docker client

### Docker registries




### Dockerfile
```Dockerfile

FROM node

COPY . /home/myapp

WORKDIR /home/myapp  

RUN npm install

EXPOSE 7000

CMD ["node","index"] 

```



### docker vloume
- The two main types of volumes supported by a default Docker engine installation
1. **named volumes** 
- `$ docker volume create todo-db`
- `$ docker run -dp 127.0.0.1:3000:3000 --mount type=volume,src=todo-db,target=/etc/todos getting-started`

2. **bind mounts**  
- `$ docker run -it --mount type=bind,src="$(pwd)",target=/src ubuntu bash`
OR
`docker run -dp 127.0.0.1:3000:3000 
   ` -w /app --mount type=bind,src="$(pwd)",target=/app \
    `node:18-alpine \
    `sh -c "yarn install && yarn run dev"`


###  multi container apps
-  it's best to run your app in multiple containers.
- In general, each container should do one thing and do it well.
![[Pasted image 20231014145852.png]]
- **container networking**
   -  Remember that containers, by default, run in isolation and don't know anything about other processes or containers on the same machine.
   - So, how do you allow one container to talk to another? The answer is networking.
   - If you place the two containers on the same network, they can talk to each other.
   - There are two ways to put a container on a network:
      1.  Assign the network when starting the container.
      2. Connect an already running container to a network.

### docker compose file
- docker Compose is a tool that helps you define and share multi-container applications.
- With Compose, you can create a YAML file to define the services and with a single command, you can spin everything up or tear it all down.
### docker daily use commands

1.  **docker –version**  
    This command is used to get the currently installed version of docker
    
2.  **docker pull**  
    Usage: docker pull &lt;image name&gt;  
    This command is used to pull images from the docker repository(hub.docker.com)
    
3.  **docker run**  
    Usage: docker run -it -d &lt;image name&gt;  
    This command is used to create a container from an image
    
4.  **docker ps**  
    This command is used to list the running containers
    
5.  **docker ps -a**  
    This command is used to show all the running and exited containers
    
6.  **docker exec**  
    Usage: docker exec -it &lt;container id&gt; bash  
    This command is used to access the running container
    
7.  **docker stop**  
    Usage: docker stop &lt;container id&gt;  
    This command stops a running container
    
8.  **docker kill**  
    Usage: docker kill &lt;container id&gt;  
    This command kills the container by stopping its execution immediately. The difference between ‘docker kill’ and ‘docker stop’ is that ‘docker stop’ gives the container time to shutdown gracefully, in situations when it is taking too much time for getting the container to stop, one can opt to kill it
    
9.  **docker commit**  
    Usage: docker commit &lt;conatainer id&gt; &lt;username/imagename&gt;  
    This command creates a new image of an edited container on the local system
    
10. **docker login**  
    This command is used to login to the docker hub repository
    
11. **docker push**  
    Usage: docker push &lt;username/image name&gt;  
    This command is used to push an image to the docker hub repository
    
12. **docker images**  
    This command lists all the locally stored docker images
    
13. **docker rm**  
    Usage: docker rm &lt;container id&gt;  
    This command is used to delete a stopped container
    
14. **docker rmi**  
    Usage: docker rmi &lt;image-id&gt;  
    This command is used to delete an image from local storage
    
15. **docker build**  
    Usage: docker build &lt;path to docker file&gt;  
    This command is used to build an image from a specified docker file


[link with debops](DEVOPS.md)