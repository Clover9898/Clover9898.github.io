//players banking info
var playerBank = 100;
var requiredReserves;
var excessReserves;

//policy requirements
var requiredReservesRatio = 0.10;
var defaultInterest = 5;

//loan tracking
var loanedFunds = 0;

//daycounter
var day = 0;

//key input
document.addEventListener('keydown', function(event){
    let key = event.key;
    if(key === "Alt" && event.location == 2){
        alert("Hello, Mrs. Moore!");
    }
    if(key == "1"){
        generateNewCustomer();
    }
})

//generate a random number (inclusive)
function generateRandom(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//calculate players total available funds
function calculateFunds(){
    requiredReserves = playerBank*requiredReservesRatio;
    excessReserves = playerBank-requiredReserves;
}

//go to the next day
function nextDay(){
    day++;
    let incOrDec = generateRandom(0,1);
    let amt = generateRandom(1,2);
    if(incOrDec == 0){
        defaultInterest-amt;
    } else{
        defaultInterest+amt;
    }
}

updateMoneyDisplay();
resetLoanOptions(defaultInterest);
