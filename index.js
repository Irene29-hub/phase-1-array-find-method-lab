// code your solution here
function superbowlWin(record) {
  // Use the find() method to iterate through the array of game records.
  // The callback function checks if the 'result' property of an object is 'W' (for a win).
  const winRecord = record.find(game => game.result === "W");

  // If a win record is found (i.e., winRecord is not undefined),
  // return the 'year' property of that record.
  if (winRecord) {
    return winRecord.year;
  } else {
    // If no win record is found, return undefined as specified.
    return undefined;
  }
}