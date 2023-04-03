const local = (name) => {
    let shoppingCart = {}
    const storedCart = localStorage.getItem('shopping-cart')
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);

    }

    const item = shoppingCart[name]
    if (item) {
        shoppingCart[name] = +item + 1

    } else {
        shoppingCart[name] = 1

    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))

}


const delet = (name) => {
    let shoppingCart = JSON.parse(localStorage.getItem('shopping-cart'))


    if (shoppingCart) {

        const item = shoppingCart[name]
        if (item) {
            if (item === 1) {
                delete shoppingCart[name];

            } else {
                shoppingCart[name] = item - 1

            }

        }
        localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
    }

}


const getData = () => {
    return JSON.parse(localStorage.getItem('shopping-cart'))
}


export { delet, local, getData }