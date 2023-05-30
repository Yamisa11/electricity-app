// DOM element(s) references
var topUpBtn = document.querySelector('.topupNow')
var availableUnitsDisplay = document.querySelector('.unitsAvailable')
var totalUnitsdDisplay = document.querySelector('.totalUnits')
var totalAmountsDisplay = document.querySelector('.totalAmount')
var useBtn = document.querySelector('.useNow')
var imageAdvance = document.querySelector('.advanceTaken')


// Factory Function instance 
const electricity =  Electricity();


// DOM events here 
var unitsAvailable = 0
var totalAvail = JSON.parse(localStorage.getItem("availableUnits"))
var totalUnits = JSON.parse(localStorage.getItem("totalUnits"))
var totalMoney = JSON.parse(localStorage.getItem("totalAmount"))
availableUnitsDisplay.innerHTML = totalAvail
totalUnitsdDisplay.innerHTML = totalUnits
totalAmountsDisplay.innerHTML = totalMoney
// top up button clicked
topUpBtn.addEventListener('click', function(){

    // getting input from radio button. top up value
var checkedTopup = document.querySelector(
        'input[class="topup"]:checked'
     );
    // using the value of selected radio buttton
var input = checkedTopup.value

 electricity.topUpElectricity(input)
 unitsAvailable = electricity.getUnitsAvailable()

 if(electricity.advanceTaken() == true){
    imageAdvance.classList.remove('hidden')
 }
// displaying the totals
availableUnitsDisplay.innerHTML = unitsAvailable
totalUnitsdDisplay.innerHTML = electricity.totalUnitsBought()
totalAmountsDisplay.innerHTML = electricity.totalAmountSpent()
localStorage["availableUnits"] = JSON.stringify(electricity.getUnitsAvailable()) // adding anits to local storage
localStorage["totalUnits"] = JSON.stringify(electricity.totalUnitsBought())     // adding total units bought to 
localStorage["totalAmount"] = JSON.stringify(electricity.totalAmountSpent())   // adding total amount to local storage

})

useBtn.addEventListener('click', function(){
      // getting input from radio button. type of used appliance
    var checkedAppliance = document.querySelector(
        'input[class="usage"]:checked'
     );

     electricity.useAppliance(checkedAppliance.value)
     availableUnitsDisplay.innerHTML = electricity.getUnitsAvailable()
     localStorage["availableUnits"] = JSON.stringify(electricity.getUnitsAvailable())
     localStorage["totaUnits"] = JSON.stringify(electricity.totalUnitsBought())
localStorage["totalAmount"] = JSON.stringify(electricity.totalAmountSpent())

})

;