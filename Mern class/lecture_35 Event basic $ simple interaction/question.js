const question=[
    {
        title:Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, 
        Option:[
            "option 1",
            "option 2",
            "option 3",
            "option 4",
        ],
        correctOption:2,
    
    },
];
const questionTitle=document.querySelector(".question-title");

const option1=document.querySelector(".option-1");
const option2=document.querySelector(".option-2");
const option3=document.querySelector(".option-3");
const option4=document.querySelector(".option-4");

const nextBtn=document.querySelector(".next");

function changeScore(oIdx){
    if(questions[currQuesIdx].correctOption===optionNumber)
        score+=correctAnswerScore;
    else score+=wrongAnswerScore;


}
function changeQuestion(){
    const questionObj=question[currQuesIdx];
    

}
