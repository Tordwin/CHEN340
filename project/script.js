// Object that stores user's answers
const localStorage = {};

// Used to create form for each prompts
function createForm(id, text, options, nextQNum){
    // Creates wrapper <div>
    const wrap = document.createElement('div');
    // Creates label <label>
    const label = document.createElement('label');
    // Setting attributes for
    label.setAttribute('for', id);
    // Setting name for the label
    label.innerText = text;
    // Creates select <select>
    const select = document.createElement('select');
    // Setting attributes for id, name, and adding an Event Listener
    select.setAttribute('id',id);
    select.setAttribute('name',id);
    select.addEventListener('change', function(){
        localStorage[id] = select.value;
        next(nextQNum)
    });
    // Creates option <option>
    const onStart = document.createElement('option');
    // Setting the value of option
    onStart.value = '';
    // Setting the default selected value
    onStart.innerText = 'Select an answer below...'
    // Appending onStart to select object
    select.appendChild(onStart);
    // Loop to create more options
    for (const value in options){
        const option = document.createElement('option');
        option.value = value;
        option.innerText = options[value];
        select.appendChild(option);
    }
    // Wrapping label and select in <div>
    wrap.appendChild(label);
    wrap.appendChild(select);
    // Returns wrap <div>
    return wrap;
}

// Used to create result sentence
function createResult(text){
    // Create <p>
    const para = document.createElement('p');
    // Inserts 'text' into <p>
    para.textContent = text;
    // Returns <p> object
    return para
}

// Function to build sentence
function buildResult(){
    // Starting prompt
    let result = "You are looking for a ";
    // Men
    if (localStorage['question1'] === 'men') {
        result += "man";
    }
    // Women
    else if (localStorage['question1'] === 'women') {
        result += "women";
    }

    if (localStorage['question2']) {
        // Facial hair
        if (localStorage['question2'] === 'yes'){
            result += " with facial hair";
        }
        else if (localStorage['question2'] === 'no'){
            result += " without facial hair";
        }
        // Blond or brunette
        else if (localStorage['question2'] === 'blonde'){
            result += " with blonde hair";
        }
        else if (localStorage['question2'] === 'brunette'){
            result += " with brunette hair";
        }
    }

    if (localStorage['question3']){
        // Complextion
        if (localStorage['question3'] === 'light'){
            result += " and light complextion.";
        }
        else if (localStorage['question3'] === 'dark'){
            result += " and dark complextion.";
        }
        // Build
        else if (localStorage['question3'] === 'bulky'){
            result += " and a bulky build.";
        }
        else if (localStorage['question3'] === 'skinny'){
            result += " and a skinny build. ";
        }
        // Height
        else if (localStorage['question3'] === 'tall'){
            result += " and a tall figure. ";
        }
        else if (localStorage['question3'] === 'short'){
            result += " and a short figure. ";
        }
        // Eye color
        else if (localStorage['question3'] === 'brown'){
            result += " and brown eyes. ";
        }
        else if (localStorage['question3'] === 'blue'){
            result += " and blue eyes. ";
        }
    }
    // Returns result output (sentence)
    return result;
}

// Used to proceed to the next question
function next(questionNum){
    // Stores the value of question1 into answers object
    localStorage['question1'] = document.getElementById('question1').value;
    // Grabs <div> id = nextQuestions so it can be appended later
    const questions = document.getElementById('nextQuestions');
    // Creating empty variable named nextDrop
    let nextDrop;
    // Checking question1
    if (questionNum === 1) {
        const getValue = document.getElementById('question1').value;
        if (getValue === 'men') {
            nextDrop = createForm('question2', 'Question 2 - Facial Hair? ', {yes: 'Yes', no: 'No'}, 2);
        }
        else if (getValue === 'women') {
            nextDrop = createForm('question2', 'Question 2 - Blond or Brunette? ', {blonde: 'Blonde', brunette: 'Brunette'}, 2)
        }
    }
    // Checking question2
    else if (questionNum === 2) {
        const getValue = document.getElementById('question2').value;
        if (getValue === 'yes') {
            nextDrop = createForm('question3', 'Question 3 - Complexion? ', {light: 'Light', dark: 'Dark'}, 3);
        }
        else if (getValue === 'no') {
            nextDrop = createForm('question3', 'Question 3 - Build? ', {bulky: 'Bulky', skinny: 'Skinny'}, 3);
        }
        else if (getValue === 'blonde'){
            nextDrop = createForm('question3', 'Question 3 - Height? ', {tall: 'Tall', short: 'Short'}, 3);
        }
        else if (getValue === 'brunette'){
            nextDrop = createForm('question3', 'Question 3 - Eyes? ', {brown: 'Brown', blue: 'Blue'}, 3);
        }
    }
    // Appends nextDrop to <div> id = nextQuestions wrapper
    if (nextDrop){
        questions.appendChild(nextDrop);
    }
    // Checks if question is up to 3 (which is the max) and builds response and sets nextDrop
    else if (questionNum === 3) {
        const results = document.getElementById('results');
        const resultOutput = createResult(buildResult());
        results.appendChild(resultOutput);
    }
}

// Reset button
function resetForm(){
    const question1 = document.getElementById('question1');
    question1.value = 'default';

    const nextQuestions = document.getElementById('nextQuestions');
    while (nextQuestions.firstChild){
        nextQuestions.removeChild(nextQuestions.firstChild);
    }
    answers = {};
    console.log("RESET")
}

// Validate user info
function validate(event){
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    var emailPattern = /\S+@\S+\.\S+/;
    const age = document.getElementById('age').value;
    const message = document.getElementById('validationMessage');
    let result = "";

    if (name != ""){
        if (emailPattern.test(email) != false){
            if (age >= 18) {
                result += "Thank you for participating. Your Form has been submitted!"
                message.textContent = result;
                return true;
            }
        }
    }

    if (name == ""){
        result += "Please input your name. ";
    }
    if (emailPattern.test(email) == false){
        result += "Please input a correct email address. ";
    }
    if (age < 18){
        result += "You must be 18 years or older to continue. ";
    }
    message.textContent = result;
    return false;
}


