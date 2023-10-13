
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
            <p>Division: ${e.divison}</p>
            <p>Abreviation: ${e.abbreviation}</p>
            `
            
            
            document.querySelector('.card-holders').appendChild(cards)
        }
        else if(input == null){
            cards.setAttribute("id", "cards")
            cards.innerHTML = `
            <h1>Team Name: ${e.full_name}</h1>
            <p>City: ${e.city}</p>
            <p>Division: ${e.divison}</p>
            <p>Abreviation: ${e.abbreviation}</p>
            `
            
            
            document.querySelector('.card-holders').appendChild(cards)
        }  
    })}
    )
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