# **MCQ Web App Documentation**

## **Overview**
The MCQ Web App is a simple web application designed to conduct quizzes using multiple-choice questions (MCQs). It is built using HTML, CSS, and JavaScript, providing an interactive user experience for users to test their knowledge on JavaScript.

## **Features**
- **User  Interface**: A clean and responsive design using Bootstrap for styling.
- **Quiz Functionality**: Users can navigate through questions, select answers, and submit their responses.
- **Timer**: A countdown timer that limits the time for completing the quiz.
- **Score Calculation**: Displays the user's score at the end of the quiz.

## **File Structure**
```
/MCQ-web-app
│
├── .git
│   ├── COMMIT_EDITMSG
│   ├── config
│   ├── description
│   ├── HEAD
│   ├── hooks
│   │   ├── applypatch-msg.sample
│   │   ├── commit-msg.sample
│   │   ├── fsmonitor-watchman.sample
│   │   ├── post-update.sample
│   │   ├── pre-applypatch.sample
│   │   ├── pre-commit.sample
│   │   ├── pre-merge-commit.sample
│   │   ├── pre-push.sample
│   │   ├── pre-rebase.sample
│   │   ├── pre-receive.sample
│   │   ├── prepare-commit-msg.sample
│   │   ├── push-to-checkout.sample
│   │   ├── sendemail-validate.sample
│   │   └── update.sample
│   ├── index
│   ├── info
│   │   └── exclude
│   ├── logs
│   │   ├── HEAD
│   │   ├── refs
│   │   │   ├── heads
│   │   │   │   └── main
│   │   │   └── remotes
│   │   │       └── origin
│   │   │           ├── HEAD
│   │   │           └── main
│   │   └── objects
│   │       ├── 0e
│   │       ├── 13
│   │       ├── 1c
│   │       ├── 2f
│   │       ├── 5a
│   │       ├── 65
│   │       ├── 6c
│   │       ├── 73
│   │       ├── 7e
│   │       ├── 9f
│   │       ├── a1
│   │       ├── dc
│   │       └── f6
│   ├── packed-refs
│   ├── refs
│   │   ├── heads
│   │   │   └── main
│   │   └── remotes
│   │       └── origin
│   │           ├── HEAD
│   │           └── main
│   ├── objects
│   │   ├── pack
│   │   │   ├── pack-e81a4233abe9f290e078b8feec7ac98009450838.idx
│   │   │   ├── pack-e81a4233abe9f290e078b8feec7ac98009450838.pack
│   │   │   └── pack-e81a4233abe9f290e078b8feec7ac98009450838.rev
│   └── README.md
│
├── index.html
├── script.js
└── style.css
```

## **File Descriptions**
- **index.html**: The main HTML file that contains the structure of the web app, including the quiz interface.
- **script.js**: The JavaScript file that contains the logic for the quiz, including question loading, answer checking, and score calculation.
- **style.css**: The CSS file that styles the web app, ensuring a visually appealing layout.
- **README.md**: A markdown file that provides an overview and instructions for the project.

## **How to Run the Application**
1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd MCQ-web-app
   ```

2. **Open the Application**:
   - Open `index.html` in a web browser.

3. **Start the Quiz**:
   - Click on the "Next" button to navigate through the questions.
   - Select an answer for each question.
   - Click "Submit" to see your score.

## **Quiz Logic**
- The quiz consists of a series of questions stored in an array of objects in `script.js`.
- Each question object contains:
  - `question`: The question text.
  - `options`: An array of possible answers.
  - `answer`: The index of the correct answer.

## **Timer Functionality**
- A timer is implemented using `setInterval` to count down from 60 seconds.
- If the timer reaches zero, the quiz is automatically submitted.

## **Score Calculation**
- The user's score is calculated based on the number of correct answers selected.
- The final score is displayed at the end of the quiz.

## **Styling**
- The application uses Bootstrap for responsive design and styling.
- Custom styles are defined in `style.css` to enhance the user interface.

## **Conclusion**
The MCQ Web App is a straightforward and effective tool for testing knowledge on JavaScript. It provides a user-friendly interface and interactive features that enhance the learning experience.