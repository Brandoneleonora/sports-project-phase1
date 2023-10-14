const empyt_heart = "♡"
const full_heart = "❤️"

let apiUrl = "https://www.balldontlie.io/api/v1/teams"

function display(input){
    fetch(apiUrl)
    .then(res => res.json())
    .then(data => {
        let parent = document.getElementById('allCards')
        parent.innerHTML = ''

        data.data.forEach(e => {  
        let cards = document.createElement('div')
        
        if (input == e.full_name){
            cards.setAttribute("id", "cards")
            cards.innerHTML = `
            <h1>Team Name: ${e.full_name}</h1>
            <p>City: ${e.city}</p>
            <p>Division: ${e.division}</p>
            <p>Abreviation: ${e.abbreviation}</p>
            <button id='heart'>♡</button>
            `
            
            
            document.querySelector('.card-holders').appendChild(cards)
        }
        else if(input == null){
            cards.setAttribute("id", "cards")
            cards.innerHTML = `
            <h1>Team Name: ${e.full_name}</h1>
            <p>City: ${e.city}</p>
            <p>Division: ${e.division}</p>
            <p>Abreviation: ${e.abbreviation}</p>
            <button class='heart'>♡</button>
            `
            
            
            document.querySelector('.card-holders').appendChild(cards)
        }  
    })
    heartButton()
}
    )
    }

function heartButton(){
    const hrtButton = document.getElementsByClassName('heart')
    const buttonArray = [...hrtButton]

    buttonArray.forEach(e => {
        e.addEventListener('click', () => {
            if (e.innerHTML == empyt_heart){
                e.innerHTML = full_heart
            }else {
                e.innerHTML = empyt_heart
            }
        })
    })


}



const searchForm = document.getElementById("search-form")

searchForm.addEventListener("submit", (e) => {
    e.preventDefault()

    input = document.getElementById("input")
    display(input.value)
})

const showAll = document.getElementById("showAll")

showAll.addEventListener('click', () => display())

document.addEventListener('DOMContentLoaded', display())
