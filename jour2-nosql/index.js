const { connect , Schema, model } = require("mongoose")
const mongoose = require("mongoose")

// javascript 
//const urlbdd = "mongodb+srv://doranco:<password>@cluster0.4ovwovm.mongodb.net/?retryWrites=true&w=majority";
const urlbdd = "mongodb+srv://doranco:7XVSxxaCeXYooMcL@cluster0.4ovwovm.mongodb.net/?retryWrites=true&w=majority";
mongoose.set('strictQuery', true)
connect( urlbdd , { useNewUrlParser : false  } )
        .then( (  ) => { console.log("connexion à la base de données réussie") } )
        .catch( (ex) => { console.log(new Error(ex)) } );


const schemaUser = new Schema({ // structure de la table User
    prenom : String,
    nom : String ,
    age : Number ,
    isAdmin : Boolean
}) 

const User = model("users" , schemaUser ); // nom de la table

// ajouter un premier utilisateur 

/* const user = new User({ prenom : "Alain" , nom : "DOE" , age : 32 , isAdmin : true }); // INSERT 

user.save();  */

// update 

async function update(){
    const user = await User.findOne({ nom : "DOE" }) // WHERE 
    user.nom = "Dupont"; 
    user.save(); 
}
update()


// CREATE TABLE users (
// prenom VARCHAR()
// nom    VARCHAR()
// age    INT
// isAdmin BOOLEAN
//)

// npm i -g nodemon
// cd jour2-nosql
// nodemon index.js


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