# portefolio2V2

We are choosing to deliver our directories instead of a link to our git repository.  

We have used the fullstack example with code online as insperation for our code written.




To get this to run you need to make docker network called skynet
then use these commands from the directory that got the backend, frontend and sql directories:

docker run -it --rm -d --name mysql1 --network skynet -e MYSQL_ROOT_PASSWORD=my-secret-pw -v $pwd/sql:/docker-entrypoint-initdb.d mysql

docker build -t python_backend ./Backend/

docker run -it --rm --name pyback --network skynet -p 5000:5000 -v $pwd/backend/server.py:/var/fullstack/server.py -v $pwd/frontend/:/var/fullstack/frontend/ -t python_backend python /var/fullstack/server.py




We implemented the google log in but we haven't used it to any particulary feature. Log in with a gmail account.
