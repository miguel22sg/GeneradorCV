const inputNombre = document.getElementById("Nombre");
const inputApellido = document.getElementById("Apellido");
const inputTelefono = document.getElementById("Telefono");
const inputDireccion = document.getElementById("Direccion");
const inputCorreo = document.getElementById("Correo");
const inputPaginaWeb = document.getElementById("PaginaWeb");
const inputIdiomas = document.getElementById("Idiomas");
const inputResumen = document.getElementById("Resumen");
const inputEmpleos = document.getElementById("Empleos");
const inputEducacion = document.getElementById("Educacion");
const inputHabilidades = document.getElementById("Habilidades");
const inputCertificaciones = document.getElementById("Certificaciones");



function Clear() {
  inputNombre.value = "";
  inputNombre.classList.remove("input-error");
  inputNombre.classList.remove("input-sucess");
  inputNombre.focus();

  inputApellido.value = "";
  inputApellido.classList.remove("input-error");
  inputApellido.classList.remove("input-sucess");

  inputTelefono.value = "";
  inputTelefono.classList.remove("input-error");
  inputTelefono.classList.remove("input-sucess");

  inputDireccion.value = "";
  inputDireccion.classList.remove("input-error");
  inputDireccion.classList.remove("input-sucess");

  inputCorreo.value = "";
  inputCorreo.classList.remove("input-error");
  inputCorreo.classList.remove("input-sucess");

  inputPaginaWeb.value = "";
  inputPaginaWeb.classList.remove("input-error");
  inputPaginaWeb.classList.remove("input-sucess");

  inputIdiomas.value = "";
  inputIdiomas.classList.remove("input-error");
  inputIdiomas.classList.remove("input-sucess");

  inputResumen.value = "";
  inputResumen.classList.remove("input-error");
  inputResumen.classList.remove("input-sucess");

  inputEmpleos.value = "";
  inputEmpleos.classList.remove("input-error");
  inputEmpleos.classList.remove("input-sucess");

  inputEducacion.value = "";
  inputEducacion.classList.remove("input-error");
  inputEducacion.classList.remove("input-sucess");

  inputHabilidades.value = "";
  inputHabilidades.classList.remove("input-error");
  inputHabilidades.classList.remove("input-sucess");

  inputCertificaciones.value = "";
  inputCertificaciones.classList.remove("input-error");
  inputCertificaciones.classList.remove("input-sucess");
}

function Validate() {
  let isValid = true;

  const valueNombre = inputNombre.value;

  const valueApellido = inputApellido.value;

  const valueTelefono = inputTelefono.value;

  const valueDireccion = inputDireccion.value;

  const valueCorreo = inputCorreo.value;

  const valuePaginaWeb = inputPaginaWeb.value;

  const valueIdiomas = inputIdiomas.value;

  const valueResumen = inputResumen.value;

  const valueEmpleos = inputEmpleos.value;

  const valueEducacion = inputEducacion.value;

  const valueHabilidades = inputHabilidades.value;

  const valueCertificaciones = inputCertificaciones.value;
  

  if (valueNombre == "" || valueNombre == null || valueNombre == undefined) {
    isValid = false;
    inputNombre.classList.add("input-error");
    inputNombre.classList.remove("input-sucess");
  } else {
    inputNombre.classList.add("input-sucess");
    inputNombre.classList.remove("input-error");
  }

  if (
    valueApellido == "" ||
    valueApellido == null ||
    valueApellido == undefined
  ) {
    isValid = false;
    inputApellido.classList.add("input-error");
    inputApellido.classList.remove("input-sucess");
  } else {
    inputApellido.classList.add("input-sucess");
    inputApellido.classList.remove("input-error");
  }

  if (
    valueTelefono == "" ||
    valueTelefono == null ||
    valueTelefono == undefined
  ) {
    isValid = false;
    inputTelefono.classList.add("input-error");
    inputTelefono.classList.remove("input-sucess");
  } else {
    inputTelefono.classList.add("input-sucess");
    inputTelefono.classList.remove("input-error");
  }

  if (
    valueDireccion == "" ||
    valueDireccion == null ||
    valueDireccion == undefined
  ) {
    isValid = false;
    inputDireccion.classList.add("input-error");
    inputDireccion.classList.remove("input-sucess");
  } else {
    inputDireccion.classList.add("input-sucess");
    inputDireccion.classList.remove("input-error");
  }

  if (valueCorreo == "" || valueCorreo == null || valueCorreo == undefined) {
    isValid = false;
    inputCorreo.classList.add("input-error");
    inputCorreo.classList.remove("input-sucess");
  } else {
    inputCorreo.classList.add("input-sucess");
    inputCorreo.classList.remove("input-error");
  }

  if (
    valuePaginaWeb == "" ||
    valuePaginaWeb == null ||
    valuePaginaWeb == undefined
  ) {
    isValid = false;
    inputPaginaWeb.classList.add("input-error");
    inputPaginaWeb.classList.remove("input-sucess");
  } else {
    inputPaginaWeb.classList.add("input-sucess");
    inputPaginaWeb.classList.remove("input-error");
  }

  if (valueIdiomas == "" || valueIdiomas == null || valueIdiomas == undefined) {
    isValid = false;
    inputIdiomas.classList.add("input-error");
    inputIdiomas.classList.remove("input-sucess");
  } else {
    inputIdiomas.classList.add("input-sucess");
    inputIdiomas.classList.remove("input-error");
  }

  if (valueResumen == "" || valueResumen == null || valueResumen == undefined) {
    isValid = false;
    inputResumen.classList.add("input-error");
    inputResumen.classList.remove("input-sucess");
  } else {
    inputResumen.classList.add("input-sucess");
    inputResumen.classList.remove("input-error");
  }

  if (valueEmpleos == "" || valueEmpleos == null || valueEmpleos == undefined) {
    isValid = false;
    inputEmpleos.classList.add("input-error");
    inputEmpleos.classList.remove("input-sucess");
  } else {
    inputEmpleos.classList.add("input-sucess");
    inputEmpleos.classList.remove("input-error");
  }

  if (
    valueEducacion == "" ||
    valueEducacion == null ||
    valueEducacion == undefined
  ) {
    isValid = false;
    inputEducacion.classList.add("input-error");
    inputEducacion.classList.remove("input-sucess");
  } else {
    inputEducacion.classList.add("input-sucess");
    inputEducacion.classList.remove("input-error");
  }

  if (
    valueHabilidades == "" ||
    valueHabilidades == null ||
    valueHabilidades == undefined
  ) {
    isValid = false;
    inputHabilidades.classList.add("input-error");
    inputHabilidades.classList.remove("input-sucess");
  } else {
    inputHabilidades.classList.add("input-sucess");
    inputHabilidades.classList.remove("input-error");
  }
  if (
    valueCertificaciones == "" ||
    valueCertificaciones == null ||
    valueCertificaciones == undefined
  ) {
    isValid = false;
    inputCertificaciones.classList.add("input-error");
    inputCertificaciones.classList.remove("input-sucess");
  } else {
    inputCertificaciones.classList.add("input-sucess");
    inputCertificaciones.classList.remove("input-error");
  }

  if (isValid) {
      const valueNombre = inputNombre.value;
      const valueApellido = inputApellido.value;
      const valueTelefono = inputTelefono.value;
      const valueDireccion = inputDireccion.value;
      const valueCorreo = inputCorreo.value;
      const valuePaginaWeb = inputPaginaWeb.value;
      const valueIdiomas = inputIdiomas.value;
      const valueResumen = inputResumen.value;
      const valueEmpleos = inputEmpleos.value;
      const valueEducacion = inputEducacion.value;
      const valueHabilidades = inputHabilidades.value;
      const valueCertificaciones = inputCertificaciones.value;
      const AIdiomas = valueIdiomas.split(",");
      const AEmpleos = valueEmpleos.split(",");
      const AEducacion = valueEducacion.split(",");
      const ACertificaciones = valueCertificaciones.split(",");
      const AHabilidades = valueHabilidades.split(",");

      let textIdiomas = "";
      let iIdiomas = 0;
      while(AIdiomas[iIdiomas]){
        textIdiomas += `<br><li>${AIdiomas[iIdiomas]}</li>`;
        iIdiomas++;
      }

      let textEmpleos = "";
      let iEmpleos = 0;
      while(AEmpleos[iEmpleos]){
        textEmpleos += `<br><li>${AEmpleos[iEmpleos]}</li>`;
        iEmpleos++;
      }

      let textEducacion = "";
      let iEducacion = 0;
      while(AEducacion[iEducacion]){
        textEducacion += `<br><li>${AEducacion[iEducacion]}</li>`;
        iEducacion++;
      }

      let textCertificaciones = "";
      let iCertificaciones = 0;
      while(ACertificaciones[iCertificaciones]){
        textCertificaciones += `<br><li>${ACertificaciones[iCertificaciones]}</li>`;
        iCertificaciones++;
      }

      let textHabilidades = "";
      let iHabilidades = 0;
      while(AHabilidades[iHabilidades]){
        textHabilidades += `<br><li>${AHabilidades[iHabilidades]}</li>`;
        iHabilidades++;
      }



            

      const mainContainer = document.getElementById("MainContainer");

      const divAzulito = document.createElement("div");
      divAzulito.setAttribute("id","Azulito");
     
      const divrow = document.createElement("div");
      divrow.setAttribute("class", "row");

      const divcol4 = document.createElement("div");
      divcol4.setAttribute("class", "col-md-4");

     

      const h2Nombre = document.createElement("h2");
      h2Nombre.setAttribute("id","h2Nombre");
      h2Nombre.innerText = `${valueNombre} ${valueApellido}`;

      const h2Contacto = document.createElement("h2");
      h2Contacto.innerText = "Contacto";

      const hrContacto = document.createElement("hr");

      const divDireccion = document.createElement("div");

      const h4Direccion = document.createElement("h4");
      h4Direccion.innerText = "Direccion";

      const Pdireccion = document.createElement("p");
      Pdireccion.innerText = valueDireccion;

      const divTelefono = document.createElement("div");

      const h4Telefono = document.createElement("h4");
      h4Telefono.innerText = "Telefono";

      const PTelefono = document.createElement("p");
      PTelefono.innerText = valueTelefono;

      const divCorreo = document.createElement("div");

      const h4Correo = document.createElement("h4");
      h4Correo.innerText = "Correo";

      const PCorreo = document.createElement("p");
      PCorreo.innerText = valueCorreo;

      const divIdiomas = document.createElement("div");

      const h2Idiomas = document.createElement("h2");
      h2Idiomas.innerText = "Idiomas";

      const hrIdiomas = document.createElement("hr");

      const pIdiomas = document.createElement("p");
      pIdiomas.innerHTML = textIdiomas;

      const divcol8 = document.createElement("div");
      divcol8.setAttribute("class", "col-md-8")

      const h2Resumen = document.createElement("h2");
      h2Resumen.innerText = "Resumen";

      const hrResumen = document.createElement("hr");

      const divResumen = document.createElement("div");

      const PResumen = document.createElement("p");
      PResumen.innerText = valueResumen;

      const h2Habilidades = document.createElement("h2");
      h2Habilidades.innerText = "Habilidades";
       
      const hrHabilidades = document.createElement("hr");

      const divHabilidades = document.createElement("div");

      const pHabilidades = document.createElement("p");
      pHabilidades.innerHTML = textHabilidades;

      const h2Educacion = document.createElement("h2");
      h2Educacion.innerText = "Educacion"

      const hrEducacion = document.createElement("hr");

      const divEducacion = document.createElement("div");
      
      const pEducacion = document.createElement("p");
      pEducacion.innerHTML = textEducacion;

      const h2Empleos = document.createElement("h2");
      h2Empleos.innerText = "Empleos";

      const hrEmpleos = document.createElement("hr");
      
      const divEmpleos = document.createElement("div");

      const pEmpleos = document.createElement("p");
      pEmpleos.innerHTML = textEmpleos;

      const h2Certificaciones = document.createElement("h2");
      h2Certificaciones.innerText = "Certificaciones";

      const hrCertificaciones = document.createElement("hr");

      const divCertificaciones = document.createElement("div");

      const pCertificaciones = document.createElement("p");
      pCertificaciones.innerHTML = textCertificaciones;

      const h2PaginaWeb = document.createElement("h2");
      h2PaginaWeb.innerText = "Pagina Web";

      const hrPaginaWeb = document.createElement("hr");

      const divPaginaWeb = document.createElement("div");

      const pPaginaWeb = document.createElement("p");
      pPaginaWeb.innerText = valuePaginaWeb;

      const divAzulitoFinal = document.createElement("div");
      divAzulitoFinal.setAttribute("id","Azulito-final")
      
      

      
      mainContainer.appendChild(divAzulito);
      mainContainer.appendChild(divrow);
      divrow.appendChild(divcol4);
      divcol4.appendChild(h2Nombre);
      divcol4.appendChild(h2Contacto);
      divcol4.appendChild(hrContacto);
      divcol4.appendChild(divDireccion);
      divDireccion.appendChild(h4Direccion);
      divDireccion.appendChild(Pdireccion);
      divcol4.appendChild(divTelefono);
      divTelefono.appendChild(h4Telefono);
      divTelefono.appendChild(PTelefono);
      divcol4.appendChild(divCorreo);
      divCorreo.appendChild(h4Correo);
      divCorreo.appendChild(PCorreo);
      divcol4.appendChild(divIdiomas);
      divIdiomas.appendChild(h2Idiomas);
      divIdiomas.appendChild(hrIdiomas);
      divIdiomas.appendChild(pIdiomas);      
      divrow.appendChild(divcol8);      
      divcol8.appendChild(h2Resumen);
      divcol8.appendChild(hrResumen);      
      divcol8.appendChild(divResumen);
      divResumen.appendChild(PResumen);
      divcol8.appendChild(h2Habilidades);
      divcol8.appendChild(hrHabilidades);
      divcol8.appendChild(divHabilidades);
      divHabilidades.appendChild(pHabilidades);
      divcol8.appendChild(h2Educacion);
      divcol8.appendChild(hrEducacion);
      divcol8.appendChild(divEducacion);
      divEducacion.appendChild(pEducacion);
      divcol8.appendChild(h2Empleos);
      divcol8.appendChild(hrEmpleos);
      divcol8.appendChild(divEmpleos);
      divEmpleos.appendChild(pEmpleos);
      divcol8.appendChild(h2Certificaciones);
      divcol8.appendChild(hrCertificaciones);
      divcol8.appendChild(divCertificaciones);
      divCertificaciones.appendChild(pCertificaciones);
      divcol8.appendChild(h2PaginaWeb);
      divcol8.appendChild(hrPaginaWeb);
      divcol8.appendChild(divPaginaWeb);
      divPaginaWeb.appendChild(pPaginaWeb);
      divcol8.appendChild(divAzulitoFinal);


      
      
      

      
  } else {
    alert("Debe completar toda la informacion");
  }
}
