
const select = document.getElementById("playerSelect")

function loadPlayers(){
players.forEach(p=>{
let opt=document.createElement("option")
opt.value=p.name
opt.text=p.name
select.appendChild(opt)
})
}

function filterPlayers(){
let search=document.getElementById("playerSearch").value.toLowerCase()
select.innerHTML=""
players.filter(p=>p.name.toLowerCase().includes(search)).forEach(p=>{
let opt=document.createElement("option")
opt.value=p.name
opt.text=p.name
select.appendChild(opt)
})
}

function loadPlayerStats(){
let player=players.find(p=>p.name===select.value)
if(player){
document.getElementById("ppg").innerText=player.ppg
document.getElementById("rpg").innerText=player.rpg
document.getElementById("apg").innerText=player.apg
}
}

function impliedProb(odds){
odds=Number(odds)
if(odds>0){return 100/(odds+100)*100}
else{return (-odds)/((-odds)+100)*100}
}

function calculate(){

let odds=document.getElementById("odds").value
let last10=Number(document.getElementById("last10").value)
let matchup=Number(document.getElementById("matchup").value)
let minutes=Number(document.getElementById("minutes").value)
let pace=Number(document.getElementById("pace").value)
let usage=Number(document.getElementById("usage").value)

let implied=impliedProb(odds)

let model =
last10*0.40 +
matchup*0.20 +
minutes*0.15 +
usage*0.15 +
pace*0.10

let edge=model-implied

document.getElementById("implied").innerText=implied.toFixed(2)+"%"
document.getElementById("model").innerText=model.toFixed(2)+"%"
document.getElementById("edge").innerText=edge.toFixed(2)+"%"

document.getElementById("decision").innerText=edge>=7?"BET":"PASS"
}

loadPlayers()
