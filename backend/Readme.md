# install MongoDB on desktop
 download mongpDB community server and mongoDB tools, add the path to environmental variable to accesss from command line

# create MongoDB Atlas account using browser
 creat a new project named 'mern_website_burger_bro' and build database on free version with username and password,
 add cluster and make ip address access from anywhere


# import the json files to atlas database
insert the json file of data to mongoDB atlas database using mongo insert in command line
use-  mongoimport --uri mongodb+srv://Admin:Admin0202@cluster0.ydoby6v.mongodb.net/mern_website_burger_bro --collection food_items --jsonArray --file "C:\Users\NISHA\Downloads\foodData2.json

# install express, nodemon, mongose for backend
npm init
npm install express nodemon mongoose

# set express
create index.js

# thunder client extension to test end points 
# connect mongoDB atlas database to application backend
# write CURD command in database.js 
# write schema for fetching data also create user.js module and using thunder master as post man 

# install express validator
its to validate the insert data
use-  npm install --save express-validator

# making password encrypted
-npm i bcryptjs , hashed password
# stored data globally
console.log(global.food_items)
console.log(global.food_category)
This approach allows you to access the food_items variable from any part of your application, even outside the current module.

# jwt authentication
-npm install jsonwebtoken
generate a authtoken and store it in localStorage in Login in frontend

# Create Orders.js to save orders of a customer on database
connect with check out button on frontend
all the orders of checkout wil be store and the cart will be empty


# install sweetAlert
-npm install --save sweetalert2
to modify alert messages

# to recognize admin 
-npm install jwt-decode

# useEffect
to stop reloading page while login as admin or user
# saving data on Admintable
use api/admintable

# show Admintable data on fronend
use api/getadmintable

# set order number by auto sequence
-npm install --save mongoose-sequence