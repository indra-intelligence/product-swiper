let instance = null;

var products = [];
var cart = [];
var favorites = [];

var currentProduct = null;
var currentProductId = 0;

class DataService {
    constructor() {
        if (!instance) {
            instance = this;
        }
        return instance;
    }

    addProduct = data => {
        //currentProductId = data.product_id;
        products = data;
    };

    addProductToCart = product => {
        cart.push(product)
        console.log(cart)
    }

    addProductToFavorites = product => {
        favorites.push(product)
        console.log(favorites)
    }

    getNextProduct = () => {
        let nextProduct = products.pop();
        console.log(nextProduct)
        if (nextProduct == null) {
            return null;
        } else {
            currentProductId = nextProduct.product_id;
            return [nextProduct];
        }
        
    }

    isLastProduct = () => {
        if (products.length < 2){
            return true;
        } else {
            return false;
        }
    }

    downVote = () => {
        // do logic
        return this.getNextProduct();
    };

    upVote = () => {
        return this.getNextProduct();
    }

    getFavorites = () => {
        return favorites
    }

    getCart = () => {
        return cart
    }

    getProducts = () => {
        return products
    }

    getCurrentProductId = () => {
        return currentProductId;
    }

}

export default DataService;
