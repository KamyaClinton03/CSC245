// Fetch all the friends 
fetch('http://localhost:3000/api/friends').then(response => response.json()).then(data => {console.log("All friends:", data);
  }).catch(error => {console.error("Error fetching friends:", error);});

// Fetch a single friend 
fetch("http://localhost:3000/api/friend/1").then(res => res.json()).then(console.log)

// Create a new friend 
// POST
fetch("http://localhost:3000/api/friend", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name: "Jake" })
}) .then(res => res.json()).then(console.log)

// Update lateness for a friend 
// PUT
fetch("http://localhost:3000/api/friend/6", { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ minutesLate: 15 })
  }).then(res => res.json()).then(console.log)

// Delete a friend 
// DELETE
fetch("http://localhost:3000/api/friend/6", { method: "DELETE" }).then(res => res.json()).then(console.log)


