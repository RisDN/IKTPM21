


const fejezetek = [
    "Első fejezet",
    "Második fejezet",
    "Harmadik fejezet",
    "Geci",
    "asdas"
]

let a = 0;
for(let i = 0; i < fejezetek.length; i++) {
    a++
    let ujelem = document.createElement("div")
    ujelem.innerHTML = `<button onclick="megjelenites(${a})">${fejezetek[i]}</button><br>`
    document.querySelector("#fejezet-gombok").appendChild(ujelem)
}

function megjelenites(melyik) {
    let fejezet = document.querySelectorAll(".fejezet")
    console.log(fejezet)
    for(let i = 0; i < fejezet.length; i++) {
        if(fejezet[i].id == `fejezet-${melyik}`) {
            fejezet[i].className = "fejezet aktiv"
        }else{
            fejezet[i].className = "fejezet inaktiv"
        }
    }
}