document.addEventListener('DOMContentLoaded',() => {
    const ul = document.getElementById('cuties');
    const imageAndVotes = document.getElementById('displayed');


    fetch('http://localhost:3000/characters')
    .then((response) => response.json())
    .then((data) => {
        data.forEach(animalData => {

        let animal = document.createElement('li');

        animal.innerText =  animalData.name;
        ul.append(animal);


    animal.addEventListener('click', () => {
       let voteTotal = document.getElementById('animalVotes');
        voteTotal.innerHTML = `<b>TOTAL VOTES:</b> ${animalData.votes}`;

        animalImage.src = animalData.image

            imageAndVotes.append(animalImage);
            imageAndVotes.append(voteTotal);


    let votaAdd = document.getElementById('addedVotes')

    let addSubmit = document.getElementById('submitVotes');

    addSubmit.addEventListener('click', () => {
        animalData.votes = +animalData.votes + +votaAdd.value;
        voteTotal.innerHTML = `<b>TOTAL VOTES:</b> ${animalData.votes}`;

                })
    
            })
       
        });

    })
})