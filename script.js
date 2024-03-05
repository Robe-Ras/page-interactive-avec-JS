//Fonctionnalité 1 :
let f1 = document.querySelector('footer');

//Fonctionnalité 1-bis :
let count = 0;


f1.addEventListener('click', function() {
  count += 1; 
  console.log('clique numéro : ' + count);
});



//Fonctionnalité 2 :
let f2 = document.getElementById('navbarHeader');
let iconButton = document.querySelector('button') 

iconButton.addEventListener('click', function() {
  f2.classList.toggle('collapse');
});



//Fonctionnalité 3 :
let editBtn1 = document.querySelector('.btn.btn-sm.btn-outline-secondary');

editBtn1.addEventListener('click', function() {
    this.style.backgroundColor = 'red';
  });



//Fonctionnalité 4 :
let editBtn2 = document.querySelectorAll('.btn.btn-sm.btn-outline-secondary')[1];

editBtn2.addEventListener('click', function() {
  if (this.style.backgroundColor == 'green') {
    this.style.backgroundColor = 'white';
  } else {
    this.style.backgroundColor = 'green';
  }
});



//Fonctionnalité 5 :
let navbar = document.querySelector('.navbar');
let body = document.querySelector('body');
let noCdn = document.querySelector('link[href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"]');

navbar.addEventListener('dblclick', function() {
  if (noCdn.disabled === false) {
    noCdn.disabled = true;
  } 
});

body.addEventListener('dblclick', function(bodyClick) {
  if (bodyClick.target === body && noCdn.disabled === true) {
    noCdn.disabled = false;
  }
});



// Fonctionnalité 6 :
let reduceHover20 = document.querySelectorAll('.btn.btn-sm.btn-success');

reduceHover20.forEach(function(button) {
  let isReduced = false; 

  button.addEventListener('mouseover', function() {
    let card = button.closest('.card');
    let imgToReduce = card.querySelector('.card-img-top'); 
    let textToHide = card.querySelector('.card-text');

    if (!isReduced) { 
      imgToReduce.style.transform = 'scale(20%)';
      textToHide.style.display = 'none';
      isReduced = true; 

    } else { 
      imgToReduce.style.transform = '';
      textToHide.style.display = '';
      isReduced = false; 
    }
  });
});




// Fonctionnalité 7 :
let buttonNext = document.querySelector('.btn.btn-secondary.my-2');

buttonNext.addEventListener('click', function(event) {
  event.preventDefault();

  let lastCard = document.querySelector('.col-md-4:last-child');
  let cardContainer = document.querySelector('.album .row');

  cardContainer.prepend(lastCard);
});




//Fonctionnalité 8 :
let buttonPrevious = document.querySelector('.btn.btn-primary.my-2');

buttonPrevious.addEventListener('click', function(event) {
  event.preventDefault();

  let firstCard = document.querySelector('.col-md-4:first-child');
  let cardContainer = document.querySelector('.album .row');

  cardContainer.append(firstCard);
});



//Fonctionnalité 9 :
let logo = document.querySelector('.navbar-brand');

function highlightLogo() {
  logo.classList.add('highlighted');
}

function unhighlightLogo() {
  logo.classList.remove('highlighted');
}


logo.addEventListener('mouseover', highlightLogo);
logo.addEventListener('mouseout', unhighlightLogo);


document.addEventListener('keypress', function(event) {
  if (logo.classList.contains('highlighted')) {
    
    let key = event.key;
    let body = document.body;
    body.className = '';  // pour supprimer toutes les classes du body

    
    if (key === 'a') {
      body.classList.add('col-4');
    }
    
    else if (key === 'y') {
      body.classList.add('col-4', 'offset-md-4');
    }
   
    else if (key === 'p') {
      body.classList.add('col-4', 'offset-md-8');
    }
    
    else {
    
    }
  }
});

