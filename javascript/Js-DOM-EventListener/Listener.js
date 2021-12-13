// button
let btn = document.getElementsByTagName('button')[0];

btn.addEventListener("click", Clicked);//add event listener

function Clicked(){ 
    //elemen baru P
    let newInput = document.createElement("div")

    //memasukan inputan text
    let data1 = newInput.innerHTML = document.getElementById('nama').value
    let data2 = newInput.innerHTML = document.getElementById('gender').value
    let data3 = newInput.innerHTML = document.getElementById('age').value

    let Data = data1 + data2 + data3
    let biodata = document.body.append(Data)
    console.log(biodata)
}