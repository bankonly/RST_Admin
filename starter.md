# Node.js for beginner

>Initial project for node js 
```
npm init 
```
>install the package for run node js 
```
npm i @hapi/joi axios bcrypt bcryptjs body-parser cors dot-env dotenv express express-fileupload jsonwebtoken mongoose mongoose-seequence morgan multer nodemailer nodemon sharp validator  winston
```
>Make your folder structure

- configs
  - database.js
  - socket.js
- controllers
  - index.js
  - opt.controller.js
  - user.controller.js
- middleware
  - auth.js
  - auth0-reset-password.js
- models
  - opt.models.js
  - user.models.js
- routes
  - index.js
  - user.routes.js
- storages
  - opt.js
- utils 
  - mongo-query.js
- validations
  - otp.js
- .env
- .env.example
- server.js
>.env file for example 
```.env
APP_NAME=NODESTARTER
APP_HOST=http://127.0.0.1
APP_PORT=3000
ENV_APP=local

DB_CLOUD=
DB_NAME=devla
DB_USERNAME=root
DB_HOST=127.0.0.1
DB_PASSWORD=
DB_PORT=27017
DB_DRIVER=mongodb
DB_FETCH_LIMITER=300

JWT_ALGORITHMS=RS256
SECRET_KEY=JSDFWOINSIODH845nadfsHSDFNEKFN
RESET_PWD_SECRET_KEY=JSDFWOINSIODH845nadfsHSDFNEKFN
TOKEN_LIFE_TIME=7d
RESET_PWD_TOKEN_LIFE_TIME=60s
REFRESH_TOKEN_SECRET_KEY=JSDFWOINSIODH845nadfsHSDFNEKFNREFRESHTOKEN
REFRESH_TOKEN_TOKEN_LIFE_TIME=14d

NOTIFICATION_KEY=AAAAAZxYNMM:APA91bGX6nufHybTkM76oL37F-6yTmxs4cMXq9H8fftx4Krk-2fWs6YFiNj90rL5GWxwxid29qmSaQNrOq4saIecpUtJMUX3BfaLQK-o7cZ_7M5UQdgDeTqR5j9dn2wRiZsJk6XvjU2Y

IMAGE_TYPE_ACCEPT=jpg,png,jpeg,jfjf
IMAGE_SIZE_ALLOW=100000

MAIL_SERVICE=gmail
MAIL_ID= 
MAIL_PASSWORD= 

SOCKET_ENV=local

OTP_ALLOW_SEND_TIME=3
OPT_ALLOW_RESENT_SECOND=60
OTP_EXPIRED_TIME=60
TOKEN_LIFE_TIME_RESET=1m
RESET_OTP_LINK
```
>setup your server file 


>replicaSet set  ( transition )

```
mkdir backup &&
cd backup &&
mkdir db1 db2 db3

/Users/macbook/dev/backup

mongod --replSet db --logpath /Users/macbook/dev/backup/db1.log --dbpath /Users/macbook/dev/backup/db1 --port 40000 &

mongod --replSet db --logpath /Users/macbook/dev/backup/db2.log --dbpath /Users/macbook/dev/backup/db2 --port 40001 &

mongod --replSet db --logpath /Users/macbook/dev/backup/db3.log --dbpath /Users/macbook/dev/backup/db3 --port 40002 &

config = {_id: "db", members:[
 {_id: 0, host: "localhost:40000"},
 {_id: 1, host: "localhost:40001"},
 {_id: 2, host: "localhost:40002"}]
};

rs.initiate(config);
rs.status();

mongo --host db/localhost:40000,localhost:40001,localhost:40002



db.isMaster()
```