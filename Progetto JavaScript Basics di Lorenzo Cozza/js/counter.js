let counter = 0;

function getIncrement() {
  counter++;
    return counter;
}

function getDecrement() {
  counter--;
    return counter;
}

function increaseOperation() {
  let currentCounter = document.getElementById('counter');
    currentCounter.innerHTML = getIncrement();
    counterColor();
}

function decreaseOperation() {
  let currentCounter = document.getElementById('counter');
    if(currentCounter) currentCounter.innerHTML = getDecrement();
    counterColor();
}

function reset() {
  let currentCounter = document.getElementById('counter');
    counter = 0;
      if(currentCounter) currentCounter.innerHTML = counter;
        document.getElementById('counter').classList.remove("negative");
        document.getElementById('counter').classList.remove("positive");
  }

function counterColor() {
  if (counter < 0) {
    document.getElementById('counter').classList.add("negative");
  } else if (counter > 0) {
    document.getElementById('counter').classList.add("positive");
  } else {
    document.getElementById('counter').classList.remove("negative");
    document.getElementById('counter').classList.remove("positive");
  }
}
