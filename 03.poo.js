//Fonction constructeur
var lg = console.log;

function Personne(nom, prenom, pseudo) {
    this.nom = nom;
    this.prenom = prenom;
	this.pseudo = pseudo;
    this.getNomComplet = function() {
        return this.nom + ' ' + this.prenom + ' ' + this.pseudo;
    }
}
var jules = new Personne('LEMAIRE', 'Jules', 'jules77');
var paul = new Personne('LEMAIRE', 'Paul', 'paul44');

lg(jules.nom);
lg(jules.prenom);
lg(jules.pseudo);
lg(jules.getNomComplet());


function afficherPersonne(personne) {
    lg(personne.getNomComplet())
};
afficherPersonne(paul);

//Modifier un objet

jules.pseudo = "jules44";
afficherPersonne(jules);

//Ajouter une propriété à Personne

lg(jules.age);

Personne.prototype.age = "NON RENSEIGNE";
lg(jules.age);

jules.age = 30;
lg("L'age de jules est = " + jules.age);

//Ajouter une méthode à Personne

Personne.prototype.getInitiales = function () {
    return this.prenom.charAt(0) + "." + this.nom.charAt(0);
}
lg(jules.getInitiales());

//Objet sans fonction constructeur

var robert = {
    prenom : 'Robert',
    nom: 'LEPREFET',
	pseudo: 'robert77',
    getNomComplet: function() {
        return this.nom + ' ' + this.prenom + ' ' + this.pseudo;
    }
}
afficherPersonne(robert);

//Héritage via une fonction constructeur

function Client(nom, prenom, pseudo, numeroClient) {
    Personne.call(this, nom, prenom, pseudo)
    this.numeroClient = numeroClient;
	this.getInfos = function() {
			return nom + ' ' + prenom + ' ' + pseudo + ' ' + numeroClient;
		}
	}
var steve = new Client('LUCAS', 'Steve', 'steve44', 'A01');

afficherPersonne(steve);
lg(steve.numeroClient);
lg(steve.getInfos());











