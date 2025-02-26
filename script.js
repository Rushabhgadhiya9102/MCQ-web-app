const questions = [
  {
    question: "Q1: What does 'var' declare in JavaScript?",
    options: ["Variable", "Function", "Object", "Array"],
    answer: 0,
  },
  {
    question: "Q2: Which of the following is a JavaScript data type?",
    options: ["String", "Integer", "Float", "All of the above"],
    answer: 3,
  },
  {
    question: "Q3: What is the correct syntax to create a function in JavaScript?",
    options: ["function myFunction()", "function:myFunction()", "myFunction: function()", "myFunction() = function"],
    answer: 0,
  },
  {
    question: "Q4: What is the purpose of the 'this' keyword in JavaScript?",
    options: ["To refer to the global object", "To refer to the current object", "To refer to the parent object", "To refer to the child object"],
    answer: 1,
  },
  {
    question: "Q5: What is the difference between 'null' and 'undefined' in JavaScript?",
    options: [
      "Null is a primitive value, undefined is an object",
      "Null is an object, undefined is a primitive value",
      "Null and undefined are the same",
      "Null is a function, undefined is a variable",
    ],
    answer: 0,
  },
  {
    question: "Q6: What is the purpose of the 'let' keyword in JavaScript?",
    options: ["To declare a global variable", "To declare a local variable", "To declare a constant", "To declare a function"],
    answer: 1,
  },
  {
    question: "Q7: What is the purpose of the 'const' keyword in JavaScript?",
    options: ["To declare a global variable", "To declare a local variable", "To declare a constant", "To declare a function"],
    answer: 2,
  },
  {
    question: "Q8: What is the difference between '==' and '===' in JavaScript?",
    options: [
      "'==' checks for value equality, '===' checks for type and value equality",
      "'==' checks for type and value equality, '===' checks for value equality",
      "'==' and '===' are the same",
      "'==' is used for strings, '===' is used for numbers",
    ],
    answer: 0,
  },
  {
    question: "Q9: What is the purpose of the 'for...in' loop in JavaScript?",
    options: ["To iterate over an array", "To iterate over an object", "To iterate over a string", "To iterate over a function"],
    answer: 1,
  },
  {
    question: "Q10: What is the purpose of the 'for...of' loop in JavaScript?",
    options: ["To iterate over an array", "To iterate over an object", "To iterate over a string", "To iterate over a function"],
    answer: 0,
  },
  {
    question: "Q11: What is the purpose of the 'while' loop in JavaScript?",
    options: ["To iterate over an array", "To iterate over an object", "To execute a block of code repeatedly", "To execute a block of code once"],
    answer: 2,
  },
  {
    question: "Q12: What is the purpose of the 'do...while' loop in JavaScript?",
    options: ["To iterate over an array", "To iterate over an object", "To execute a block of code repeatedly", "To execute a block of code once"],
    answer: 2,
  },
  {
    question: "Q13: What is the purpose of the 'switch' statement in JavaScript?",
    options: [
      "To execute a block of code based on a condition",
      "To execute a block of code based on a value",
      "To execute a block of code repeatedly",
      "To execute a block of code once",
    ],
    answer: 1,
  },
  {
    question: "Q14: What is the purpose of the 'try...catch' block in JavaScript?",
    options: ["To handle errors", "To handle exceptions", "To handle warnings", "To handle notices"],
    answer: 1,
  },
  {
    question: "Q15: What is the purpose of the 'finally' block in JavaScript?",
    options: [
      "To handle errors",
      "To handle exceptions",
      "To execute a block of code regardless of an error",
      "To execute a block of code only if an error occurs",
    ],
    answer: 2,
  },
  {
    question: "Q16: What is the purpose of the 'throw' statement in JavaScript?",
    options: ["To throw an error", "To throw an exception", "To throw a warning", "To throw a notice"],
    answer: 0,
  },
  {
    question: "Q17: What is the purpose of the 'debugger' statement in JavaScript?",
    options: ["To debug code", "To execute code", "To pause code", "To resume code "],
    answer: 2,
  },
  {
    question: "Q18: What is the output of 'typeof NaN' in JavaScript?",
    options: ["number", "undefined", "object", "string"],
    answer: 0,
  },
  {
    question: "Q19: What does JSON stand for?",
    options: ["JavaScript Object Notation", "JavaScript Online Notation", "JavaScript Object Name", "JavaScript Object Number"],
    answer: 0,
  },
  {
    question: "Q20: Which method is used to parse a JSON string in JavaScript?",
    options: ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "JSON.decode()"],
    answer: 0,
  },
  {
    question: "Q21: Which of the following is a way to create an object in JavaScript?",
    options: ["Using object literal", "Using constructor function", "Using Object.create()", "All of the above"],
    answer: 3,
  },
  {
    question: "Q22: What is the purpose of the 'bind' method in JavaScript?",
    options: [
      "To bind a function to an object",
      "To bind an object to a function",
      "To bind a variable to a function",
      "To bind a method to a variable",
    ],
    answer: 0,
  },
  {
    question: "Q23: What is the output of '0.1 + 0.2 === 0.3' in JavaScript?",
    options: ["true", "false", "undefined", "NaN"],
    answer: 1,
  },
  {
    question: "Q24: What is the purpose of the 'map' method in JavaScript?",
    options: [
      "To create a new array with the results of calling a function on every element",
      "To filter elements from an array",
      "To reduce an array to a single value",
      "To find an element in an array",
    ],
    answer: 0,
  },
  {
    question: "Q25: What is the purpose of the 'filter' method in JavaScript?",
    options: [
      "To create a new array with all elements that pass the test implemented by the provided function",
      "To create a new array with the results of calling a function on every element",
      "To reduce an array to a single value",
      "To find an element in an array",
    ],
    answer: 0,
  },
  {
    question: "Q26: What is the purpose of the 'reduce' method in JavaScript?",
    options: [
      "To execute a reducer function on each element of the array",
      "To create a new array with the results of calling a function on every element",
      "To filter elements from an array",
      "To find an element in an array",
    ],
    answer: 0,
  },
  {
    question: "Q27: What is the purpose of the 'setTimeout' function in JavaScript?",
    options: [
      "To execute a function after a specified number of milliseconds",
      "To execute a function repeatedly",
      "To pause execution of code",
      "To delay execution of code",
    ],
    answer: 0,
  },
  {
    question: "Q28: What is the purpose of the 'setInterval' function in JavaScript?",
    options: [
      "To execute a function repeatedly at specified intervals",
      "To execute a function after a specified number of milliseconds",
      "To pause execution of code",
      "To delay execution of code",
    ],
    answer: 0,
  },
  {
    question: "Q29: What is the purpose of the 'localStorage' object in JavaScript?",
    options: ["To store data locally in the user's browser", "To store data on the server", "To store data temporarily", "To store data in cookies"],
    answer: 0,
  },
  {
    question: "Q30: What is the purpose of the 'sessionStorage' object in JavaScript?",
    options: [
      "To store data for the duration of the page session",
      "To store data permanently",
      "To store data in cookies",
      "To store data locally in the user's browser",
    ],
    answer: 0,
  },
  {
    question: "Q31: What is the purpose of the 'fetch' API in JavaScript?",
    options: ["To make network requests", "To handle errors", "To parse JSON", "To manipulate the DOM"],
    answer: 0,
  },
  {
    question: "Q32: What is the purpose of the 'Promise' object in JavaScript?",
    options: ["To handle asynchronous operations", "To handle synchronous operations", "To handle errors", "To handle events"],
    answer: 0,
  },
  {
    question: "Q33: What is the output of 'console.log(typeof null)' in JavaScript?",
    options: ["object", "null", "undefined", "number"],
    answer: 0,
  },
  {
    question: "Q34: What is the purpose of the 'async/await' syntax in JavaScript?",
    options: ["To work with promises more easily", "To handle errors", "To create functions", "To manipulate the DOM"],
    answer: 0,
  },
  {
    question: "Q35: What is the output of 'typeof []' in JavaScript?",
    options: ["array", "object", "undefined", "string"],
    answer: 1,
  },
  {
    question: "Q36: What is the purpose of the 'Object.keys()' method in JavaScript?",
    options: [
      "To get an array of a given object's own property names",
      "To get an array of a given object's values",
      "To get an array of a given object's methods",
      "To get an array of a given object's prototypes",
    ],
    answer: 0,
  },
  {
    question: "Q37: What is the purpose of the 'Object.values()' method in JavaScript?",
    options: [
      "To get an array of a given object's own enumerable property values",
      "To get an array of a given object's keys",
      "To get an array of a given object's methods",
      "To get an array of a given object's prototypes",
    ],
    answer: 0,
  },
  {
    question: "Q38: What is the purpose of the 'Object.entries()' method in JavaScript?",
    options: [
      "To return an array of a given object's own enumerable string-keyed property [key, value] pairs",
      "To return an array of a given object's keys",
      "To return an array of a given object's values",
      "To return an array of a given object's prototypes",
    ],
    answer: 0,
  },
  {
    question: "Q39: What is the purpose of the 'Array.isArray()' method in JavaScript?",
    options: [
      "To determine whether the passed value is an Array",
      "To create a new array",
      "To convert an array to a string",
      "To find an element in an array",
    ],
    answer: 0,
  },
  {
    question: "Q40: What is the purpose of the 'Math.random()' method in JavaScript?",
    options: [
      "To return a random floating-point number between 0 (inclusive) and 1 (exclusive)",
      "To return a random integer",
      "To return a random number between two specified values",
      "To return a random boolean value",
    ],
    answer: 0,
  },
  {
    question: "Q41: What is the purpose of the 'Math.floor()' method in JavaScript?",
    options: [
      "To return the largest integer less than or equal to a given number",
      "To return the smallest integer greater than or equal to a given number",
      "To round a number to the nearest integer",
      "To return a random integer",
    ],
    answer: 0,
  },
  {
    question: "Q42: What is the purpose of the 'Math.ceil()' method in JavaScript?",
    options: [
      "To return the smallest integer greater than or equal to a given number",
      "To return the largest integer less than or equal to a given number",
      "To round a number to the nearest integer",
      "To return a random integer",
    ],
    answer: 0,
  },
  {
    question: "Q43: What is the purpose of the 'Math.round()' method in JavaScript?",
    options: [
      "To round a number to the nearest integer",
      "To return the largest integer less than or equal to a given number",
      "To return the smallest integer greater than or equal to a given number",
      "To return a random integer",
    ],
    answer: 0,
  },
  {
    question: "Q44: What is the purpose of the 'String.prototype.split()' method in JavaScript?",
    options: [
      "To split a string into an array of substrings",
      "To join an array of strings into a single string",
      "To convert a string to uppercase",
      "To convert a string to lowercase",
    ],
    answer: 0,
  },
  {
    question: "Q45: What is the purpose of the 'String.prototype.join()' method in JavaScript?",
    options: [
      "To join all elements of an array into a string",
      "To split a string into an array of substrings",
      "To convert a string to uppercase",
      "To convert a string to lowercase",
    ],
    answer: 0,
  },
  {
    question: "Q46: What is the purpose of the 'String.prototype.includes()' method in JavaScript?",
    options: [
      "To determine whether a string contains a specified substring",
      "To find the index of a substring in a string",
      "To convert a string to uppercase",
      "To convert a string to lowercase",
    ],
    answer: 0,
  },
  {
    question: "Q47: What is the purpose of the 'String.prototype.indexOf()' method in JavaScript?",
    options: [
      "To return the index of the first occurrence of a specified value in a string",
      "To determine whether a string contains a specified substring",
      "To convert a string to uppercase",
      "To convert a string to lowercase",
    ],
    answer: 0,
  },
];

let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 30000;

function startTimer() {
  timer = setInterval(() => {
    timeLeft--;
    document.getElementById("time").innerText = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timer);
      submitQuiz();
    }
  }, 1000);
}

function loadQuestion() {
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const currentQuestion = questions[currentQuestionIndex];

  questionElement.innerText = currentQuestion.question;
  optionsElement.innerHTML = "";

  currentQuestion.options.forEach((option, index) => {
    optionsElement.innerHTML += `
            <div class="btn-group">
                <input class="btn-check" type="radio" name="option" id="option${index}" value="${index}">
                <label class="btn btn-outline-primary" for="option${index}">${option}</label>
            </div>
        `;
  });
}

function nextQuestion() {
  const selectedOption = document.querySelector('input[name="option"]:checked');
  if (selectedOption) {
    if (parseInt(selectedOption.value) === questions[currentQuestionIndex].answer) {
      score++;
    }
  }
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    submitQuiz();
  }
}

function prevQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    loadQuestion();
  }
}

function submitQuiz() {
  clearInterval(timer);
  document.getElementById("quiz-container").classList.add("hidden");
  document.getElementById("result").classList.remove("hidden");
  document.getElementById("score").innerText = `${score} out of ${questions.length}`;
}

window.onload = () => {
  loadQuestion();
  startTimer();
};
