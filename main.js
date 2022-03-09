let cells=document.querySelectorAll(".cell")
cells=Array.from(cells)

let winText=document.getElementById("winText")
winText.addEventListener("click",()=>{
    location.reload()
    
})

let currentPlayer="X"

let winCombo=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]
 let clickCount=0
const checkForWinner=()=>{
    winCombo.forEach((combo)=>{
        let check =combo.every(index=>cells[index].innerText.trim()==currentPlayer)
        if(check){
            highlightCells(combo)
        }
    })
}

const highlightCells=(combo)=>{
    combo.forEach(index=>{
        cells[index].classList.add("highlight")
    })
    winText.innerText=`${currentPlayer} Wins!!! Click here to restart`
}
cells.forEach((cell)=>{
    cell.addEventListener('click',()=>{
        clickCount++
        checkClickCount()
        if(cell.innerText.trim()!="")return
        cell.innerText=currentPlayer
        checkForWinner()
        currentPlayer=currentPlayer=="X"?"O":"X"
    })
})


const checkClickCount=()=>{
    if(clickCount===9){
        winText.innerText=`Draw!!! Click here to restart`
    }
}