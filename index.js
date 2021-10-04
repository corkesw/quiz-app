// function wrongAnswer(id) {
//     const result = document.getElementsByClassName('unanswered_class')
// console.log(...result)
//     // result.classList.add('incorrect_class')
//     // result.classList.remove('unanswered_class')

//     //console.log(result.classList)

// }

// function correctAnswer(id) {
//     const result = document.getElementById(id)
//     result.classList.add('correct_class')
//     result.classList.remove("unanswered_class")


function answerQuestion() {
    const incorrectResult = [...document.getElementsByClassName('unanswered_class_wrong')]
    incorrectResult.forEach(result => result.className = 'incorrect_class')

    const correctResult = [...document.getElementsByClassName('unanswered_class_correct')]
    correctResult.forEach(result => result.className = 'correct_class')


    console.log(incorrectResult[0].className)


    //const correctResult = document.getElementsByClassName('unanswered_class_correct')

}