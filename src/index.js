const animalNamesMenu = document.getElementById('animalNamesMenu')
const animalDetails = document.getElementById('animalDetails')
const newVotes = document.getElementById('newVotes');
const newVotesDiv = document.getElementById('newVotesDiv')
const deleteBtn = document.getElementById('reset')
const animalVotes = document.getElementById('animalVotes')
const animalImage = document.getElementById('animalImg')

document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:3000/characters')
        .then(resp => resp.json())
        .then(data => {
            data.forEach(animal => {
                showAnimalData(animal)
            })
        })
})

//shows animal names in a list and animal details on clicking name
function showAnimalData(animal) {
    const li = document.createElement('li')
    animalToMenu(li, animal, animalNamesMenu)
    let voteTotal = animal.votes

    //shows animal details on clicking name
    li.addEventListener('click', () => {

        animalImage.src = animal.image
        animalDetails.appendChild(animalImage)

        animalVotes.innerText = `TOTAL VOTES = ${voteTotal}`
        animalDetails.appendChild(animalVotes)

        //Form to submit new votes for adding
        const form = document.createElement('form')
        const inputVotes = document.createElement('input')
        const submitVotes = document.createElement('input')
        inputVotes.type = "number"
        inputVotes.placeholder = 'Enter Votes'
        submitVotes.type = "submit"
        newVotesDiv.innerHTML = ''
        form.style.margin = '10px'

        form.appendChild(inputVotes)
        form.appendChild(submitVotes)
        newVotesDiv.appendChild(form)

        //update votes on DOM without persistence 
        form.addEventListener('submit', (e) => {
            e.preventDefault()
            if (inputVotes.value > 0) {
                voteTotal = parseInt(voteTotal, 10) + parseInt(inputVotes.value)
                animalVotes.innerText = `TOTAL VOTES = ${voteTotal}`
            } else {

            };
            form.reset()
        })

    })

}

//Adds animal name to li content and appends to DOM
function animalToMenu(toAdd, animal, AddedTo){
    toAdd.innerText = animal.name
    AddedTo.append(toAdd)
}