const user = {
    "name": "Santiago",
    "lastname": "Arrieta",
    "age": 19,
    "nickname": "Savenar",
    "hobbies": ["read", "sing", "eat"],
    "address":{
        "street": "Alameda del Rio",
        "city": "Barranquilla",
    },
    "married": true
}

const friends = [
    {name: "Marcela", nickname: "Marce1010"},
    {name: "Juan", nickname: "Juan123"},
    {name: "Danna", nickname: "Dannita"},
    {name: "Samuel", nickname: "Samuelin"},
    {name: "Monica", nickname: "Mony"},
]

user.friends = friends

let output = ` `

for (let i = 0; i < friends.length; i++) {
 output = output + `<li>${friends[i].name} - ${friends[i].nickname}</li>`
}

fetch(`/user.json`)
    .then(response => response.json())
    .then(data =>{
        console.log(data)
        document.getElementById(`people`).innerHTML = `<h1> ${data.name} ${data.lastname} </h1>`
    })



let postsElements = ``

fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then(response => {
        return response.json()
    })
    .then(data =>{

        for (let i = 0; i < data.length; i++) {
            postsElements += `<li>${data[i].userId} - ${data[i].title}</li>`
        }
        document.getElementById(`posts`).innerHTML = postsElements

    })
