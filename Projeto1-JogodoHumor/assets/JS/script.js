function mudarHumor1(){
    let status = document.getElementById("age").innerHTML;
    console.log(status)
    if (status === "19") {
        document.getElementById("age").innerHTML = "319";
        document.getElementById("img1").src="assets/img/ura_old.gif";
        document.getElementById("b1").value = "Voltar ao Começo";
        document.getElementById("lenda6").innerHTML = 'Tomado de grande tristeza, foi para a beira do mar na esperança de reencontrar a tartaruga,mas desesperou-se porque esta demorava e acabou abrindo a caixa que a princesa lhe havia oferecido. De dentro dela saiu uma nuvem de fumaça branca, que o envolveu. De repente, seu corpo tornou-se velho e enrugado, nasceu-lhe uma longa barba branca e suas costas curvaram-se com o peso de tantos anos. E do mar veio a voz doce e triste da princesa: "Eu lhe disse para não abrir a caixa. Nela estavam todos os seus anos …" A caixa continha a "eterna juventude" de Urashima Taro e o pescador, sem reconhecer seu valor, deixou-a ir-se para sempre';
        window.scrollTo(0, document.body.scrollHeight);
    }
    else if (status === "319") {
        document.getElementById("age").innerHTML = "19";
        document.getElementById("img1").src="assets/img/ura_young.gif";
        document.getElementById("b1").value = "Abrir Caixa";
        document.getElementById("lenda6").innerHTML = 'Clique em <span id="final">"Abrir Caixa"</span> no card de Urashima Tarô para saber o final da história';
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}
