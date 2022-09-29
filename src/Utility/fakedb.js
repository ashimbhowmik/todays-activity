

// use local storage to manage cart data
const addToDb = id => {

    let activityCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('activity-Cart');
    if (storedCart) {
        activityCart = JSON.parse(storedCart);
    }

    // add quantity
    const quantity = activityCart[id];
    if (quantity) {
        const newQuantity = quantity + 1;
        activityCart[id] = newQuantity;
    }
    else {
        activityCart[id] = 1;
    }
    localStorage.setItem('activity-Cart', JSON.stringify(activityCart));
}

const getStoredCart = () => {
    let activityCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('activity-Cart');
    if (storedCart) {
        activityCart = JSON.parse(storedCart);
    }
    return activityCart;
}


const deleteToast = () => {
    const hide = document.getElementById('toast-interactive');
    hide.classList.add('hidden');
}
const addToast = () => {
    const add = document.getElementById('toast-interactive');
    add.classList.remove('hidden');
}

export {
    addToDb,
    getStoredCart,
    deleteToast,
    addToast,
}