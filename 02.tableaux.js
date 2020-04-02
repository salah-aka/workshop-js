
//Tableau des villes
var villes = new Array('nantes', 'paris', 'saint-nazaire', 'angers', 'le mans');

var lg = console.log;
/*forEach*/
villes.forEach(function (element) {
    lg(element);
});


/*every()*/
var lettreADansToutesLesVilles = villes.every(function (element) {
    return element.includes("a");
});
lg("lettreADansToutesLesVilles = " + lettreADansToutesLesVilles);

/*some()*/
var auMoinsUneVilleAvecUnTire = villes.some(function (element) {
    return element.includes("-");
});
lg("auMoinsUneVilleAvecUnTire = " + auMoinsUneVilleAvecUnTire);

/*filter()*/
var villesSansTiretSansEspace = villes.filter(function (element) {
    return !element.includes(" ") && !element.includes("-");
});
lg("villesSansTiretSansEspace = " + villesSansTiretSansEspace);


/*Chainer les Fonctions*/
var villesMajusculeSeTerminantParS = villes.filter(function (element) {
    return element.endsWith("s");
})
.map(function (element) {
    return element.toUpperCase();
});
lg("villesMajusculeSeTerminantParS = " + villesMajusculeSeTerminantParS);
