// Randomly shuffles the order of elements in an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      // Pick a random index from 0 to i
      const j = Math.floor(Math.random() * (i + 1));
       // Swap elements at positions i and j
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  // Generate random matchups between players
  function generateMatches() {
    const matchList = document.getElementById("matchList");
    matchList.innerHTML = "";
  
    // Make a copy of the players array and shuffle it
    const shuffled = shuffle(players.slice());

  // Loop through the shuffled players in pairs
    for (let i = 0; i < shuffled.length; i += 2) {
      const player1 = shuffled[i];
      const player2 = shuffled[i + 1];
      // Create a list item for the match
      const li = document.createElement("li");
      if (!player2) {
        // If there's an odd player
        li.textContent = `${player1.name} your out this round`;
      } else {
        // Otherwise create a match
        li.textContent = `${player1.name} vs ${player2.name}`;
      }
      // Add the matches to the page 
      matchList.appendChild(li);
    }
  }
  // Event listener to the generate button
  document.getElementById("generateBtn").addEventListener("click", generateMatches);  