const { connect } = require("mongoose")
const mongoose = require("mongoose")

// javascript 
//const urlbdd = "mongodb+srv://doranco:<password>@cluster0.4ovwovm.mongodb.net/?retryWrites=true&w=majority";
const urlbdd = "mongodb+srv://doranco:7XVSxxaCeXYooMcL@cluster0.4ovwovm.mongodb.net/?retryWrites=true&w=majority";
mongoose.set('strictQuery', true)
connect( urlbdd , { useNewUrlParser : false  } )
        .then( (  ) => { console.log("connexion à la base de données réussie") } )
        .catch( (ex) => { console.log(new Error(ex)) } );



        
// atlas mongodb => https://www.mongodb.com/
// login : doranco
// password : 7XVSxxaCeXYooMcL

// PHP
// try {
// $connexion = new PDO("url" , "login" , "passwrd")
// echo "connexion à la base de données réussie"
// } catch(ex) {
// throw new Exception(ex)
//}

/* function generer(){
    return new Client()
}

generer()->nom  */