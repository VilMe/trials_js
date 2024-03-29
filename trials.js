// ///////////////////////////////////////////////////////
// PART 1
// Account information:

let accountHolder = "Balloonicorn";
const accountNumber = "123456";
let businessName = "Balloonicorn's Cupcake Shop";

let startingBalance = 26000;

const addresses = ["123 Main Street", "683 Sutter Street", "1600 Pennsylvania Ave"];

const phoneNumbers = new Map();

// Add some phone numbers to our map
phoneNumbers.set('home', '510-867-5309')
phoneNumbers.set('mobile', '415-555-1212')
phoneNumbers.set('business', '415-123-4567')



// ///////////////////////////////////////////////////////
// Create User Info Display:

// Add function to print account information 
function accountInfo(acctName, acctNumber, busName) {
    console.log('Account Holder Name: ' +acctName+ '\n' +
                'Account Holder Number: ' +acctNumber+ '\n' +
                'Business Name: ' +busName+ '\n')
}

accountInfo(accountHolder, accountNumber, businessName)

// Add function to print all addresses, including a header
function printAddresses(addressList) {
    console.log('Addresses: ' +'\n')
    for(const address of addressList) {
        console.log(address +'\n')
    }
}
printAddresses(addresses)

// Add function to print phone types and numbers
function showPhoneNums(phoneNumsMap){
    console.log('Phone Numbers: ' + '\n')
    for(const [type, num] of phoneNumsMap){
        console.log(type+ ': ' +num+ '\n')
    }
}

showPhoneNums(phoneNumbers)

// ///////////////////////////////////////////////////////
// Transactions:

// Create an empty map of transactions

const transactions = new Map()

// Add function to add transactions
function addTransactions(date, amount) {
    transactions.set(date, amount)
}


// Use the function to add transactions

addTransactions ('May-2', -500)
addTransactions ('May-13', +1200)
addTransactions ('May-15', -100)
addTransactions ('May-21', -359)
addTransactions ('May-29', +2200)

// Add function to show balance status

function showBalanceStatus (mapOfTransactions, balance) {
    const amounts = mapOfTransactions.values();
    for(const amount of amounts){
        balance += amount
    }
    console.log('Ending Balance: ' +balance)
    if(balance < 0) {
        console.log('YOU ARE OVERDRAWN')
    } else if(balance < 20) {
        console.log('Warning: You are close to a zero balance')
    } else {
        console.log('Thank you for your business')
    }
}
// showBalanceStatus(transactions)

// Add function to show transactions
function showTransactions(mapOfTransactions, startBalance) {
    console.log('Start Balance: ' +startBalance);
    let type = " ";
    for(const[date, amount] of mapOfTransactions) {
        //let type = "";
        startBalance += amount;
        if(amount < 0){
            type = 'withdrawal'
        } else {
            type = 'deposit'
        }
        console.log(date, type, amount, startBalance)
    }
}

showTransactions(transactions, startingBalance)

// ///////////////////////////////////////////////////////
// All Customer Info:

// Make an object with customer info
const customerInfoOne = {
    'Account Holder': accountHolder,
    'Account Number': accountNumber,
    'Business Name': businessName,
    'Addresses': addresses,
    'Phone Numbers': phoneNumbers,
    'Transactions': transactions,
    'Starting Balance': startingBalance
}

// Function to add customer attributes
function addMelonsAndPets(customer, favoriteMelon='Canteloupe', numPets=0){
    customer['Favorite Melon'] = favoriteMelon;
    customer['Number of Pets'] = numPets;
}

// Add attributes for this user
addMelonsAndPets(customerInfoOne, "Casaba", 2)


// ///////////////////////////////////////////////////////
// Getting a Business Loan
function isPerferred(customer){
    if(customer['Favorite Melon'] === 'Casaba' || 
        customer['Number of Pets'] > 5){
            return true
    } else {
        return false
    }
}
console.log(isPerferred(customerInfoOne))

function loanCalculator(annualIncome, customerInfo) {
    if(isPerferred(customerInfo)) {
        if(annualIncome < 100000){
            return 0.07
        } else if (annualIncome >= 100000 || annualIncome <= 200000){
            return 0.04
    } else {
        if(annualIncome < 100000){
            return 0.08
        } else if (annualIncome >= 100000 || annualIncome <= 200000){
            return 0.07
        } else {
            return 0.04
        }
    }
}
}
console.log(loanCalculator(12000, customerInfoOne));

// Function to return loan rate


// ///////////////////////////////////////////////////////
// Account Report


// Add function to show bank customer report
function customerReport(customer, balance, transactions) {

    console.log("Account information");
    console.log("Name: " + customer["Account Holder"]);
    console.log("Business Name: " + customer["Business Name"]);
    console.log("Address: " + customer["Addresses"][0]);
    console.log("Home Phone Number: " + customer["Phone Numbers"][0]);
    console.log("Starting Balance: " + balance)
    showBalanceStatus(transactions, balance)
    if(isPerferred(customer)) {
        console.log("Congratulations on being a preferred customer!")
    }
}

customerReport(customerInfoOne, startingBalance, transactions)
// ///////////////////////////////////////////////////////
// PART 2:
// Bank Manager

// Create map of customer addresses


// Write a function to return the address of a given person


// Add a function to create an employee schedule for the week 


// Add a function for weekly hours




