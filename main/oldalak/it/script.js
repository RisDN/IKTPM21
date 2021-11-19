var alapok
function hiddenbtn()
{
    if(alapok==1)
    {
        document.getElementById("hidden").style.display="none";
        return alapok=0;
    }
    else
    {
        document.getElementById("hidden").style.display="inline";
        return alapok=1;
    }
}

var valami
function hiddenbtn2()
{
    if(valami==1)
    {
        document.getElementById("hidden2").style.display="none";
        return valami=0;
    }
    else
    {
        document.getElementById("hidden2").style.display="inline";
        return valami=1;
    }
}

const effect = document.querySelectorAll("nagy");
effect.forEach(btn => {
    btn.addEventListener("click", function(e) {

        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;

        let ripples = document.createElement("span")
        ripples.style.left = x + "px";
        ripples.style.top = y + "px";
        this.appendChild(ripples);
        
    })
})