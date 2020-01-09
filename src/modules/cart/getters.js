// tiene el estado del modulo el getter. Con el state tenemos acceso al carrito 
export function totalCost(state) {
    return state.cart.reduce((sum, product) => {
        return (parseFloat(product.price) * product.qty) + sum
    }, 0)
}