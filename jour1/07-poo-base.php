<?php 


// table => user 
// id 
// nom 


// 1  Alain
// 2  Benoit 


// -------------------

class User {
    private int $id  ;
    private string $nom ;

    public function __construct(int $id)
    {
            //connexion PDO à la base données 
            $url = "url" ;
            $connexion = new PDO( $url , "root", "root");
            $std = $connexion->prepare("SELECT * FROM user WHERE id = :id");
            $std->execute(["id"=> $id]);
            $data = $std->fetchAll();
            $this->setId($data["id"]);
            $this->setNom($data["nom"]);
    }

    public function setId($id){
        $this->id = $id;
    }
    public function setNom($nom){
        $this->nom = $nom ;
    }

    public function getId(){
        return $this->id;
    }
    public function getNom(){
        return $this->nom;
    }

}

$user = new User(2); 

// $user->getId = 2
// $user->getNom = "Benoit"

// associer une class User avec la table user 

// instance new User( 2 ) - ligne de la table user 

// ORM => Object Relation Mapper 
// Au lieu d'écrire du SQL pour manipuler la Base de données 
// utiliser les objets 

// https://www.doctrine-project.org/
