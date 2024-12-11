const startBtn = document.querySelector('.start-btn');
const ruleForm = document.querySelector('.form-container.active')
const quizBox = document.querySelector('.quiz-box')

startBtn.onclick = () => {
    quizBox.classList.add('active');
    ruleForm.classList.remove('active');
}