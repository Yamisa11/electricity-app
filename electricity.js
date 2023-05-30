function Electricity() {
  var unitsAvailable = 0;
  var advance = 0;
  var topUp = 0;
  var totalAmount = 0;
  var totalUnitsBou = 0;
  // do we want to go with this or array?
  let appliances = {
    Stove: 10,
    Kettle: 5,
    TV: 3,
    Fridge: 13,
  };

  function topUpElectricity(amount) {
    topUp = amount;
    // check input amount and add corresponding units to the total number of units
    if (topUp == 10) {
      unitsAvailable = unitsAvailable + 7;
      totalAmount = totalAmount + amount;
      totalUnitsBou = totalUnitsBou + 7;
    }
    if (topUp == 20) {
      unitsAvailable = unitsAvailable + 14;
      totalAmount = totalAmount + amount;
      totalUnitsBou = totalUnitsBou + 14;
    }
    if (topUp == 50) {
      unitsAvailable = unitsAvailable + 35;
      totalAmount = totalAmount + amount;
      totalUnitsBou = totalUnitsBou + 35;
    }

    if (topUp == "advance") {
      if (advance < 1) {
        unitsAvailable = unitsAvailable + 21;
        totalUnitsBou = totalUnitsBou + 21;
        advance++;
      }
    }

    if (topUp > 1) {
      if (advance > 1 && unitsAvailable > 1) {
        unitsAvailable = unitsAvailable - topUp;
      }
    }
  }

  /*
   * return true and substract from unit available if there is enough units to use the appliance
   * other wise return false and do nothing.
   */
  function useAppliance(appliance) {
    //  check type of appliance and if the units available alow the appiance to be used
    // returns true is able to use it and false if the units available are not enough
    if (appliance == "Fridge") {
      if (unitsAvailable >= 13) {
        unitsAvailable = unitsAvailable - 13;
        return true;
      } else {
        return false;
      }
    }

    if (appliance == "Kettle") {
      if (unitsAvailable >= 5) {
        unitsAvailable = unitsAvailable - appliances.Kettle;
        return true;
      } else {
        return false;
      }
    }
    if (appliance == "TV") {
      if (unitsAvailable >= 3) {
        unitsAvailable = unitsAvailable - appliances.TV;
        return true;
      } else {
        return false;
      }
    }
    if (appliance == "stove") {
      if (unitsAvailable >= 10) {
        unitsAvailable = unitsAvailable - appliances.Stove;
        return true;
      } else {
        return false;
      }
    }
  }

  function getUnitsAvailable() {
    // returns total number of units available after the topping up and using appliances is done
    return unitsAvailable;
  }
  // checks is advance is taken, returns true if yes and false if not
  function advanceTaken() {
    if (advance == 1) {
      return true;
    } else {
      return false;
    }
  }
  // returns total amount used to topup
  function totalAmountSpent() {
    return totalAmount;
  }
  // return the total amunt of units bought altogether
  function totalUnitsBought() {
    return totalUnitsBou;
  }

  return {
    advanceTaken,
    topUpElectricity,
    getUnitsAvailable,
    useAppliance,
    totalAmountSpent,
    totalUnitsBought,
  };
}
