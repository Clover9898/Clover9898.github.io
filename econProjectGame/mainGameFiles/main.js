//players banking info
var playerBank = 1000;
var requiredReserves;
var excessReserves;

//policy requirements
var requiredReservesRatio = 0.10;
var defaultInterest = 10;
var interestChange = 0;

//loan tracking
var loanedFunds = 0;

//daycounter
var day = 0;

//key input
document.addEventListener('keydown', function(event){
    let key = event.key;
    if(key === "Alt" && event.location == 2){
        alert("Hello, Mrs. Moore! If you find any bugs (problems) or have any suggestions, please email me! (nathanieldykhouse@gpsbulldogs.org or nathaniel.dykhouse@gmail.com)");
    }
})

//generate a random number (inclusive)
function generateRandom(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}



//calculate players total available funds
function calculateFunds(){
    let totBal = calcTotalBal();
    requiredReserves = totBal*requiredReservesRatio;
    excessReserves = playerBank-requiredReserves;
}

//go to the next day
function nextDay(){
    day++;
    if(playerBank < 0){
      const loseImg = document.getElementById("loseScreen");
      loseImg.style.visibility = "visible";
    } else if(playerBank >= 10000){
      const winImg = document.getElementById("winScreen");
      winImg.style.visibility = "visible";
    } else{
      let incOrDec = generateRandom(0,1);
      let amt = generateRandom(1,2);
      if(incOrDec == 0){
          defaultInterest-=amt;
      } else{
          defaultInterest+=amt;
      }
      for(let i = 0; i < 3; i++){
          generateNewCustomer();
      }
      incrementAllLoans();
      if(day === 1){
        displayTutorial();
        displayCustomerInfo();
      } else{
        displayCustomerInfo();
      }
    }
}

//truncate to decimal place
function truncNum(num, decimals){
    const fac = Math.pow(10, decimals);
    return Math.trunc(num * fac)/fac;
}

//excessReserves get
function getExcessReserves(){
    calculateFunds();
    return excessReserves;
}

//starting commands
nextDay();
resetLoanOptions(defaultInterest);
