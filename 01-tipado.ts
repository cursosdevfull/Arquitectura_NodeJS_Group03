let username: string = "Pedro Córdova"

username = "Javier"
username = "Luisa"

let patientAge: number
let isLogged: boolean
let listNames: Array<string> = ["María", "Martha"]
let listStudentsNames: {name: string, age: number, addresses: string[]}[] = [
    {name: "Claudia", age: 24, addresses: []},
    {name: "Gerardo", age: 38, addresses: ["Calle Los Cedros 134. San Isidro"]}
]

let dataToProcess: Array<Array<string>> = [
    ["Pedro", "Jimena"],
    ["Carla", "Sofía", "Carmen"]
]

let dataUsersToExport: Array<Array<{name: string, age: number}>> = [
    [
        {name: "Alfonso", age: 23},
        {name: "Luisa", age: 15}
    ],
    [
        {name: "Carmela", age: 32}
    ]
]

function infoUser() {
    let age = 38
    console.log("age", age)
    return age>18 ? "Mayor de edad" : "Menor de edad"
}

console.log(infoUser())
//console.log(age)