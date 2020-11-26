
let container = document.getElementById('container')

let colors = []
let selectedBox = []
let wonCards = []

makeSquares()
generateColor()


function makeSquares () {
    for (let x=0; x<56; x++) {
        let randomColor = Math.floor(Math.random() * colors.length)
        container.innerHTML += `<div id="${colors[randomColor]}" onclick="boxClicked(event,${x})"></div>`
        colors = colors.filter((item, index) => index !== randomColor)
    }
}
function boxClicked(event,x) {
    console.log(event,x)
    selectedBox.push({id: x, color: colors[x]})
    console.log(selectedBox)
    if(selectedBox.length > 1){
        if(selectedBox[0].color === selectedBox[1].color){
            console.log('YAY')
        }else {
            selectedBox = []
        }
    }


}

function generateColor() {

    for (let i = 0; i < 14; i++) {
        let randomColor = "#"+((1<<24)*Math.random()|0).toString(16)
        colors.push(randomColor)
    }
    colors = [...colors,...colors,...colors,...colors]
    // console.log(colors)
}


