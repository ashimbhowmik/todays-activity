

// use local storage to manage cart data
const addToDb = id => {

    let shoppingCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }

    // add quantity
    const quantity = shoppingCart[id];
    if (quantity) {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }
    else {
        shoppingCart[id] = 1;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}

const getStoredCart = () => {
    let shoppingCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;
}

const removeFromDb = id => {
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        const shoppingCart = JSON.parse(storedCart);
        if (id in shoppingCart) {
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
        }
    }
}

const deleteToast = () => {
    const hide = document.getElementById('toast-interactive');
    hide.classList.add('hidden');
}
const addToast = () => {
    const add = document.getElementById('toast-interactive');
    add.classList.remove('hidden');
}
const addColor = () => {
    const add = document.getElementById('toast-interactive');
    add.classList.remove('hidden');
}





export {
    addToDb,
    getStoredCart,
    removeFromDb,
    deleteToast,
    addToast,
}