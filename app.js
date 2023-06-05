function randomNumber (){
    let rand = Math.floor(Math.random() * 100);

    document.getElementById("num").innerHTML = rand.toString();
}