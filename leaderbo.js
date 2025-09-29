// Load players from local storage 
function loadPlayers() {
  const stored = localStorage.getItem("players");
  if (stored) {
    players = JSON.parse(stored);
  }
}
// save players to local storage
function savePlayers() {
  localStorage.setItem("players", JSON.stringify(players));
}

// Render leaderboard table
function renderLeaderboard() {
  const tbody = document.getElementById("leaderboardBody");
  tbody.innerHTML = "";

  // Sort players by points
  players.sort((a, b) => b.points - a.points);

  // Loop through each player
  players.forEach((player, index) => {
    const row = document.createElement("tr");

    // Rank
    const rankCell = document.createElement("td");
    rankCell.textContent = index + 1;
    row.appendChild(rankCell);

    // Name
    const nameCell = document.createElement("td");
    nameCell.textContent = player.name;
    row.appendChild(nameCell);

    // Points
    const pointsCell = document.createElement("td");
    pointsCell.textContent = player.points;
    row.appendChild(pointsCell);

    // Actions (Win/Loss buttons)
    const actionCell = document.createElement("td");

    const winButton = document.createElement("button");
    winButton.textContent = "Win";
    winButton.classList.add("win-btn");
    winButton.addEventListener("click", () => updateScore(player.name, "win"));


    const lossButton = document.createElement("button");
    lossButton.textContent = "Loss";
    lossButton.classList.add("loss-btn"); 
    lossButton.addEventListener("click", () => updateScore(player.name, "loss"));

    actionCell.appendChild(winButton);
    actionCell.appendChild(lossButton);
    row.appendChild(actionCell);

    tbody.appendChild(row);
  });
}

// Update a player's score
function updateScore(name, result) {
  const player = players.find(p => p.name === name);
  if (result === "win") {
    player.points += 50;
  } else if (result === "loss") {
    player.points -= 30;
  }
  savePlayers(); 
  renderLeaderboard();
}

// Resets all players scores 
function resetScores() {
  players.forEach(player => {
    player.points = 0;
  });
  savePlayers();     
  renderLeaderboard(); 
}
document.getElementById("resetBtn").addEventListener("click", resetScores);

// Run when page loads
savePlayers(); 
renderLeaderboard();

