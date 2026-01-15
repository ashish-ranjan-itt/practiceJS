// element selection

const titleFirstWord = document.getElementsByClassName("title-firstname")
const titleLastWord = document.querySelector(".title-lastname")
const background = document.getElementsByTagName("div")
const newHeading = document.createElement("h1")
const mainContainer = document.querySelector("div")
const buttonElement = document.querySelector("button")
const input = document.querySelector("input")
const pTag = document.querySelector("p")


// event listener

buttonElement.addEventListener("click", (e) => {
    console.log("look here",e.target)
    const buttonClickText = document.createElement("p")
    buttonClickText.textContent = "Button Clicked Buddy!"
    mainContainer.appendChild(buttonClickText)
    background[0].style.backgroundColor="green"
})


// element removal

titleLastWord.remove()

console.log(titleFirstWord)
// console.log("hello:",titleLastWord.innerHTML)

// new element adding

mainContainer.appendChild(newHeading)
newHeading.textContent = "Ashish"   
newHeading.style.color = "yellow"

// modifying existing element

titleLastWord.textContent = 'noko noko'
titleFirstWord[0].innerHTML = "Balle Balle"
background[0].style.backgroundColor="skyblue"

// creating my own event

input.addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase()
    if(value === "ashish") {
        fireWriteAshishEvent();
    }
    localStorage.setItem("name",value)
})

console.log(localStorage.getItem("name"))

const fireWriteAshishEvent = () => {
    const writeAshish = new CustomEvent("writeAshish", {
        detail: {
            name:"ashu",
            time:Date.now(),
        }
    })
    document.dispatchEvent(writeAshish)
}

document.addEventListener("writeAshish",(e) => {
    pTag.textContent =  `Hello ${e.detail.name}!`;
    pTag.style.color = "red"
})

//event capturing

mainContainer.addEventListener("click",() => {
    console.log("Div clicked")
},true)

// buttonElement.addEventListener("click", () => {
//     console.log("Button Clickeds")
// })

//event object`

