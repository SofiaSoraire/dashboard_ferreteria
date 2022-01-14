const express = require('express');
const app = express();
const methodOverride = require('method-override');
const session = require('express-session');
const cookies = require('cookie-parser');


const apiUsersRouter= require('./routes/api/users');
const apiProductsRouter= require('./routes/api/products');

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(session({
    secret: 'mySecretWord',
    resave: false,
	saveUninitialized: false,
}));
app.use(cookies());


app.use('/api/users',apiUsersRouter);
app.use('/api/products',apiProductsRouter);

const port = process.env.PORT || 3030;

app.listen(port,()=>{
    console.log("localhost:" + port + " " + "Activo")
    }
);
