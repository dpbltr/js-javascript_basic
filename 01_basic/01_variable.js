const accountId =  23
let accountEmail  = "dee@gmail.com";
var accountPassword ="123456";
accountCity = "Varanasi"
// accountId =  2  Not allowed

accountEmail = "hcl@gmail.com"
accountPassword = "258963"
accountCity  = 'Jaipur'
let accountState;

/*
Prefer not to use var
because of issue is block scope  and function  scope 
*/
console.log(accountId);
console.table([accountId, accountEmail ,accountPassword, accountCity, accountState])

