// specificare le dichiarazioni
let plusBtn;
let minusBtn;
let resetBtn;

// creare la funzione per caricare i tre btn e le relative azioni
function loadDiv() {

  createDivMain();

  plusBtn.addEventListener("click", increaseOperation);
  minusBtn.addEventListener("click", decreaseOperation);
  resetBtn.addEventListener("click", reset);
}

// definire createDivMain()
function createDivMain() {

  // creare Div principale
  let divMain = createElement('div');
    divMain.classList.add('flex-center');

  // creare Div counter
  let divCounter = createElement('div');
    divCounter.classList.add('counter');
    divCounter.setAttribute('id', 'counter');
    divCounter.innerHTML = 0;

  // creare Div pulsanti
  let divButtons = createElement('div');
    divButtons.classList.add('buttons');
    divButtons.setAttribute('id', 'buttons');

  // creare pulsanti plus e minus
  plusBtn = createButton('+');
    plusBtn.classList.add('btn');

  minusBtn = createButton('-');
    minusBtn.classList.add('btn');

  // collegare i pulsanti al Div dei pulsanti
  divButtons.appendChild(minusBtn);
  divButtons.appendChild(plusBtn);

  // creare Div pulsante reset
  let divReset = createElement('div');
    divReset.classList.add('buttons');
    divReset.setAttribute('id', 'reset');

  // creare pulsante reset
  resetBtn = createButton('Reset Counter');
    resetBtn.classList.add('btn-reset');

  // collegare pulsante reset al div reset
  divReset.appendChild(resetBtn)

  // collegare i 3 div al div Main
  divMain.appendChild(divCounter);
  divMain.appendChild(divButtons);
  divMain.appendChild(divReset);

  // collegare il div Main al body del documento
  document.body.appendChild(divMain);
}

  // funzione per creazione pulsante
function createButton(value) {
  let button = document.createElement("button");
    button.innerHTML = value;
      return button;
}

  // funzione per creazione tag
function createElement(tag) {
  let element = document.createElement(tag);
    return element;
}
