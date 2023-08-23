/**
 * Creates a new score board with an initial entry.
 *
 * @returns {Record<string, number>} new score board
 */
export 
/**
 * The createScoreBoard function creates a new object that represents the score board.
 * 
 *
 *
 * @return An object
 *
 * @docauthor Trelent
 */
function createScoreBoard() {
    const scoreBoard= {
        'The Best Ever':1000000,

    };
return scoreBoard;
  }

  console.log(createScoreBoard())

 /**
 * Adds a player to a score board.
 *
 * @param {Record<string, number>} scoreBoard
 * @param {string} player
 * @param {number} score
 * @returns {Record<string, number>} updated score board
 */
export function addPlayer(scoreBoard, player, score) {
   scoreBoard[player] = score;
   return scoreBoard;
 }
  
 console.log(addPlayer({"Davos":5000},"amit",5200))

 /**
 * Removes a player from a score board.
 *
 * @param {Record<string, number>} scoreBoard
 * @param {string} player
 * @returns {Record<string, number>} updated score board
 */
export 
/**
 * The removePlayer function removes a player from the scoreBoard object.
 * 
 *
 
 *
 * @docauthor Trelent
 */

/**
 * The removePlayer function removes a player from the scoreBoard object.
 * 
 *
 * @param scoreBoard Pass the scoreboard object into the function
 * @param player Identify which player to remove
 *
 * @return The scoreboard object
 *
 * @docauthor Trelent
 */
function removePlayer(scoreBoard, player) {
  delete scoreBoard[player];
  return scoreBoard;
}

console.log(removePlayer({"Davos":5000,"amit":5200,},'amit'))

/**
 * Increases a player's score by the given amount.
 *
 * @param {Record<string, number>} scoreBoard
 * @param {string} player
 * @param {number} points
 * @returns {Record<string, number>} updated score board
 */
export function updateScore(scoreBoard, player, points) {
  throw new Error('Please implement the updateScore function');
}