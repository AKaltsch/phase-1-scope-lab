
var customerName = 'bob'
const leastFavoriteCustomer = 'some guy'
var bestCustomer;

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

function setBestCustomer() {
    bestCustomer = "not bob"
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob'
}

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'another guy'
}

console.log(customerName)