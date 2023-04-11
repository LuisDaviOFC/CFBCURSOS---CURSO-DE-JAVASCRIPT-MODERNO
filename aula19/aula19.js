/*
function nome(){
    console.log("CFB CURSOS")
}
*/

/*
function soma2_10(){
    let n1 = 2
    let n2 = 10
    let soma = n1 + n2
    console.log(soma)
}

for(let i=0; i<10; i++){
    soma2_10()
}
*/

/*
function mudarTexto(){
    let d1 = document.getElementById("d1")
    let d2 = document.getElementById("d2")
    let d3 = document.getElementById("d3")
    d1.innerHTML = "CFB CURSOS"
    d2.innerHTML ="CFB CURSOS"
    d3.innerHTML = "CFB CURSOS"
} 
*/

function canal(){
    let n1 = 10
    let n2 = 2
    let res = n1 * n2
    if(res%2 == 0){
        return "Par"
    }else{
        return "Impar"
    }
}

let res = canal()

console.log(res)

