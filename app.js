const qrinput = document.getElementById("Qr-input");
const qrbutton = document.getElementById("qr-button")
const qrimg = document.getElementById("img-qr")

console.log(qrbutton ,qrimg,qrinput)

qrbutton.addEventListener('click' , () =>{
    const inputValue = qrinput.value 
    console.log(inputValue)

    if(inputValue === ""){
        alert('input value is null')
    }else{
        qrimg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data= ${inputValue}`
        qrimg.alt =`Qr code for ${inputValue}`
    }
})