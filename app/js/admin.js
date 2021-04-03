class Question {
  constructor(
    question,
    a_answer,
    b_answer,
    c_answer,
    d_answer,
    correct_answer
  ) {
    this.content = question;
    this.answer_1 = a_answer;
    this.answer_2 = b_answer;
    this.answer_3 = c_answer;
    this.answer_4 = d_answer;
    this.correct = correct_answer;
  }
}

// XHTTP stuff
const xhttp = new XMLHttpRequest();
const endPointRoot = "https://assignment1-jackyzheng.herokuapp.com/API/v1/"

// Get form data, turn into Question object
function addQuestion() {
  let question = document.getElementById("question").value;
  let a_answer = document.getElementById("a_answer").value;
  let b_answer = document.getElementById("b_answer").value;
  let c_answer = document.getElementById("c_answer").value;
  let d_answer = document.getElementById("d_answer").value;
  let correct_answer;
  let choices = document.getElementsByName("choices");
  for (let i = 0; i < choices.length; i++) {
    if (choices[i].checked) {
      console.log(choices)
      console.log(choices[i].value)
      correct_answer = choices[i].value;
    }
  }
  let quizQuestion = new Question(
    question,
    a_answer,
    b_answer,
    c_answer,
    d_answer,
    correct_answer
  );
  console.log(quizQuestion)
  let json_question = JSON.stringify(quizQuestion);
  
  // Make POST request to database
  post(json_question);

  // Clear text
  document.getElementById("question").value = "";
  document.getElementById("a_answer").value = "";
  document.getElementById("b_answer").value = "";
  document.getElementById("c_answer").value = "";
  document.getElementById("d_answer").value = "";
}

// POST function
function post(question) {
  xhttp.open("POST", endPointRoot + "questions", true)
  xhttp.setRequestHeader("Content-type", "application/json");
  xhttp.send(question);
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("response").innerHTML = "Question added!";
    }
  }
}

// Updates a question using PUT
function updateQuestion() {
  let question = document.getElementById("question").value;
  let a_answer = document.getElementById("a_answer").value;
  let b_answer = document.getElementById("b_answer").value;
  let c_answer = document.getElementById("c_answer").value;
  let d_answer = document.getElementById("d_answer").value;
  let correct_answer;
  let choices = document.getElementsByName("choices");
  for (let i = 0; i < choices.length; i++) {
    if (choices[i].checked) {
      console.log(choices)
      console.log(choices[i].value)
      correct_answer = choices[i].value;
    }
  }
  let quizQuestion = new Question(
    question,
    a_answer,
    b_answer,
    c_answer,
    d_answer,
    correct_answer
  );
  console.log(quizQuestion)
  let json_question = JSON.stringify(quizQuestion);
  
  // Make POST request to database
  put(json_question);

  // Clear text
  document.getElementById("question").value = "";
  document.getElementById("a_answer").value = "";
  document.getElementById("b_answer").value = "";
  document.getElementById("c_answer").value = "";
  document.getElementById("d_answer").value = "";
}

// PUT function
function put(question) {
  xhttp.open("PUT", endPointRoot + "questions", true)
  xhttp.setRequestHeader("Content-type", "application/json");
  xhttp.send(question);
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("response").innerHTML = "Question updated!";
    } else {
      document.getElementById("response").innerHTML = this.responseText;
    }
  }
}
