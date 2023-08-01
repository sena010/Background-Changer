const colorName = document.getElementById('colorName')
const btn = document.getElementById('btn')

let colors = ['#3F00FF', '#89CFF0', '#5F9EA0', '#CCCCFF']
let bodyColor = document.body.style.backgroundColor


/*function backgroundChanger() {
    for (let i = 0; i <= colors.length; i++) {
        let randomCreator = Math.floor(Math.random() * colors.length)
        document.body.style.backgroundColor = colors[randomCreator]
        console.log(bodyColor)
        return bodyColor
    }
}*/

function backgroundChanger2() {
    let randomCreator = Math.floor(Math.random() * colors.length)
    document.body.style.backgroundColor = colors[randomCreator]

}


