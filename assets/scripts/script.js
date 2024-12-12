const startBtn = document.querySelector('.start-btn');
const ruleForm = document.querySelector('.form-container');
const quizBox = document.querySelector('.quiz-box')
const optionList = document.querySelector('.option-list');
const resultBox = document.querySelector('.result-box');



startBtn.onclick = () => {
    ruleForm.classList.add('active');
    quizBox.classList.add('active');
    nextBtn.classList.add('active');
    questionCount++;
    showQuestions(questionCount);
   
    showQuestions(0);
    questionCounter(1);
}

let questionCount = -1;
let questionNumb = 1; 
const nextBtn = document.querySelector('.next-btn');

    
nextBtn.onclick = () => {
    if (questionCount <questions.length - 1) {
        questionCount++;
        showQuestions(questionCount);

        questionNumb++;
        questionCounter(questionNumb);

        
    }
    else {

        showResultBox();
    }

   

}
function showQuestions(index) {
    const questionText = document.querySelector('.question-text');
    questionText.textContent = `${questions[index].numb}. ${questions[index].question}`;

    let optionTag = `<div class="option"><span>${questions[index].options[0]}</span></div>
        <div class="option"><span>${questions[index].options[1]}</span></div>
        <div class="option"><span>${questions[index].options[2]}</span></div>
        <div class="option"><span>${questions[index].options[3]}</span></div>`;   
        
    optionList.innerHTML = optionTag;
    
    const option = document.querySelectorAll('.option');
    for (let i=0; i < option.length; i++) {
        option[i].setAttribute('onclick', 'optionSelected(this)')
    }
}




function optionSelected(answer) {
    let userAnswer = answer.textContent;
    let correctAnswer = questions[questionCount].answer;
    let allOptions = optionList.children.length;

    if (userAnswer == correctAnswer) {
        answer.classList.add('correct');
        userScore += 1;
        headerScore();
    }
    else {
        answer.classList.add('incorrect');

        for (let i = 0; i < allOptions; i++) {
            if (optionList.children[i].textContent == correctAnswer) {
                optionList.children[i].setAttribute('class', 'option correct');
            }
        }

    }

    //if user has selected, disabled all options
    for (let i = 0; i < allOptions; i++) {
        optionList.children[i].classList.add('disabled');
    }

    nextBtn.classList.add('active');

}   
function questionCounter(index) {
    const questionTotal = document.querySelector('.question-total')
    questionTotal.textContent = `${index} of ${questions.length} Questions`;
}

function showResultBox() {
    quizBox.classList.remove('active');
    resultBox.classList.add('active');
}

