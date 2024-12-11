const startBtn = document.querySelector('.start-btn');
const ruleForm = document.querySelector('.form-container')
const quizBox = document.querySelector('.quiz-box')

startBtn.onclick = () => {
    ruleForm.classList.add('active');
    quizBox.classList.add('active');
    
}