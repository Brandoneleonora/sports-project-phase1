console.log("Hello World")

let apiUrl = "https://www.balldontlie.io/api/v1/teams"

response = fetch(apiUrl)
    .then(res => res.json())
    .then(data => console.log(data))

    