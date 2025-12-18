class Question {
    constructor() {
        this.operators = ["+", "-", "/", "*", "%", "^"];
        this.operand1 = this.random(100);
        this.operand2 = this.random(100);
        this.operator = this.operators[this.random(this.operators.length)];//[+,-,/,*,%,^]
        this.score = this.random(50);
        this.correctAnswer = this.calculateAnswer();

    }

    /* min value of this function - 1
    max value of this function - high
    */

    random(high) {
        return Math.floor(Math.random() * high) + 1;
    }

    display() {
        // console.log(this.operand1 ,this.operator ,this.operand2);
        return `${this.operand1}, ${this.operator}, ${this.operand2}`
    }

    validateAnswer() {
        return this.correctAnswer === Number(answer) ? this.score : 0;
    }


    calculateAnswer() {
        switch (this.operator) {
            case "+":
                return this.operand1 + this.operand2;
            case "-":
                return this.operand1 - this.operand2;
            case "/":
                return Math.floor(this.operand1 / this.operand2);
            case "*":
                return this.operand1 * this.operand2;
            case "%":
                return this.operand1 % this.operand2;
            case "^":
                return this.operand1 ^ this.operand2;
            default:
                return "invalid operator";
        }
    }
}

const question = new Question();
console.log({ question });


// Quize class..

class Question {

}
class Quiz {
    constructor() {
        this.timer = this.random(60);
        this.userResponse = {};

    }
    displayCurrentQuestion() {
        console.log(Question.operand1, Question.operand2);
    }
    random(high) {
        return 1 + Math.floor(Math.random() * high);
    }
    nextQuestion(currentQuestionAnswer) {
        this.score += this.question.validateAnswer(currentQuestionAnswer);
        this.question = new Question();
        this.displayCurrentQuestion();

    }
    get score() {
        return this.score;


    }
}
const questionEle = Document.querySelector("#questionText")
const answerEle = Document.querySelector("#answerInput")
const scoreEle = Document.querySelector("#score");

questionEle = textContent = new Question();