document.getElementById("b1").addEventListener("click", mudarHumor1());

function mudarHumor1(){
    let humor1 = document.getElementById("b1").innerHTML;
    console.log(humor1)
    document.getElementById("m1").innerHTML = "Voltou"
    // if (humor1 === "Mudou") {
                
    // }
    // else {
    //     humor1.value = "Anormal";
    // }
};