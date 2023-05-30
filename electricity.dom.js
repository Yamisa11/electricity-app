// DOM element(s) references
var topUpBtn = document.querySelector('.topupNow')
var availableUnitsDisplay = document.querySelector('.unitsAvailable')
var totalUnitsdDisplay = document.querySelector('.totalUnits')
var totalAmountsDisplay = document.querySelector('.totalAmount')
var useBtn = document.querySelector('.useNow')


// Factory Function instance 
const electricity =  Electricity();


// DOM events here 
var unitsAvailable = 0

// top up button clicked
topUpBtn.addEventListener('click', function(){

    // getting input from radio button. top up value
var checkedTopup = document.querySelector(
        'input[class="topup"]:checked'
     );
    // changing value from radio button from string to number inorder to be able to add
var input = parseInt(checkedTopup.value)

 electricity.topUpElectricity(input)
 unitsAvailable = electricity.getUnitsAvailable()
// displaying the totals
availableUnitsDisplay.innerHTML = unitsAvailable
totalUnitsdDisplay.innerHTML = electricity.totalUnitsBought()
totalAmountsDisplay.innerHTML = electricity.totalAmountSpent()
localStorage["availableUnits"] = JSON.stringify(electricity.getUnitsAvailable())

})

useBtn.addEventListener('click', function(){
      // getting input from radio button. type of used appliance
    var checkedAppliance = document.querySelector(
        'input[class="usage"]:checked'
     );

     electricity.useAppliance(checkedAppliance.value)
     availableUnitsDisplay.innerHTML = electricity.getUnitsAvailable()
     localStorage["availableUnits"] = JSON.stringify(electricity.getUnitsAvailable())

})

;