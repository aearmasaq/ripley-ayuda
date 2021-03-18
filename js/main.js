const inputs = document.querySelectorAll(".input");

function addc1(){
    let parent = this.parentNode.parentNode;
    parent.classList.add("focus");
}

function remc1(){
    let parent = this.parentNode.parentNode;
    if (this.value == ""){
        parent.classList.remove("focus");
    }
}

inputs.forEach(input => {
    input.addEventListener("focus", addc1);
    input.addEventListener("blur", remc1);
})
//login a la pagina web

let usuarios = [
    {
        "id": 1,
        "nombre": "Milagros Arias",
        "dni": "72451939",
        "password": "72451939MA"
    },
    {
        "id": 2,
        "nombre": "Esthefany Berrospi",
        "dni": "76027515",
        "password": "76027515EB"
    },
    {
        "id": 3,
        "nombre": "Edimir Armas",
        "dni": "73475431",
        "password": "73475431EA"
    }
]


function getInfo(){
    let dni = document.getElementById("username").value;
    let password = document.getElementById("password").value;   
    
    let  MnsjeError= document.getElementById("alerta");

    if(dni.length < 8 ) {
        MnsjeError.innerHTML += `
        <div class="alert">
        <span  class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
        Por favor! Ingrese un DNI valido.
        </div>
        `;  
                     
    }else if (password.length == 0) {
        MnsjeError.innerHTML += `
        <div class="alert">
        <span  class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
        Por favor! Ingrese su Password.
        </div>
        `;  
    } else {

    for (i = 0; i < usuarios.length; i++){
        if(dni == usuarios[i].dni && password == usuarios[i].password){
            MnsjeError.innerHTML += `
            <div class="alertCorect">
            <span  class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
            Bienvenido!  ${usuarios[i].nombre}.
            </div>
            `;      
            window.location.href="ripley.html";        
            return ;
            
        }
    }
    MnsjeError.innerHTML += `
    <div class="alert">
    <span  class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
    usuario o password incorrecto!!!
    </div>
    `;      
    }
} 