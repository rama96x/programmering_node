const express = require('express')

const app = new express()
const ejs = require('ejs')
const mongoose = require('mongoose');

const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')

// We make a variable with the controller "storeProduct"
const storeProductController = require('./controllers/storeProduct');
// We make a variable with the controller "getProducts"
const getProductsController = require('./controllers/getProducts');

const newPostController = require('./controllers/newPost')
const homeController = require('./controllers/home')
const storePostController = require('./controllers/storePost')
const getPostController = require('./controllers/getPost')
const newUserController = require('./controllers/newUser')
const storeUserController = require('./controllers/storeUser')
const loginController = require('./controllers/login')
const loginUserController = require('./controllers/loginUser')
const expressSession = require('express-session')
const logoutController = require('./controllers/logout')

const validateMiddleware = require("./middleware/validationMiddleware");
const authMiddleware = require('./middleware/authMiddleware');
const redirectIfAuthenticatedMiddleware = require('./middleware/redirectIfAuthenticatedMiddleware')

app.use(fileUpload())

mongoose.connect('mongodb://localhost/my_database2',{useNewUrlParser:true, useUnifiedTopology: true})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.set('view engine','ejs')

app.use(express.static('public'))

app.listen(4000,()=>{
    console.log('App listening on port 4000')
})

/*const customMiddleWare = (req,res,next)=>{
    console.log('Custom middle ware called')
    next()
}
app.use(customMiddleWare)*/
//test slet dette

app.use('/posts/store',validateMiddleware)

app.use(expressSession({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
}))

global.loggedIn = null;
app.use("*",(req,res,next)=>{
    loggedIn = req.session.userId;
    next()
});

app.get('/posts/new',authMiddleware,newPostController)
app.get('/', homeController)
app.get('/post/:id',getPostController)
app.post('/posts/store',authMiddleware,storePostController)

// We try to post the newly added product to the database.
app.post('/product/new',storeProductController);

// We try to show all products from the database.
app.get('/products',getProductsController);

app.get('/auth/register',redirectIfAuthenticatedMiddleware,newUserController)
app.post('/users/register', redirectIfAuthenticatedMiddleware,storeUserController)

app.get('/auth/login',redirectIfAuthenticatedMiddleware,loginController)
app.post('/users/login',redirectIfAuthenticatedMiddleware,loginUserController)
app.get('/auth/logout',logoutController)
app.use((req,res)=> res.render('notfound'));


