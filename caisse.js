const budget = 20000;
const prix_cahier = 1500;
const quantite_cahier = 4;
const total_cahier = prix_cahier * quantite_cahier;
const prix_stylo = 500;
const quantite_stylo = 3;
const total_stylo = prix_stylo * quantite_stylo;
const total_achat = total_cahier + total_stylo;
console.log("=====CAISSE=====");
console.log("Cahiers:", total_cahier, "FCFA");
console.log("Stylo :", total_stylo, "FCFA");
console.log("Total :", total_achat, "FCFA");
console.log("Budget : ", budget, "FCFA");
if (total_achat<=budget) {
    console.log("Budget suffisant");
} else {
    console.log("Budget insuffisant");
}
for (i = 1 ; i < 6; i++) {
    console.log("Achat numéro",+i);
}