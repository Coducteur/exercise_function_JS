const products = [
  {
    type: "sandwich",
    name: "Sandwich au poulet",
    price: 9.9,
    ingredients: ["farine", "sel", "levure", "poulet", "olive"],
    quantity: 0
  },
  {
    type: "sandwich",
    name: "Sandwich au thon",
    price: 7.8,
    ingredients: ["farine", "sel", "levure", "thon", "tomate"],
    quantity: 6
  },
  {
    type: "sandwich",
    name: "Sandwich au jambon",
    price: 7.9,
    ingredients: ["farine", "sel", "levure", "jambon", "beurre"],
    quantity: 6
  },
  {
    type: "sandwich",
    name: "Sandwich au saumon",
    price: 7.9,
    ingredients: ["farine", "sel", "levure", "saumon", "citron"],
    quantity: 6
  },
  {
    type: "boisson",
    name: "Eau",
    price: 1.5,
    ingredients: ["eau"],
    quantity: 6
  },
  {
    type: "boisson",
    name: "Coca-cola",
    price: 3,
    ingredients: ["eau", "sucre"],
    quantity: 6
  },
  {
    type: "boisson",
    name: "Ice Tea Pêche",
    price: 3,
    ingredients: ["eau", "thé", "pêche"],
    quantity: 6
  },
  {
    type: "dessert",
    name: "Mousse au chocolat",
    price: 3.5,
    ingredients: ["oeufs", "chocolat"],
    quantity: 6
  },
  {
    type: "dessert",
    name: "Brioche praline",
    price: 3.2,
    ingredients: ["farine", "beurre", "praline", "sucre"],
    quantity: 6
  },
  {
    type: "dessert",
    name: "Tarte citron",
    price: 4.5,
    ingredients: ["oeufs", "citron", "beurre"],
    quantity: 0
  },
  {
    type: "dessert",
    name: "Tarte au chocolat",
    price: 4.5,
    ingredients: ["oeufs", "chocolat", "beurre"],
    quantity: 6
  },
];

// Penser à utiliser les fonctions JS avancées telles que filter, some... pour créer css fonctions

//Créer une fonction qui retourne le tableau des ingrédients d'un produit à partir d'un tableau de produits
function getIngredients(productsList, productChosen) {
  //code
}
console.log(getIngredients(products, "Tarte citron"));



//Idem mais la fonction ne doit pas prendre en compte la casse de productChosen
function getIngredientsCaseInsensitive(productsList, productChosen) {
  //code
}
console.log(getIngredientsCaseInsensitive(products, "tarte citron"));



// La suite des fonctions ne devront pas prendre en compte la casse de productChosen



//Créer une fonction qui retourne true si un produit fait partie de la liste des produits proposés
function checkProduct(productsList, productChosen) {
  // code
}
console.log(checkProduct(products, "tarte citron"));
console.log(checkProduct(products, "boeuf bourguignon"));



// Idem, mais il faut aussi vérifier si le produit est en stock
function getProductInStock(productsList, productChosen) {
  // code
}
console.log(getProductInStock(products, "tarte citron"));



// Créer une fonction qui retourne la liste des produits recherchés par le client
// exemple : si productChosen = "tarte", le tableau renvoyé comprendra toutes les tartes proposées à la carte
function getProducts(productsList, productChosen) {
  //code
}
console.log(getProducts(products, "sandwich"));


// Créer une fonction qui renvoie un tableau de produit ne comportant pas un ingrédient en particulier
function excludeIngredient(productList, ingredient) {
  // code
}
console.log(excludeIngredient(products, "oeufs"));