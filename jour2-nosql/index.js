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

/* const user = new User({ prenom : "Alain" , nom : "DOE" , age : 32 , isAdmin : true }); // INSERT INTO users (prenom, nom, age, isAdmin ) VALUES ("Alain" , "DOE", 32 , TRUE)

user.save();  */

// update 

async function update(){
    const user = await User.findOne({ nom : "DOE" }) // WHERE 
    user.nom = "Dupont"; 
    user.save(); 
}

// delete ()

/* async function supprimer(){
    const user = await User.findOne({ nom : "Dupont" }) // WHERE 
    user.remove();
}
supprimer(); */


/* [
    { prenom : "Alain" , nom : "DOE" , age : 32 , isAdmin : true },
    { prenom : "benoit" , nom : "DOE" , age : 40 , isAdmin : false },
    { prenom : "Celine" , nom : "Dupont" , age : 12 , isAdmin : false }
].forEach((etudiant) => {
    const user = new User(etudiant); // INSERT 
    user.save();
})

const user = new User({ prenom : "Alain" , nom : "DOE" , age : 32 , isAdmin : true }); // INSERT 

user.save(); */

// GUI => grafikal user interface 
// CUI => Client user interface

async function getAll(){
    const users = await User.find() // WHERE 
    console.log(users);
}
getAll();


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

// créer un nouveau fichier exo.js 
// etablier une connection avec la base de données mongoDB
// créer une table article qui contient 3 colonnes titre String contenu String et commentaire chiffre

/* 
ajouter dans cette table la ligne suivante
titre : Article 1
contenu : lorem ipsum 
commentaire : 4  */