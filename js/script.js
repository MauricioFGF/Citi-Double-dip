document.addEventListener("DOMContentLoaded",() => {
    var screen = document.body.clientWidth
    var classes = document.querySelectorAll(".ice-creams")
    if (screen<=960 && classes.length>1){
        classes.forEach(function(element,index){
            if (index & 1){
                element.className= "ice-creams reverse"
            }
        })
    }
})

window.onresize = ()=>{
    var screen = document.body.clientWidth
    var classes = document.querySelectorAll(".ice-creams")
    var classesReverse = document.querySelectorAll(".ice-creams.reverse")
    
    if (screen<=960){
        classes.forEach(function(element,index){
            if (index & 1){
                element.className= "ice-creams reverse"
            }
            if (screen > 480){
                document.getElementById("txt-search").style.display = "flex"
                document.querySelector(".search-div").style.width = "68%"
            }

            if (screen < 480){
                document.getElementById("txt-search").style.display = "none"
                document.querySelector(".search-div").style.width = "25px"
            }

        })
    }
    else if (screen > 960 && classesReverse ){
        classesReverse.forEach(function(element){
            element.className= "ice-creams"
        })
    }
}

function colors(value){
    if (value.id ==="blue"){
        document.getElementById("footer").style.backgroundColor = "rgba(81, 111, 251, 0.56)";
        document.getElementById("header").style.background = "linear-gradient(180deg, rgba(81, 111, 251, 0.8) 44.17%, rgba(255, 255, 255, 0.12) 100%)"
    }
    else if (value.id ==="pink"){
        document.getElementById("footer").style.backgroundColor = "rgba(244, 155, 140, 0.56)";
        document.getElementById("header").style.background = "linear-gradient(180deg, #FF99C4 44.17%, rgba(255, 255, 255, 0.12) 100%)"
    }
    else if (value.id ==="orange"){
        document.getElementById("footer").style.backgroundColor = "rgba(240, 94, 43, 0.56)";
        document.getElementById("header").style.background = "linear-gradient(180deg, rgba(240, 94, 43, 0.8) 44.17%, rgba(255, 255, 255, 0.12) 100%)"
    }
}

function search(){
    const button = document.getElementById("txt-search")
    const text = document.querySelector(".search-div")
    if (document.body.clientWidth <=480){
        if(button.style.display ==="flex"){
            button.style.display = "none"
            text.style.width = "25px"
        }
        else{
            button.style.display = "flex"
            text.style.width = "130%"
        } 
    }
}


