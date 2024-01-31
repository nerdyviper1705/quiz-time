const questions = {
    history: [
      {
        question: "Who was the first President of the United States?",
        options: ["George Washington", "Abraham Lincoln", "Thomas Jefferson", "John Adams"],
        correctAnswer: "George Washington",
      },
      {
        question: "In which year did World War I begin?",
        options: ["1914", "1917", "1920", "1939"],
        correctAnswer: "1914",
      },
      {
        question: "What ancient civilization built the pyramids of Giza?",
        options: ["Roman", "Greek", "Egyptian", "Mayan"],
        correctAnswer: "Egyptian",
      },
      {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["William Shakespeare", "Jane Austen", "Charles Dickens", "Leo Tolstoy"],
        correctAnswer: "William Shakespeare",
      },
      {
        question: "Which American president is known for the 'New Deal' during the Great Depression?",
        options: ["Franklin D. Roosevelt", "John F. Kennedy", "Dwight D. Eisenhower", "Harry S. Truman"],
        correctAnswer: "Franklin D. Roosevelt",
      },
      {
        question: "Who painted the Mona Lisa?",
        options: ["Pablo Picasso", "Leonardo da Vinci", "Vincent van Gogh", "Michelangelo"],
        correctAnswer: "Leonardo da Vinci",
      },
      {
        question: "What event marked the start of World War II?",
        options: ["Invasion of Poland", "Battle of Stalingrad", "D-Day", "Attack on Pearl Harbor"],
        correctAnswer: "Invasion of Poland",
      },
      {
        question: "Who was the first woman to win a Nobel Prize?",
        options: ["Marie Curie", "Rosa Parks", "Amelia Earhart", "Mother Teresa"],
        correctAnswer: "Marie Curie",
      },
      {
        question: "What was the Renaissance?",
        options: ["A period of artistic and intellectual growth", "A war between nations", "A religious movement", "A scientific discovery"],
        correctAnswer: "A period of artistic and intellectual growth",
      },
      {
        question: "In which year did the American Revolution end?",
        options: ["1776", "1783", "1800", "1812"],
        correctAnswer: "1783",
      },
    ],
  
    geography: [
      {
        question: "What is the capital city of Japan?",
        options: ["Beijing", "Seoul", "Tokyo", "Bangkok"],
        correctAnswer: "Tokyo",
      },
      {
        question: "Which mountain range is the longest in the world?",
        options: ["Andes", "Himalayas", "Rocky Mountains", "Alps"],
        correctAnswer: "Andes",
      },
      {
        question: "In which country would you find the Great Barrier Reef?",
        options: ["Australia", "Brazil", "Mexico", "India"],
        correctAnswer: "Australia",
      },
      {
        question: "What is the largest desert in the world?",
        options: ["Gobi Desert", "Sahara Desert", "Arabian Desert", "Karakum Desert"],
        correctAnswer: "Sahara Desert",
      },
      {
        question: "Which river is the longest in the world?",
        options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
        correctAnswer: "Nile",
      },
      {
        question: "In which continent is the Sahara Desert located?",
        options: ["Africa", "Asia", "South America", "North America"],
        correctAnswer: "Africa",
      },
      {
        question: "What is the smallest country in the world?",
        options: ["Monaco", "Vatican City", "San Marino", "Nauru"],
        correctAnswer: "Vatican City",
      },
      {
        question: "Which ocean is the largest?",
        options: ["Atlantic Ocean", "Indian Ocean", "Southern Ocean", "Pacific Ocean"],
        correctAnswer: "Pacific Ocean",
      },
      {
        question: "What is the capital of Canada?",
        options: ["Ottawa", "Toronto", "Vancouver", "Montreal"],
        correctAnswer: "Ottawa",
      },
      {
        question: "Which country is known as the 'Land of the Rising Sun'?",
        options: ["China", "South Korea", "Japan", "Vietnam"],
        correctAnswer: "Japan",
      },
    ],
  
    maths: [
      {
        question: "What is the value of π (pi) to two decimal places?",
        options: ["3.14", "2.71", "1.62", "4.20"],
        correctAnswer: "3.14",
      },
      {
        question: "Solve for x: 2x + 5 = 15",
        options: ["5", "6", "7", "8"],
        correctAnswer: "5",
      },
      {
        question: "What is the square root of 144?",
        options: ["10", "12", "14", "16"],
        correctAnswer: "12",
      },
      {
        question: "If a triangle has angles measuring 45°, 45°, and 90°, what type of triangle is it?",
        options: ["Equilateral", "Isosceles", "Scalene", "Right-angled"],
        correctAnswer: "Right-angled",
      },
      {
        question: "What is the result of 7 multiplied by 9?",
        options: ["56", "63", "70", "72"],
        correctAnswer: "63",
      },
      {
        question: "If a box contains 24 chocolates and you take away 8, how many chocolates do you have?",
        options: ["8", "16", "24", "32"],
        correctAnswer: "8",
      },
      {
        question: "What is the perimeter of a rectangle with length 8 units and width 5 units?",
        options: ["10", "18", "26", "32"],
        correctAnswer: "26",
      },
      {
        question: "If 3x = 15, what is the value of x?",
        options: ["3", "5", "7", "9"],
        correctAnswer: "5",
      },
      {
        question: "What is the sum of the angles in a triangle?",
        options: ["90°", "180°", "270°", "360°"],
        correctAnswer: "180°",
      },
      {
        question: "If a number is divisible by both 2 and 3, what is it also divisible by?",
        options: ["5", "7", "6", "9"],
        correctAnswer: "6",
      },
    ],
  
    computer: [
      {
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "High Tech Machine Language", "Hyper Transfer Markup Language", "Hyperlink and Text Markup Language"],
        correctAnswer: "Hyper Text Markup Language",
      },
      {
        question: "Who is the founder of Microsoft?",
        options: ["Steve Jobs", "Bill Gates", "Mark Zuckerberg", "Larry Page"],
        correctAnswer: "Bill Gates",
      },
      {
        question: "What is the purpose of CSS in web development?",
        options: ["Server-side scripting", "Styling and formatting web pages", "Database management", "Programming language"],
        correctAnswer: "Styling and formatting web pages",
      },
      {
        question: "Which programming language is known for its use in artificial intelligence?",
        options: ["Java", "C++", "Python", "Ruby"],
        correctAnswer: "Python",
      },
      {
        question: "What does CPU stand for?",
        options: ["Central Processing Unit", "Computer Processing Unit", "Central Process Unit", "Computer Processor Unit"],
        correctAnswer: "Central Processing Unit",
      },
      {
        question: "What is the file extension for a JavaScript file?",
        options: [".js", ".html", ".css", ".java"],
        correctAnswer: ".js",
      },
      {
        question: "What is the purpose of the 'if' statement in programming?",
        options: ["To loop through code", "To perform conditional execution", "To declare a variable", "To define a function"],
        correctAnswer: "To perform conditional execution",
      },
      {
        question: "Which of the following is not a programming language?",
        options: ["Java", "HTML", "Python", "SQL"],
        correctAnswer: "HTML",
      },
      {
        question: "What is the function of the 'git' command in version control?",
        options: ["To run a program", "To compile code", "To track changes in source code", "To connect to a database"],
        correctAnswer: "To track changes in source code",
      },
      {
        question: "What is the purpose of an IP address in networking?",
        options: ["To identify a device on the internet", "To create a secure connection", "To manage files on a server", "To install software"],
        correctAnswer: "To identify a device on the internet",
      },
    ],
  };
  
  let currentSubject = "";
  let currentQuestionIndex = 0;
  let score = 0;
  let timer;
  
  function startQuiz() {
    const selectedSubject = document.querySelector('input[name="subject"]:checked');
  
    if (!selectedSubject) {
      alert("Please select a subject.");
      return;
    }
  
    currentSubject = selectedSubject.value;
    currentQuestionIndex = 0;
    score = 0;
    shuffleQuestions();
    displayQuestion();
  }
  
  function shuffleQuestions() {
    questions[currentSubject] = shuffleArray(questions[currentSubject]);
  }
  
  function shuffleArray(array) {
    let shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  }
  
  function displayQuestion() {
    const questionContainer = document.getElementById("question-container");
    const questionsList = questions[currentSubject];
    const questionObject = questionsList[currentQuestionIndex];
  
    if (currentQuestionIndex < questionsList.length) {
      questionContainer.innerHTML = `
        <h2>${questionObject.question}</h2>
        <button onclick="checkAnswer(0)">${questionObject.options[0]}</button>
        <button onclick="checkAnswer(1)">${questionObject.options[1]}</button>
        <button onclick="checkAnswer(2)">${questionObject.options[2]}</button>
        <button onclick="checkAnswer(3)">${questionObject.options[3]}</button>
        <p>Score: ${score}/10</p>
        <p id="timer">Time left: 20 seconds</p>
      `;
      startTimer();
    } else {
      showCompletionMessage();
    }
  }
  
  function checkAnswer(selectedOption) {
    clearTimeout(timer);
  
    const questionObject = questions[currentSubject][currentQuestionIndex];
  
    if (selectedOption === questionObject.options.indexOf(questionObject.correctAnswer)) {
      score++;
      alert("Man! You are a genius...Go Tiger!");
    } else {
      alert(`Oops! That's incorrect. The correct answer is: ${questionObject.correctAnswer}`);
    }
  
    currentQuestionIndex++;
    displayQuestion();
  }
  
  function resetQuiz() {
    currentSubject = "";
    currentQuestionIndex = 0;
    score = 0;
  }
  
  function showCompletionMessage() {
    let completionMessage = "";
    let gifImage = "";
  
    if (score >= 9) {
      completionMessage = "Congratulations! You are a quiz master!";
      gifImage = "https://media.giphy.com/media/U4DswrBiaz0p67ZweH/giphy.gif?cid=790b7611sfk0d1nzvcr2qizaz5rwwedks4jukrryw2veziit&ep=v1_gifs_search&rid=giphy.gif&ct=g";
    } else if (score >= 6) {
      completionMessage = "Well done! You did great!";
      gifImage = "https://media.giphy.com/media/CnGxHh2F2ko7CdxR1F/giphy.gif?cid=790b7611dme8p26kebe9t96gc9u1kjc321e2cna23btog2ea&ep=v1_gifs_search&rid=giphy.gif&ct=g";
    } else {
      completionMessage = "Nice try! Keep practicing!";
      gifImage = "https://media.giphy.com/media/5QW76Ww9bquHdg1fTv/giphy.gif?cid=790b7611iawetkzfxi2taj30pcgho5hh827dwtpcoune274n&ep=v1_gifs_search&rid=giphy.gif&ct=g";
    }
  
    const questionContainer = document.getElementById("question-container");
    questionContainer.innerHTML = `
      <p>${completionMessage}</p>
      <p>You scored: ${score}/10</p>
      <img src="${gifImage}" alt="Gif Image">
    `;
  
    resetQuiz();
  }
  
  function startTimer() {
    let timeLeft = 20;
    const timerElement = document.getElementById("timer");
  
    function updateTimer() {
      timerElement.textContent = `Time left: ${timeLeft} seconds`;
  
      if (timeLeft > 0) {
        timeLeft--;
        timer = setTimeout(updateTimer, 1000);
      } else {
        alert(`Time's up! The correct answer is: ${questions[currentSubject][currentQuestionIndex].correctAnswer}`);
        currentQuestionIndex++;
        displayQuestion();
      }
    }
  
    updateTimer();
  }
  
  // Initial shuffle to ensure questions are random when the quiz starts
  shuffleQuestions();