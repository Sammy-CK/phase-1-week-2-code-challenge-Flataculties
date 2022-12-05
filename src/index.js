/**
 * fetchAnimals: Gets the animals from server
 * Output: Displays the animalName, animalImage, animalDetails and sum of votes
 */
   function fetchAnimals(){

    //assign ul where list will be appended
    const ul = document.getElementById('cuties');

//assign div container for animal details
    const imageAndVotes = document.getElementById('displayed');

//
    let voteTotal = document.getElementById('animalVotes');


    //fetch request to db.json server
    fetch('http://localhost:3000/characters')
    .then((response) => response.json())
    .then((data) => {
        data.forEach(animalData => {


//create and assign new list for animal names
        let animal = document.createElement('li');



// Appends animal name to the list of animals
    function addName() {
        animal.innerText =  animalData.name;
        ul.append(animal);
}

addName();

showAnimals();
//Adds Eventlistener on an animal’s name to see its details i.e image and number of votes
function showAnimals(){
    animal.addEventListener('click', () => {


       let animalImage = document.getElementById('animalImage');
       animalImage.src = animalData.image
   voteTotal.innerHTML = `<b>TOTAL VOTES FOR ${animalData.name}:</b> ${animalData.votes}`;


//sums new votes added
   addNewVotes();

    })
    

//sums the new votes added
function addNewVotes(){

    let addSubmit = document.getElementById('submitVotes');
    
    let sumVotes = +animalData.votes

    addSubmit.addEventListener('click', () => {
        let voteAdd = document.getElementById('addedVotes');
        sumVotes = sumVotes + +voteAdd.value
        voteTotal.innerHTML = `<b>TOTAL VOTES FOR ${animalData.name}:</b> ${sumVotes}`;
    })
}
            
        }

       
        });

    })

    }


//Ensure page is loaded and call main function: fetchAnimals
document.addEventListener('DOMContentLoaded',() => {
        fetchAnimals();
})