const express = require('express');
const mongoose = require('mongoose');
// const route = require('./route/routes.js');
const Routes = require('./route/routes.js');

const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
const PORT = 8000;

const URL = 'mongodb+srv://krp:mongodb123@nodecrud.kilye.mongodb.net/NodeCrud?retryWrites=true&w=majority'



// app.use('/welcome',route);
app.use('/users', Routes);


mongoose.connect(URL,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server running on port ${PORT}`);
    })
}).catch(error=>{
    console.log('error: ',error.message);
})
