function mudarHumor1(){
    let status = document.getElementById("m1").innerHTML;
    console.log(status)
    if (status === "Humor1") {
        document.getElementById("m1").innerHTML = "Humor2";
        document.getElementById("img1").src="assets/img/Portrait_Placeholder_neg.png";
        document.body.style.backgroundColor = "#000000";
    }
    else if (status === "Humor2") {
        document.getElementById("m1").innerHTML = "Humor1";
        document.getElementById("img1").src="assets/img/Portrait_Placeholder.png";
    }
}