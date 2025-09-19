function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  function generateMatches() {
    const matchList = document.getElementById("matchList");
    matchList.innerHTML = "";
  
    const shuffled = shuffle(players.slice());
  
    for (let i = 0; i < shuffled.length; i += 2) {
      const player1 = shuffled[i];
      const player2 = shuffled[i + 1];
  
      const li = document.createElement("li");
      if (!player2) {
        li.textContent = `${player1.name} has a bye!`;
      } else {
        li.textContent = `${player1.name} vs ${player2.name}`;
      }
      matchList.appendChild(li);
    }
  }
  
  document.getElementById("generateBtn").addEventListener("click", generateMatches);  