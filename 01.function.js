// 1er test
console.log("01 - Fonctions");

//Définition d’une fonction
var nb1 = 10;
var nb2 = 20;

function  additionner(nb1, nb2) {
	return nb1 + nb2;
}

var resultat1 = additionner( nb1 , nb2);
console.log("resultat1 = " + resultat1)

//Variable de type fonction

/*Addition*/
var somme = additionner;
var resultat2 = somme( nb1 , nb2);
console.log("resultat2 = " + resultat2);

/*multiplication*/
var multiplication = function  multiplication(nb1, nb2) {
	return nb1 * nb2;
}
var resultat3 = multiplication( nb1 , nb2);
console.log("resultat3 = " + resultat3)

//Fonction comme élément du 1er ordre
var afficherOperation = function (nomOperation, operation, nb1, nb2) {

    console.log(nomOperation + "(" + nb1 + "," + nb2 + ") = " + operation(nb1, nb2));
}
afficherOperation("Somme", somme, 20, 40);
afficherOperation("Multiplication", multiplication, 10, 20);
afficherOperation("Soustraction", function (nb1, nb2) { return nb1 - nb2 }, 15, 5);




























