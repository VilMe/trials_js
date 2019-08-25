// ///////////////////////////////////////////////////////
// PART 1
// Account information:

let accountHolder = "Balloonicorn";
const accountNumber = "123456";
let businessName = "Balloonicorn's Cupcake Shop";

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


// Add function to add transactions


// Use the function to add transactions


// Add function to show balance status


// Add function to show transactions


// ///////////////////////////////////////////////////////
// All Customer Info:

// Make an object with customer info


// Function to add customer attributes


// Add attributes for this user


// ///////////////////////////////////////////////////////
// Getting a Business Loan


// Function to return loan rate


// ///////////////////////////////////////////////////////
// Account Report


// Add function to show bank customer report



// ///////////////////////////////////////////////////////
// PART 2:
// Bank Manager

// Create map of customer addresses


// Write a function to return the address of a given person


// Add a function to create an employee schedule for the week 


// Add a function for weekly hours




