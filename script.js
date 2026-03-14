function generate(){

let targetAvg = parseInt(document.getElementById("avg").value)

if(!targetAvg){
alert("Please enter average")
return
}

let min = targetAvg - 10
let max = targetAvg + 10

let numbers = []

for(let i=0;i<19;i++){

let n = Math.floor(Math.random()*(max-min+1))+min
numbers.push(n)

}

let requiredTotal = targetAvg * 20
let sum19 = numbers.reduce((a,b)=>a+b,0)

let last = requiredTotal - sum19

while(last < min || last > max){

numbers=[]

for(let i=0;i<19;i++){

let n = Math.floor(Math.random()*(max-min+1))+min
numbers.push(n)

}

sum19 = numbers.reduce((a,b)=>a+b,0)
last = requiredTotal - sum19

}

numbers.push(last)

let sum = numbers.reduce((a,b)=>a+b,0)
let avg = sum / numbers.length

let highest = Math.max(...numbers)
let lowest = Math.min(...numbers)

let highError = ((highest-avg)/avg)*100
let lowError = ((lowest-avg)/avg)*100

let tbody = document.getElementById("tableBody")
tbody.innerHTML=""

numbers.forEach((n,i)=>{

tbody.innerHTML += `<tr>
<td>${i+1}</td>
<td>${n}</td>
</tr>`

})

document.getElementById("avgResult").innerText = avg.toFixed(2)
document.getElementById("highError").innerText = highError.toFixed(6) + "%"
document.getElementById("lowError").innerText = lowError.toFixed(6) + "%"

}

function resetTable(){

document.getElementById("tableBody").innerHTML=""

document.getElementById("avgResult").innerText="-"
document.getElementById("highError").innerText="-"
document.getElementById("lowError").innerText="-"

}
