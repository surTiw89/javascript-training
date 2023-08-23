// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  switch (name){
      case 'Pure Strawberry Joy':
      return 0.5;
      break;
     case 'Energizer':
    case 'Green Garden':
      return 1.5;
      break;
      case 'Tropical Island':
          return 3;
      break;
      case 'All or Nothing':
          return 5;
      break;
      default:
          return 2.5;
  }
}
console.log(timeToMixJuice('SPECIAL JOY'))
/**
* Calculates the number of limes that need to be cut
* to reach a certain supply.
*
* @param {number} wedgesNeeded
* @param {string[]} limes
* @returns {number} number of limes cut
*/
export function limesToCut(wedgesNeeded, limes) {
  

if (wedgesNeeded === 0 ){
  return 0;
}
else{
  var sumwedge=0;
  var i= 0;
  while (sumwedge<=wedgesNeeded){
    
    if(limes[i]==='small'){
    sumwedge += 6;
      console.log(sumwedge)
    }
    else if(limes[i]==='medium'){
      sumwedge +=8;
      console.log(sumwedge)
    }
    else if(limes[i]==='large'){
      sumwedge +=10;
      console.log(sumwedge)
    }
    else {
      break;
      console.log(sumwedge)
    }
    i++;
  }
 
  return i;
}
}

/**
* Determines which juices still need to be prepared after the end of the shift.
*
* @param {number} timeLeft
* @param {string[]} orders
* @returns {string[]} remaining orders after the time is up
*/
export function remainingOrders(timeLeft, orders) {
 var i=0;
var time_taken=0;
 while( time_taken<= timeLeft){
  orders.shift();
  time_taken +=timeToMixJuice(orders[i]);
  console.log(time_taken)
  i++;
 }
 return orders;
}
  console.log(remainingOrders(5, ['Energizer', 'All or Nothing', 'Green Garden']))