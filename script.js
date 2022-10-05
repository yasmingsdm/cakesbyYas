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

const price = kg*200

const hour = (kg)=>{
    if (kg <=3){
        hour = 2
    } else{
        hour = 4
    }
}


function order(){
    let Text = ('Great ' + nome + 'your cake will be ready in ' + hour + 'and it will cost '+price +'SEK.')
    Text.innerHTML }