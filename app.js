document.getElementById('restart').onclick = restart;
var buttons = document.querySelectorAll('#content button');
var countQuestion=0, rightAnswers=0;

class Question {
  constructor(question, firstVar, secondVar, thirdVar, fourthVar, correct){
    this._question = question;
    this._variants = new Array(firstVar, secondVar, thirdVar, fourthVar);
    this._correct = correct;
  }

  get correct(){
    return this._correct;
  }
  get variants(){
    return this._variants;
  }
  get question(){
    return this._question;
  }
}

var questions = [
new Question('Who was the first President of the United States?', 'George Washington', 'Thomas Jefferson',
'Thomas Edison', 'Benjamin Franklin', "0"), 
new Question('What is the year right now?', '2019', '2018', '2017', '2020', "0"),
new Question('Where does Ronaldo play?', 'MU', 'Readl Madrid', 'Sporting', 'Juventus', "3"), 
new Question('Will I be drunk at my bday?', 'Yes', 'Probably', 'Guess yup', 'Nope', "2")
];

function restart(){
  document.getElementById('content').style.display = 'flex';
  document.getElementById('count').style.display = 'initial';
  document.querySelector('h1').style.display = 'initial';
  document.getElementById('gameOver').style.display = "none";
  document.querySelector("#gameOver span").innerHTML = "Your score is: ";
  countQuestion=0;
  rightAnswers = 0;
  update();
}

function checkAnswers(bthValue){
  if(bthValue === questions[countQuestion].correct)
    rightAnswers++;
  countQuestion++;
}

function update(){
  if(this.name)
    checkAnswers(this.name);
  if(countQuestion<questions.length){
  document.getElementById('question').innerHTML = questions[countQuestion].question;
  var variants = document.getElementsByClassName('variant');
  for(var i=0; i<questions[countQuestion].variants.length; i++){
    variants[i].innerHTML = questions[countQuestion].variants[i];
  }
  document.querySelector('#count span').innerHTML = "Question " + (countQuestion+1) + " of " + questions.length;
}
  else {
    document.getElementById('content').style.display = 'none';
    document.getElementById('count').style.display = 'none';
    document.querySelector('h1').style.display = 'none';
    document.getElementById('gameOver').style.display = "block";
    document.querySelector('#gameOver span').innerHTML+=rightAnswers;
    if(rightAnswers===questions.length)
      document.querySelector('#gameOver h1').innerHTML = "Congratulations!";
    else if(rightAnswers===questions.length-1)
      document.querySelector('#gameOver h1').innerHTML = "Well done!";
    else document.querySelector('#gameOver h1').innerHTML = "Game over!";
  }
}

update();

for(var i=0; i < buttons.length; i++){
  buttons[i].onclick = update;
}

