// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines whether or not you need a licence to operate a certain kind of vehicle.
 *
 * @param {string} kind
 * @returns {boolean} whether a license is required
 */
export function needsLicense(kind) {
    return kind === 'car' || kind === 'truck';
  }
  console.log(needsLicense('car'))
  console.log(needsLicense('bike'))
  
  /**
   * Helps choosing between two options by recommending the one that
   * comes first in dictionary order.
   *
   * @param {string} option1
   * @param {string} option2
   * @returns {string} a sentence of advice which option to choose
   */
  export function chooseVehicle(option1, option2) {
    if (option1<option2){
        return option1 +" is clearly the better choice.";
    }
    else{
        return option2 + " is clearly the better choice.";
    }
  }
  console.log(chooseVehicle("tata","ford"))
  console.log(chooseVehicle("Toyota Corolla","Wuling Hongguang"))
  console.log(chooseVehicle("Volkswagen Beetle","Volkswagen Golf"))
  /**
   * Calculates an estimate for the price of a used vehicle in the dealership
   * based on the original price and the age of the vehicle.
   *
   * @param {number} originalPrice
   * @param {number} age
   * @returns {number} expected resell price in the dealership
   */
  export function calculateResellPrice(originalPrice, age) {

   if(age<3){
    return originalPrice*0.80;
   }
   else if(age>10){
    return originalPrice*0.50;
   }
    else{
      return originalPrice*0.70;
    }
  }
  
  console.log(calculateResellPrice(1000,7))