//const cursos=['HTML', 'CSS', 'JavaScript', 'PHP','React']

/*
cursos.map((el, i)=>{
    console.log("Curso: " + el + " - Posição do curso: " + i)
})
*/

/*
let c=cursos.map((el,i)=>{
    return el
})

console.log(c)
*/

/*
let el = document.getElementsByTagName("div")
el = [...el]
console.log(el)
el.map((e, i) => {
    e.innerHtml="CFB CURSOS"
})
*/

/*
const el = document.getElementsByTagName("div")
const val = Array.prototype.map.call(el,({innerHTML})=>innerHTML)
console.log(val)
*/

const converterInt = (e) => parseInt(e)
let num = ['1', '2', '3', '4', '5'].map(converterInt)
console.log(num)