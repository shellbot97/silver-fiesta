const cart = [
    {
        title:"Reebok Active fit 1.0",
        price:4900,
        amount:1
    },{
        title:"Garmin Venu Sq",
        price:17000,
        amount:1
    },{
        title:"Fitbit Versa",
        price:13000,
        amount:2
    },{
        title:"Amazefit",
        price:8000,
        amount:4
    }
]
/**
 * calculate total number of items and price for each set of items
 * price for each set of items = item-quantity * price for one item
 * step 1 = return the object {totalItems: x, cartTotal: y}
 * step 2 = destructure the object and store totalItems and cartTotal in separate variables
 */
let {totalItems, cartTotal} = cart.reduce((total, cartItem)=>{
    const {amount, price} = cartItem;
    //count items
    total.totalItems += amount
    total.cartTotal += price*amount
    return total
}, {
    totalItems: 0,
    cartTotal:0
})
// console.log(total);
/**
 * fix the precision to 2 digits
 * fixing the precision will return a string, so again convert that string to float
 */
cartTotal = parseFloat(cartTotal.toFixed(2))
console.log(totalItems, cartTotal);