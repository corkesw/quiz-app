let correctAnswerCount = 0;
let questionAnswered = false;



const bankOfQuestions = [
    {
        question: "What country is associated with Roast Beef and Yorkshire Pudding?",
        answer: [
            "Mexico", "France", "England", "Guatemala"
        ],
        correctAnswer: 2
  },
  {
    question: "Where is the home of the massaman curry?",
    answer: [
        "Thailand", "Malaysia", "Japan", "Wales"
    ],
    correctAnswer: 0
},
{
    question: "Where does Kiwi fruit originate?",
    answer: [
        "Portugal", "New Zealand", "Australia", "Singapore"
    ],
    correctAnswer: 1
}
]

const questionNumbers = [0 ,1 , 2]
questionNumbers.sort(() => Math.random() - 0.5)
questions = questionNumbers.map((number) => {
    return bankOfQuestions[number]
})

function questionMaker() {
    const resetWrongResult = [
        ...document.getElementsByClassName("incorrect_class"),
      ];
    resetWrongResult.forEach(function (result){
        result.className = "unanswered_class_wrong"
        result.setAttribute('onclick', 'answerQuestion(false)')
    }) ;

    const resetCorrectResult = [
        ...document.getElementsByClassName("correct_class"),
      ];
      resetCorrectResult.forEach(function (result){
          result.className = "unanswered_class_wrong"
          result.setAttribute('onclick', 'answerQuestion(false)')
      })


     questionAnswered = false
     document.getElementById('answer_text').innerText = "";
     
     
    
      const question = document.getElementById('question_insert')
    const answer0 = document.getElementById('answer0')
    answer0.innerText = questions[0].answer[0]
    const answer1 = document.getElementById('answer1')
    answer1.innerText = questions[0].answer[1]
    const answer2 = document.getElementById('answer2')
    answer2.innerText = questions[0].answer[2]
    const answer3 = document.getElementById('answer3')
    answer3.innerText = questions[0].answer[3]
    question.innerText = questions[0].question

    const correctAnswer = `answer${questions[0].correctAnswer}`
    const correctAnswerHTML = document.getElementById(correctAnswer)
    correctAnswerHTML.className = 'unanswered_class_correct'
    correctAnswerHTML.setAttribute('onclick', 'answerQuestion(true)')
    questions.shift()
    if (questions.length === 0) { 
        document.getElementById('next_id').setAttribute('onclick', 'getResults()')
        document.getElementById('next_id').innerText = ('Get Results')

    }
}

function answerQuestion(answer) {
  const incorrectResult = [
    ...document.getElementsByClassName("unanswered_class_wrong"),
  ];
  incorrectResult.forEach((result) => (result.className = "incorrect_class"));

  const correctResult = [
    ...document.getElementsByClassName("unanswered_class_correct"),
  ];
  correctResult.forEach((result) => (result.className = "correct_class"));

  const answer_text = document.getElementById("answer_text");

  if (answer) {
    answer_text.innerText = "That's correct!";
    if ((questionAnswered === false)) {
      correctAnswerCount++;
      
      questionAnswered = true;
    }
  } else {
    questionAnswered = true;  
    answer_text.innerText = "Wrong, loser!";
  }
}

function getResults() {
    console.log("I am called")
    document.getElementById('final_score').innerText = (`You have scored ${correctAnswerCount}`)
}