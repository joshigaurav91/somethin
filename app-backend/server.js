const express = require("express");
const app = express();
app.use(express.json())

// Before the other routes
app.use(express.static("build"))


const pokemons = [
{
    id: 1,
    name: "Pikachu",
    type: "electric ⚡️",
    level: 99,
    image: "/Pikachu.jpg"
},
{
    id: 2,
    name: "Magikarp",
    type: "water💧",
    level: 1,
    image: "/Magikarp.jpg"
}
]

app.get("/api/pokemons", (req, res) => {
    //res.send({pokemons: pokemons})
    res.send(pokemons)
});

app.post("/api/pokemons", (req, res) => {
    const data = req.body
    data.id = pokemons.length+1
    pokemons.push(data)
    res.send(data)
})

// After all other routes
app.get('*', (req, res) => {
    res.sendFile('../build/index.html')});

const port = process.env.PORT || 8080
app.listen(port, () => console.log(`listening on port ${port}`))