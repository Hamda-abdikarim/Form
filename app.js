// // var ul = document.querySelector('ul')
// // ul.remove();



// var submit = document.querySelector('.btn')

// submit.addEventListener('click', function(e){
//     e.preventDefault();
//     document.querySelector('body').style.background = 'grey';
// });

// var ul = document.querySelector('.notes');

// ul.firstElementChild.textContent = 'Finished Html';
// ul.children[1].textContent = 'started css';
// ul.lastElementChild.innerHTML = 'JavaScript beginer'

var input = document.querySelector('#text-input');
var button = document.querySelector('.btn');
// var ul = document.querySelector('.notes');


button.addEventListener('click', function(e) {
    e.preventDefault()
    if (input.value === '') {
        alert('please Fill the form');
    } else {
        var li = document.createElement('li');

         li.appendChild(document.createTextNode(input.value));
        
          ul.appendChild(li);
        
         input.value ='';
    }
})
// input.addEventListener('click', onSubmit)

// function onSubmit(e) {
// e.preventDefault();

// if(input.value === ''){

//     alert('fill the form');
// } else{
//     var li = document.createElement('.notes');

//     li.appendChild(document.createTextNode(input.value));

//     ul.appendChild(li);

//     // input.value ='';
// }

// }
