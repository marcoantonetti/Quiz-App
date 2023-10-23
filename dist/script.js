"use strict";
console.log('Correct Answers: Hi, recursion and element.dataset.count');
const questionItem = document.querySelectorAll('.question-item');
const answerItem = document.querySelectorAll('.answer-item');
const input = document.querySelectorAll('.answer');
const submit = document.querySelector("#submit");
submit === null || submit === void 0 ? void 0 : submit.addEventListener("click", submitForm);
function submitForm(e) {
    var _a;
    e.preventDefault();
    const answer0 = document.querySelectorAll('input[name="answer-1"]:checked');
    const answer1 = document.querySelectorAll('input[name="answer-2"]:checked');
    const answer2 = document.querySelectorAll('input[name="answer-3"]:checked');
    const value0 = answer0[0].getAttribute('value');
    const value1 = answer1[0].getAttribute('value');
    const value2 = answer2[0].getAttribute('value');
    let testApproved = true;
    const correct = (number) => questionItem[number].classList.add('correct');
    const incorrect = (number) => {
        questionItem[number].classList.add('incorrect');
        testApproved = false;
    };
    value0 == 'true' ? correct(0) : incorrect(0);
    value1 == 'true' ? correct(1) : incorrect(1);
    value2 == 'true' ? correct(2) : incorrect(2);
    // congratulations alert message 
    if (testApproved)
        (_a = document.querySelector("#alert")) === null || _a === void 0 ? void 0 : _a.classList.add('active');
    setTimeout(() => {
        var _a;
        (_a = document.querySelector("#alert")) === null || _a === void 0 ? void 0 : _a.classList.remove('active');
    }, 2000);
}
