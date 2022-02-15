//1.-Se crea nodo [Creadno div principal]
const root = document.querySelector('#root');

// Se define una función que construya el titulo del div (root)
const setTitle = (title) => {
  //1.-Se crea nodo [Titulo de la pregunta]
  const h2 = document.createElement('h2');
  //2.-Se configura nodo
  h2.innerText = title;
  //3.-Se asigna contendo al nodo
  root.appendChild(h2);
}

const createForm = (options) =>{
  //1.-Se crea nodo [Creación del Div secundario]
  const form = document.createElement('form');
  //2.-Se configura nodo
  options.forEach((option)=>{
    //1.-Se crea nodo [Etiqueta-cada una de las opciones del menu]
    const label = document.createElement("label");
    //2.-Se configura nodo
    label.innerText = option;
    label.style= "display:block;";
    //1.-Se crea nodo [Input-Seleccionador de opción]
    const input = document.createElement('input');
    //2.-Se configura nodo
    input.type = 'radio';
    input.value = option;
    input.name = 'q1';
    //3.-Se asigna contendo al nodo
    label.prepend(input);
    form.appendChild(label);
    //return form;
  });
  
  //1.-Se crea nodo [Boton]
  const btn = document.createElement('button');
  //2.-Se configura nodo
  btn.innerText= 'Enviar';
  btn.type = 'submint';
  //3.-Se asigna contendo al nodo
  form.appendChild(btn);
  root.appendChild(form);
  // Regresa el valor de form para que se ocupe en la función setLstener
  return form;
}

const setListener = (form,answer,title) => {
  form.onsubmit = (event) =>{
    event.preventDefault();
    const response = event.target['q1'].value;
    const h2 = document.querySelector('h2');
    const h3 = document.createElement('h3');
    h3.innerHTML = title;
    let good = "Correcto";
    let bad = "Incorrecto, intenta de nuevo."
    if (response === answer){
      h2.innerText = good;
      h2.style = 'color:#14EBBC';
    } else {
      h2.innerHTML = bad;
      h2.style = 'color:#EB1443';
      root.appendChild(h3);
    }


  }
}

const menu = (title,options,answer) => {
  setTitle(title);
  const form = createForm(options);
  setListener(form,answer,title);
}

// Se invoca al fuinción que construira el div (root)
menu('12+17=',["32","25","99","44","29"],'29');