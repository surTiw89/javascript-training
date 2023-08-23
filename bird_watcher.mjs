// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
   
    var sum = 0;
  for (var i=0;i<birdsPerDay.length;i++){

    sum =sum + birdsPerDay[i]
    
   
  }
  return sum;
  

  
}
console.log(totalBirdCount([8,9,10,11,12,13,14]))

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {

    var end = 7*week;               // take week convert into 7 *  (1,2,3) 
    var sum = 0;
    for(var i=end-7;i<end;i++){            ///// startindex [7(1)], end condition[7()]
      sum=sum+birdsPerDay[i];
    }
    return sum;
    }
    console.log(birdsInWeek([1,2,3,4,5,6,7,8,9,10,11,12,13,14],2))

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {number[]} corrected bird count data
 */
export function fixBirdCountLog(birdsPerDay) {
  for(var i= 0;i<birdsPerDay.length;i=i+2){
    birdsPerDay[i]=birdsPerDay[i] +1;
  }
  return birdsPerDay;
}

console.log(fixBirdCountLog([8,9,10,11,12,13]))