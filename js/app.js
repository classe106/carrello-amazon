/**
 * Dato un array di oggetti che rappresentano un carrello di Amazon, calcolare il totale.
 * In un secondo momento non calcolare il prezzo degli elementi non disponibili.
 * 
 * Creare una funzione che filtri l'array del carrello e restituisca un array con solo i prodotti disponibili.
 */

// creare array con gli oggetti
// struttura oggetto    
// nome
// prezzo
// disponibilità

// creo una variabile per salvare la somma dei prodotti

// ciclo for per ciclare gli oggetti
// recupero il prezzo del singolo prodotto
// sommo il prezzo del singolo prodotto al totale

// restituisco il totale del carrello

const carrello = [
    {
        name: 'Kindle',
        price: 99,
        quantity: 3,
        available: 15
    },
    {
        name: 'Cavo USB',
        price: 9,
        quantity: 2,
        available: 15
    },
    {
        name: 'Mouse',
        price: 15,
        quantity: 1,
        available: 0
    }
];

const carrello2 = [
    {
        name: 'Mouse',
        price: 15,
        quantity: 1,
        available: 0
    }
];


function getCartTotal(cart = []) {
    let sum = 0;

    for (let i = 0; i < cart.length; i++) {
        const currentItem = cart[i];
        sum += currentItem.price * currentItem.quantity;
        // if (currentItem.available > 0) {
        //     // const currentPrice = currentItem.price;
        //     sum += currentItem.price * currentItem.quantity;
        // }
    }

    // cart.forEach((currentItem) => sum += currentItem.price);

    return sum;
}

function getAvailableProducts(cart) {
    const availableProducts = [];

    for (let i = 0; i < cart.length; i++) {
        const currentItem = cart[i];

        if (currentItem.available > 0) {
            availableProducts.push(currentItem);
        }

    }

    return availableProducts;
}

const carrelloFiltrato = getAvailableProducts(carrello);
console.log(carrelloFiltrato);

const totalPrice = getCartTotal(carrelloFiltrato); // 108
console.log("Prezzo primo carrello", totalPrice);

// const totalPrice2 = getCartTotal(carrello2) // 0
// console.log("Prezzo secondo carrello", totalPrice2);