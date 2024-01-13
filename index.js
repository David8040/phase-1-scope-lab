// Write your solution in this file!
var customerName ='bob';

function upperCaseCustomerName(){
    customerName = customerName.toUpperCase();
    return customerName;
}

var bestCustomer;
function setBestCustomer(){
    bestCustomer = 'not bob';
    return bestCustomer;
}

function overwriteBestCustomer(best){
    bestCustomer = best;
    return bestCustomer;
}

const leastFavoriteCustomer = 'David';
function changeLeastFavoriteCustomer(least){
    leastFavoriteCustomer = least;
    return leastFavoriteCustomer;
}