const express = require("express");
const app = express();
const cors = require("cors");
// http://localhost:3000/
main();

async function main() {

    app.use(express.json());
    app.use(cors());

    let friends = {
        1: { name: "Kamya", latenessCount: 1, totalMinutesLate: 10},
        2: { name: "Ivy", latenessCount: 2, totalMinutesLate: 15},
        3: { name: "Lisa", latenessCount: 5, totalMinutesLate: 75},
        4: { name: "Yvonne", latenessCount: 1, totalMinutesLate: 5},
        5: { name: "Winnie", latenessCount: 4, totalMinutesLate: 50},
    };
    let next_id = 6;

    // Fetch all friends
    app.get("/api/friends", function(req, res) {
        res.send(friends);
    });

    // Fetch a single friend
    app.get("/api/friend/:id", function(req, res) {
        const id = req.params.id;
        if (friends[id]) res.send(friends[id]);
        else res.status(404).send({ error: 404, msg: "Friend not found"});
    });

    // Create a new friend
    app.post("/api/friend", function(req, res) {
        const newFriend = req.body;
        newFriend.latenessCount = 0;
        newFriend.totalMinutesLate = 0;
        friends[next_id] = newFriend;
        res.send({ id: next_id, friend: newFriend});
        next_id++;
    });

    // Update lateness
    app.put("/api/friend/:id", function(req, res) {
        const id = req.params.id;
        const minutesLate = req.body.minutesLate;
        
        if (friends[id]) {
            friends[id].latenessCount += 1;
            friends[id].totalMinutesLate += minutesLate;
        res.send({
            id,
            name: friends[id].name,
            latenessCount: friends[id].latenessCount,
            totalMinutesLate: friends[id].totalMinutesLate,
        });
        } else {
            res.status(404).send({ error: 404, msg: "Friend not found"});
        }
    });

    // Delete a friend
    app.delete("/api/friend/:id", function(req, res) {
        const id = req.params.id;
        if (friends[id]) {
            delete friends[id];
            res.send({ msg: "Friend deleted Successful"});
        } else {
            res.status(404).send({ error: 404, msg: "Friend not found"});
        }
    });

    app.get("/", function(req, res) {
        res.send("<h1>Welcome to our Lateness Tracker!</h1>");
    });

    app.listen(3000, function() {
        console.log("Listening on port 3000...");
    });
}