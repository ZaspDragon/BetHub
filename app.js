
function showTab(tab){
document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'))
document.getElementById(tab).classList.add('active')
}

function impliedProbability(odds){
odds = Number(odds)
if(odds > 0){
return 100/(odds+100)*100
}else{
return (-odds)/((-odds)+100)*100
}
}

function calculateEdge(){

let odds = document.getElementById("odds").value
let last10 = Number(document.getElementById("last10").value)
let matchup = Number(document.getElementById("matchup").value)
let minutes = Number(document.getElementById("minutes").value)
let pace = Number(document.getElementById("pace").value)
let usage = Number(document.getElementById("usage").value)

let implied = impliedProbability(odds)

let model =
last10*0.4 +
matchup*0.2 +
minutes*0.15 +
usage*0.15 +
pace*0.1

let edge = model - implied

document.getElementById("implied").innerText = implied.toFixed(2)+"%"
document.getElementById("model").innerText = model.toFixed(2)+"%"
document.getElementById("edge").innerText = edge.toFixed(2)+"%"

let recommendation = edge >= 7 ? "BET" : "PASS"

let el = document.getElementById("betpass")
el.innerText = recommendation
el.style.color = recommendation==="BET" ? "#22c55e" : "#ef4444"

addHistory(edge)
}

function addHistory(edge){

let player = document.getElementById("player").value
let prop = document.getElementById("prop").value
let odds = document.getElementById("odds").value

let table = document.getElementById("historyTable")

let row = table.insertRow(-1)
row.insertCell(0).innerText = player
row.insertCell(1).innerText = prop
row.insertCell(2).innerText = odds
row.insertCell(3).innerText = edge.toFixed(2)+"%"
}
