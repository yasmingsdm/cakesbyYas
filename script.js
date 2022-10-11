const form = document.getElementById('form')
form.onsubmit = order

function order(){
    event.preventDefault();
// Get the infos from HTML:
const kg = document.getElementById('kg').value
const nome = document.getElementById('name').value

let type = " "

if (document.getElementById('chocolate').checked ==true){
    type = 'chocolate'
} else if (document.getElementById('redvelvet').checked == true){
    type = 'redvelvet'
} else if (document.getElementById('strawberry').checked ==true){
    type = 'strawberry'
} else if (document.getElementById('carrot').checked ==true){
    type = 'carrot'
} else {alert('You must choose a cake')}

// Calculate price and time to be ready:
const price = kg*200

let hour = 0
    if (kg <=3){
        hour = 2
    } else{
        hour = 4
    }

    // Change images:

let CakePicture = document.getElementById('CakePic')

    
if(type === 'chocolate') {
    CakePicture.src = "./chocolate.jpg"
} else if (type === 'redvelvet') {
    CakePicture.src = "./red velvet.jpg"
} else if (type === 'strawberry'){
    CakePicture.src = "./strawberry.jpg"
} else { CakePicture.src = "./carrot.jpg"}

    //Print on the screen:

    let Text = ('Great ' + nome + ' your cake will be ready in ' + hour + ' and it will cost '+price +' SEK.')
    document.getElementById('h3').innerHTML = Text 
}


    
