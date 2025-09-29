// data.js
let players = JSON.parse(localStorage.getItem("players")) || [
    { name: "Kamya", points: 0 },
    { name: "Ivy N", points: 0 },
    { name: "Winnie", points: 0 },
    { name: "Ben", points: 0 },
    { name: "Yvonne", points: 0 },
    { name: "Ivy G", points: 0 }
  ];
  // Saves players score to local storage
  if (!localStorage.getItem("players")) {
    localStorage.setItem("players", JSON.stringify(players));
  }