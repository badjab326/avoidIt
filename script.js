var character = document.getElementById("character");
var enemy = document.getElementById("enemy");
function jump(){
    if(character.classList != "animate"){
        character.classList.add("animate");
    }
    setTimeout(function(){
        character.classList.remove("animate");
    },500);
}

var checkDead = setInterval(function(){
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var enemyLeft = parseInt(window.getComputedStyle(enemy).getPropertyValue("left"));
    if(enemyLeft<20 && enemyLeft>0 && characterTop>=130){
        enemy.style.animation = "none";
        enemy.style.display = "none";
        alert("RIP");
    }
},10)