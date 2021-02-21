# Node GraphQL 
## Reserved & Booking Restaurant
>initial project
```
npm i 
cp .env.example .env 
```

>Edit .env file 

```
APP_NAME=NODESTARTER
APP_HOST=http://127.0.0.1
APP_PORT=2020
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
MAIL_ID=vongkeokeosavanh@gmail.com
MAIL_PASSWORD=123

SOCKET_ENV=local

OTP_ALLOW_SEND_TIME=3
OPT_ALLOW_RESENT_SECOND=60
OTP_EXPIRED_TIME=60
TOKEN_LIFE_TIME_RESET=1m
RESET_OTP_LINK
```
>start mongo 

```
mongod 
brew services start mongodb
```
>kill node if not sure 
```
killall node 
or kill pid 
kill -9 pid 
```
>touch makefile
```
git:
	git add .
	git commit -m "$m"
	git push
    
```


