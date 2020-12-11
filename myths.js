function search_myths() { 
    let input = document.getElementById('searchbar').value 
    input=input.toLowerCase(); 
    let x = document.getElementsByClassName('blogs'); 
      
    for (i = 0; i < x.length; i++) {  
        if (!x[i].innerHTML.toLowerCase().includes(input)) { 
            x[i].style.display="none"; 
        } 
        else { 
            x[i].style.display="list-item";                  
        } 
    } 
} 

/* function for showing survey window*/
function popUp(url) {
    popUpWindow = window.open("survey.html",'popUpWindow','height=700,width=900,left=50,top=50,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes');
}

/* for generating dynamic questions*/
var buttons = document.getElementsByTagName('button'),
  questions = document.getElementsByTagName('div');
for (var i = 0; i < buttons.length; i++) {
  var button = buttons[i];
  button.addEventListener('click', function() {
    var target = this.getAttribute('data-next');
    for (var j = 0; j < questions.length; j++) {
      var question = questions[j];
      if (question.id == target) {
        question.classList.add('show');
      } else if (question.classList.contains('show')) {
        question.classList.remove('show');
      }
    }
  });
}