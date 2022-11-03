const quizData = [
  {
    question: "What is the most used programming language in 2019?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "a",
  },
  {
    question: "Who is the President of US?",
    a: "Florin Pop",
    b: "Donald Trump",
    c: "Ivan Saldano",
    d: "Mihai Andrei",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
];

const questionE1 = document.querySelector(".question");

const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");

const c_text = document.getElementById("c_text");

const d_text = document.getElementById("d_text");
const submit = document.getElementById("submit");

let currentQuestion = 0
questionE1.innerHTML = quizData[currentQuestion].question
    a_text.innerHTML = quizData[currentQuestion].a;
    b_text.innerHTML = quizData[currentQuestion].b;
    c_text.innerHTML = quizData[currentQuestion].c;
    d_text.innerHTML = quizData[currentQuestion].d;
function loadQuizz() 
{
    currentQuestion++;
    
       
    const currentData = quizData[currentQuestion]
    questionE1.innerHTML = currentData.question
    a_text.innerHTML = currentData.a;
    b_text.innerHTML = currentData.b;
    c_text.innerHTML = currentData.c;
    d_text.innerHTML = currentData.d;

}

const errors = document.querySelectorAll(".result")
const answers = document.getElementsByName("answer")
let score = undefined

function getchoice(){
  answers.forEach(answer => {
    if(answer.checked){
      score = answer.id;
    }
    return score;

     
  })

   

 

}


submit.addEventListener("click", () =>{
    getchoice()
  console.log(currentQuestion)

  
    if(score === quizData[currentQuestion].correct){
      const suscess = document.getElementById(`${quizData[currentQuestion].correct}_text`)
      suscess.classList.toggle("suscess")


      if(currentQuestion <= quizData.length){
        setTimeout(() =>{
          if(currentQuestion < quizData.length){

            loadQuizz()
          }
        
          suscess.classList.remove("suscess")
          answers.forEach(answer =>{
            answer.checked = false;
          })

          




        }, 1000)
      }
        
          
          
    
    
    }
    else{
      errors.forEach((error) =>{
        console.log(error) 
        error.classList.toggle("error")
       
  
      })
      setTimeout(() =>{
        answers.forEach(answer =>{
          answer.checked = false;
        })
        errors.forEach((error) =>{
          console.log(error) 
          error.classList.remove("error")
         
    
        })
        
  
  
        if(currentQuestion <= quizData.length){

          loadQuizz()
        }
       
        
      }, 1000)
       
    }
    
  
  
  
})