function Electricity() {
var unitsAvailable = 0;
var advance = 0
var topUp = 0;
var totalAmount = 0;
var totalUnitsBou = 0; 
    // do we want to go with this or array? 
    let appliances = {
        'Stove': 10, 
        'Kettle': 5, 
        'TV': 3, 
        'Fridge': 13
    };

    function topUpElectricity(amount) {
        topUp = amount 
        if (topUp == 10){ //checks if toput is R10 then adds 7 units to units available, add total amount and total amount bought
            unitsAvailable = unitsAvailable + 7       
            totalAmount = totalAmount + parseInt(amount) // converts amount to int for calculation
            totalUnitsBou = totalUnitsBou + 7
        }
        if (topUp == 20){  //checks if toput is R20 then adds 14 units to units available, add total amount and total amount bought
            unitsAvailable = unitsAvailable + 14
            totalAmount = totalAmount + parseInt(amount)
            totalUnitsBou = totalUnitsBou + 14
        }
        if (topUp == 50){  //checks if toput is R50 then adds 21 units to units available, add total amount and total amount bought
            unitsAvailable = unitsAvailable + 35
            totalAmount = totalAmount + parseInt(amount)
            totalUnitsBou = totalUnitsBou + 35
        }
        
        if (topUp == 'advance'){
            if (advance<1 ) {  //checks if toput is adance then adds 21 units to units available, add total amount and total amount bought
            unitsAvailable = unitsAvailable + 21
            totalUnitsBou = totalUnitsBou + 35
            advance++
            }
        }
       
        if (topUp>1){
            if(advance>1 && unitsAvailable>1){
                unitsAvailable = unitsAvailable - topUp
            }
         
        }

       

    }
    

    
    /*
    * return true and substract from unit available if there is enough units to use the appliance
    * other wise return false and do nothing.
    */
    function useAppliance(appliance) {
    
     
        if (appliance == 'Fridge') {  // checks if appliance selected is fridge and there's enough units available to use it (deduct units)
            if (unitsAvailable >= 13) {
                unitsAvailable = unitsAvailable - 13
                return true
            } else{
                return false
            }
            }
            
        if (appliance == 'Kettle') { // checks if appliance selected is kettle and there's enough units available to use it (deduct units)
            if(unitsAvailable >= 5){
                unitsAvailable = unitsAvailable - appliances.Kettle
                return true
            } else{
                return false
            }
           
        }
        if (appliance == 'TV') { // checks if appliance selected is TV and there's enough units available to use it (deduct units)
            if (unitsAvailable >= 3) {
                unitsAvailable = unitsAvailable - appliances.TV   
                return true
            } else{ return false}
            
        }
        if (appliance == 'stove') { // checks if appliance selected is stove and there's enough units available to use it (deduct units)
            if(unitsAvailable >= 10){
                unitsAvailable = unitsAvailable - appliances.Stove
                return true
            } else{
                return false
            }
            
        }

        
    }
    
    function getUnitsAvailable() {
    
         return unitsAvailable; // returns total units available after topup and deducting
    }
    
    function advanceTaken() {
        if (advance == 1){ // checks if advance has been taken the returns true and false if not
           
            return true
        }else{
            return false
        }
    }

    function totalAmountSpent() {
        return totalAmount // returns total amount that was bought
    }

    function totalUnitsBought(){
        return totalUnitsBou
    }

    return {
        advanceTaken,
        topUpElectricity,
        getUnitsAvailable,
        useAppliance,
        totalAmountSpent,
        totalUnitsBought

    }
}