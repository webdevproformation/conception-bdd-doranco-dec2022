const { connect , Schema, model } = require("mongoose")
const mongoose = require("mongoose")

// javascript 
//const urlbdd = "mongodb+srv://doranco:<password>@cluster0.4ovwovm.mongodb.net/?retryWrites=true&w=majority";
const urlbdd = "mongodb+srv://doranco:7XVSxxaCeXYooMcL@cluster0.4ovwovm.mongodb.net/?retryWrites=true&w=majority";
mongoose.set('strictQuery', true)
connect( urlbdd , { useNewUrlParser : false  } )
        .then( (  ) => { console.log("connexion à la base de données réussie") } )
        .catch( (ex) => { console.log(new Error(ex)) } );


const schemaArticle = new Schema({ // structure de la table User
    titre : String,
    contenu : String ,
    commentaire : Number 
}) 

const Article = model("articles" , schemaArticle ); // nom de la table

const article = new Article({titre :"article 1", contenu : "lorem ipsum" , "commentaire" : 4})

article.save()