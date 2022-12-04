document.addEventListener('DOMContentLoaded',() => {

    //assign ul where list will be appended
    const ul = document.getElementById('cuties');

    //assign div container for animal details
    const imageAndVotes = document.getElementById('displayed');

//fetch request to db.json server
    fetch('http://localhost:3000/characters')
    .then((response) => response.json())
    .then((data) => {
        data.forEach(animalData => {

//create and assign new list for animal names
        let animal = document.createElement('li');

        animal.innerText =  animalData.name;
        ul.append(animal);

//Click Eventlistener on an animal’s name to see its details i.e image and number of votes
    animal.addEventListener('click', () => {

        let voteTotal = document.getElementById('animalVotes');
       let animalImage = document.getElementById('animalImage');
       animalImage.src = animalData.image

// assign initial number of votes
   voteTotal.innerHTML = `<b>TOTAL VOTES FOR ${animalData.name}:</b> ${animalData.votes}`;


    let voteAdd = document.getElementById('addedVotes');

    let addSubmit = document.getElementById('submitVotes');

// assign new summed value of votes
    let sumVotes = +animalData.votes

    addSubmit.addEventListener('click', () => {
        sumVotes = sumVotes + +voteAdd.value
        voteTotal.innerHTML = `<b>TOTAL VOTES FOR ${animalData.name}:</b> ${sumVotes}`;
    })
    
            })
       
        });

    })
})