
let marcas = [
    {
        "id": 1,
        "img": "img/ltcl.png",
        "nombre": "TCL",
        "telefono": "(01)611 5959",
        "celular": "910 389 663",
        "correo": "no tiene",
        "atencion": "Lunes-viernes 9:00AM to 18:00PM.",
        "link": "https://www.tcl.com/es/es/service.html"

    },
  
    {
        "id": 2,
        "img": "img/samsung.png",
        "nombre": "SAMSUNG",
        "telefono": "0-800-77708",
        "celular": "no tiene",
        "correo": "no tiene",
        "atencion": "Lunes a Domingo : De 8am a 11pm, los 7 días de la semana.",
        "link": "https://www.samsung.com/pe/info/contactus/"

    },
    {
        "id": 3,
        "img": "img/lg.jpg",
        "nombre": "LG",
        "telefono": "0-800-1-2424 - (01) 418-0900",
        "celular": "no tiene",
        "correo": "no tiene",
        "atencion": "Lunes a Viernes 8:00 am a 8:00 pm",
        "link": "https://www.lg.com/pe/soporte/telefono"

    },
    {
        "id": 4,
        "img": "img/mabe.png",
        "nombre": "MABE",
        "telefono": "0-800-7-8188 - (01)706 2952",
        "celular": "no tiene",
        "correo": "no tiene",
        "atencion": "no detalla",
        "link": "https://www.mabe.com.pe/servicio-tecnico"

    },
    {
        "id": 5,
        "img": "img/lenovo.jpg",
        "nombre": "LENOVO",
        "telefono": "0-800-55-981 / (1)642 9172",
        "celular": "No tiene",
        "correo": "soportegaran@lenovo.com ",
        "atencion": "No detalla",
        "link": "https://www.lenovo.com/pe/es/contacto"

    },
    {
        "id": 6,
        "img": "img/dell.png",
        "nombre": "DELL",
        "telefono": "0-800-50-869",
        "celular": "No tiene",
        "correo": "No tiene",
        "atencion": "Lunes a viernes, 6 am - 8 pm",
        "link": "https://www.dell.com/support/incidents-online/es-pe/contactus/Dynamic?spestate"

    },
    {
        "id": 7,
        "img": "img/xiaomi.png",
        "nombre": "XIAOMI",
        "telefono": "(01) 471-8465",
        "celular": "989102489",
        "correo": "No tiene",
        "atencion": "Lunes a Viernes: de 09:30 am a 6:00 pm",
        "link": "https://xiaomiperu.pe/"
    },
    {
        "id": 8,
        "img": "img/huawei.svg",
        "nombre": "HUAWEI",
        "telefono": "0-800-00-085",
        "celular": "No tiene",
        "correo": "No tiene",
        "atencion": "Te atendemos las 24 horas del días",
        "link": "https://consumer.huawei.com/pe/contact-us/"
    },
      {
        "id": 9,
        "img": "img/asus.jpg",
        "nombre": "ASUS",
        "telefono": "0-800-007-93",
        "celular": "No tiene",
        "correo": "No tiene",
        "atencion": "Lunes~Viernes, 08:00-19:00 / Sábado, 08:00-13:00",
        "link": "https://www.asus.com/latin/support/CallUs"
    },
    {
        "id": 10,
        "img": "img/acer.svg",
        "nombre": "ACER",
        "telefono": "0-800-78-223",
        "celular": "No tiene",
        "correo": "No tiene",
        "atencion": "De L a V de 10:00am a 1:00pm y de 2:00pm a 4:00pm.",
        "link": "https://www.acer.com/ac/es/AR/content/repair-centers"
    },
    {
        "id": 11,
        "img": "img/electrolux.png",
        "nombre": "ELECTROLUZ",
        "telefono": "0-800-21-550",
        "celular": "No tiene",
        "correo": "peru.callcenter@electrolux.com",
        "atencion": "No detalla",
        "link": "https://www.electrolux.com.pe/contactanos"
    },
    {
        "id": 12,
        "img": "img/thomas.jpg",
        "nombre": "THOMAS",
        "telefono": "(01)463 1423 - (01)463 0862",
        "celular": "No tiene",
        "correo": "electronicamilla@yahoo.es",
        "atencion": "L -V 9 :00 a.m - 1 : 00 p.m y 2:00 p.m - 7:00 p.m - Sábado de 9:00 a.m - 1: 00 p.m",
        "link": "https://www.thomas.com.pe/pages/servicio-tecnico"
    },
    {
        "id": 13,
        "img": "img/klimatic.png",
        "nombre": "KLIMATIC",
        "telefono": "(01)319 2005 / (01)319 2008 / (01)319 2017 ",
        "celular": "No tiene",
        "correo": "serviciotecnico@klimatic.com.pe ",
        "atencion": "No detalla",
        "link": "https://klimatic.com.pe/servicio-tecnico/"
    },
    {
        "id": 14,
        "img": "img/rotoplas.jpg",
        "nombre": "ROTOPLAST",
        "telefono": "(01)614-2400",
        "celular": "998 129 198",
        "correo": "No tiene",
        "atencion": "No detalla",
        "link": "https://www.rotoplas.com.pe/contacto"
    },
    {
        "id": 15,
        "img": "img/monark.png",
        "nombre": "MONARK",
        "telefono": "(01)613-6969 ",
        "celular": "933060634 / 976086651 ",
        "correo": "No tiene",
        "atencion": "Lunes a viernes de 8:00 am a 6:00 pm, sábados de 8:00 am a 12 :00 pm",
        "link": "https://www.monark.com.pe/servicio-tecnico/"
    },
]

let noticias = [
    {
        "id": 1,
        "img": "img/actualizado/foto1.jpg",
        "nombre": "ESTADOS DE PASARELA",      
    },
    //SE CORRIGE ERROR DE IMG
    {
        "id": 2,
        "img": "img/actualizado/foto2.JPG",
        "nombre": "CONSULTA DE RESERVA - CONSULTAS ESPECIALES",      
    },
    {
        "id": 3,
        "img": "img/actualizado/foto3.jpg",
        "nombre": "NUEVO PROCEDIMIENTO DE ENTREGA - RETIRO EN TAMBO",      
    },
    {
        "id": 4,
        "img": "img/actualizado/foto4.jpg",
        "nombre": "CANJE DE RIPLEY PUNTOS",      
    },
    {
        "id": 5,
        "img": "img/actualizado/foto5.jpg",
        "nombre": "DESCARGA Y ENVIOS DE BOLETAS",      
    },
    {
        "id": 6,
        "img": "img/actualizado/foto6.jpg",
        "nombre": "RECLAMO DE RETIRO DE PIOCHAS",      
    },
    {
        "id": 7,
        "img": "img/actualizado/foto7.jpg",
        "nombre": "ESTADOS MKP",      
    },
    {
        "id": 8,
        "img": "img/actualizado/foto8.jpg",
        "nombre": "PLAZO DE ENTREGA RETIRO EN TIENDA Y  EN TAMBO",      
    },
    {
        "id": 9,
        "img": "img/actualizado/foto9.jpg",
        "nombre": "PREVENCIÓN DE FRAUDES",      
    },
    {
        "id": 10,
        "img": "img/actualizado/foto10.jpeg",
        "nombre": "CODIGOS DE TIENDA",      
    },
     {
        "id": 11,
        "img": "img/actualizado/foto11.jpg",
        "nombre": "ESTADO BIGTICKET TER FASE 1",      
    },
    {
        "id": 12,
        "img": "img/actualizado/foto12.jpg",
        "nombre": "ESTADO BIGTICKET RET FASE 2",      
    },
    {
        "id": 13,
        "img": "img/actualizado/foto13.jpg",
        "nombre": "ESTADO BIGTICKET CD",      
    },
]

function cargarMarcas(){
    let  lista = document.getElementById("lista-marcas");
    for (i = 0; i < marcas.length; i++){
        lista.innerHTML +=`
        <div class="card">
          <div class="bg-img">
            <img src="${marcas[i].img}" alt="">
          </div>
          <div class="content">
            <h4>Marca: ${marcas[i].nombre}</h4>
            <div class="datos-marcas">
            <p><strong>TELEFONO: </strong>${marcas[i].telefono}</p>
            <P><strong>CELULAR: </strong>${marcas[i].celular}</P>
            <p><strong>ATENCIÓN: </strong>${marcas[i].atencion}</p>
            <P><strong>CORREO: </strong>${marcas[i].correo}</P>
            </div>
            <button onclick="window.open('${marcas[i].link}')"> Ir a pagina</button>           
          </div>
        </div>`;
    }
}

cargarMarcas();


function cargarNoticias(){
    let  nuevo = document.getElementById("lista-nuevo");
    for (i = 0; i < noticias.length; i++){
        nuevo.innerHTML +=`
        <div class="card">
          <div class="img-nt">
            <img src="${noticias[i].img}" alt="${noticias[i].nombre}">
          </div>
          <div class="content">
            <h5>${noticias[i].nombre}</h5>
          </div>
        </div>
      `;
    }
}

cargarNoticias()

// Obtener la modal(
var modal = document.getElementById('myModal');

// Obtiene el elemento <span> que cierra el modal
var span = document.getElementsByClassName("close")[0];

// Cuando el usuario haga clic en <span> (x), cierre el modal
span.onclick = function() { 
    modal.style.display = "none";
}

// Obtenga todas las imágenes e inserte la imagen en la que se hizo clic dentro del modal
// Obtenga el contenido de la descripción de la imagen e insértelo dentro del título de la imagen modal
var images = document.getElementsByTagName('img');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var i;
for (i = 0; i < images.length; i++) {
   images[i].onclick = function(){
       modal.style.display = "block";
       modalImg.src = this.src;
       modalImg.alt = this.alt;
       captionText.innerHTML = this.nextElementSibling.innerHTML;
   }
}

//FUNCION TABS
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  /*ARMADO */
  let armados = [
         
    {
      "id": 1,
      "img": "img/armado/armado1.jpg",
      "titulo": " ARMADOS",   
      "descripcion": "¿Si adquiriste algún producto a través de Ripley.com y deseas conocer más sobre nuestro proceso de armados e instalaciones, ten en cuenta lo siguiente:", 
      "link": "https://simple.ripley.com.pe/minisitios/especial/servicio-al-cliente/armados-instalacion",   
  },
  {
    "id": 2,
    "img": "img/armado/armado2.png",
    "titulo": "MONARK",   
    "descripcion": "Todo requerimiento de servicio técnico, debe ser canalizado para su coordinación con el SAC de Monark, mediante correo electrónico al siguiente link:",   
    "link": "https://home.ripley.com.pe/wcsstore/ripleype_CAT_AS/Attachment/WOP/imagenes_Fichas/PDF/Politica_Armado_Monark.pdf",    
 },
 {
    "id": 3,
    "img": "img/armado/armado3.jpg",
    "titulo": "ARMADO DE BICICLETA",   
    "descripcion": "Todo requerimiento de servicio técnico, debe ser canalizado para su coordinación con las marcas de las bicicletas",   
    "link": "NO TIENE",    
 },
 {
    "id": 4,
    "img": "img/armado/armado4.png",
    "titulo": "SOLE",   
    "descripcion": "Todo requerimiento de servicio técnico, debe ser canalizado para su coordinación con el SAC de Sole",   
    "link": "https://home.ripley.com.pe/Attachment/WOP/imagenes_Fichas/PDF/SOLE-Instalacion01.pdf",    
 },
   
]

function cargarArmados(){
    let  tabsList = document.getElementById("tabs-list");
    let  tabsContent = document.getElementById("tabs-content");
    for (i = 0; i < armados.length; i++){
        tabsList.innerHTML +=`       
        <button class="tablinks" onclick="openCity(event, '${armados[i].id}')">${armados[i].titulo}</button>       
         `;
         tabsContent.innerHTML +=`       
         <div id="${armados[i].id}" class="tabcontent">
          <h5>${armados[i].descripcion}</h5>
          <br>          
          <p>Ver condiciones de armado aqui: <a href="${armados[i].link}" target="_blank">VER CONDICIONES</a></p>
          <br>
          <img src="${armados[i].img}" alt="">          
        </div>      
          `;


    }
}

cargarArmados();