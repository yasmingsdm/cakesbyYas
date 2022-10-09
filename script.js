
function order(){

// Get the infos from HTML:
const kg = document.getElementById('kg').value
const nome = document.getElementById('name').value

const type = ()=>{if (document.getElementById('chocolate').checked ==true){
     type = 'chocolate'
} else if (document.getElementById('redvelvet').checked == true){
    type = 'redvelvet'
} else if (document.getElementById('strawberry').checked ==true){
    type = 'strawberry'
} else if (document.getElementById('carrot').checked ==true){
    type = 'carrot'
} else {alert('You must choose a cake')}}

// Calculate price and time to be ready:
const price = kg*200

const hour = (kg)=>{
    if (kg <=3){
        hour = 2
    } else{
        hour = 4
    }
}
    //Print on the screen:
    localStorage.style.display = 'block'

    let Text = ('Great ' + nome + 'your cake will be ready in ' + hour + 'and it will cost '+price +'SEK.')
    document.write ('<h3>' + Text + '</h3>')
}

// Change images:

const CakePic = (type) => {
    if(type === 'chocolate') {
        document.getElementById(CakePic).src = "./chocolate.jpg"
    } else if (type === 'redvelvet') {
        document.getElementById(CakePic).src = "./red velvet.jpg"
    } else if (type === 'strawberry'){
        document.getElementById(CakePic).src = "./strawberry.jpg"
    } else { document.getElementById(CakePic).src = "./carrot.jpg"}
}