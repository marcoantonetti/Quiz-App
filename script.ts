console.log('Correct Answers: Hi, recursion and element.dataset.count');



const questionItem = document.querySelectorAll<HTMLLIElement>('.question-item')
const answerItem = document.querySelectorAll<HTMLLIElement>('.answer-item')
const input = document.querySelectorAll<HTMLInputElement>('.answer')
const submit = document.querySelector<HTMLButtonElement>("#submit")


submit?.addEventListener( "click", submitForm )

function submitForm (e:any) :any  {

    e.preventDefault()

    const answer0 = document.querySelectorAll<HTMLInputElement>('input[name="answer-1"]:checked')
    const answer1 = document.querySelectorAll<HTMLInputElement>('input[name="answer-2"]:checked')
    const answer2 = document.querySelectorAll<HTMLInputElement>('input[name="answer-3"]:checked')

    const value0  = answer0[0].getAttribute('value') 
    const value1  = answer1[0].getAttribute('value') 
    const value2  = answer2[0].getAttribute('value') 

    let testApproved : boolean = true

    const correct = (number:number) => questionItem[number].classList.add('correct')

    const incorrect = (number:number) => {
        questionItem[number].classList.add('incorrect')
        testApproved = false
    }


    value0 == 'true' ?  correct(0) : incorrect(0) 
    value1 == 'true' ?  correct(1) : incorrect(1)
    value2 == 'true' ?  correct(2) : incorrect(2)

    // congratulations alert message 
    if(testApproved) document.querySelector<HTMLDivElement>("#alert")?.classList.add('active')
    
    setTimeout(() => {
        document.querySelector<HTMLDivElement>("#alert")?.classList.remove('active')
     }, 2000);
}