// Object that stores user's answers
const answers = {};

// Used to create form for each prompts
function createForm(id, text, options, nextQNum){
    const wrap = document.createElement('div');
    const label = document.createElement('label');
    label.setAttribute('for', id);
    label.innerText = text;
    const select = document.createElement('select');
    select.setAttribute('id',id);
    select.setAttribute('name',id);
    select.addEventListener('change', function(){
        answers[id] = select.value;
        next(nextQNum)
    });
    const onStart = document.createElement('option');
    onStart.value = '';
    onStart.innerText = 'Select an answer below...'
    select.appendChild(onStart);
    for (const value in options){
        const option = document.createElement('option');
        option.value = value;
        option.innerText = options[value];
        select.appendChild(option);
    }
    wrap.appendChild(label);
    wrap.appendChild(select);
    return wrap;
}

// Used to create result sentence
function createResult(text){
    const wrap = document.createElement('div');
    const para = document.createElement('p');
    para.textContent = text;
    wrap.appendChild(para);
    return wrap
}

// Function to build sentence
function buildResult(){
    let result = "You are looking for a ";

    if (answers['question1'] === 'men') {
        result += "man";
    }
    else if (answers['question1'] === 'women') {
        result += "women";
    }

    if (answers['question2']) {
        if (answers['question2'] === 'yes'){
            result += " with facial hair";
        }
        else if (answers['question2'] === 'no'){
            result += " without facial hair";
        }
        else if (answers['question2'] === 'blonde'){
            result += " with blonde hair";
        }
        else if (answers['question2'] === 'brunette'){
            result += " with brunette hair";
        }
    }

    if (answers['question3']){
        // Men
        if (answers['question3'] === 'light'){
            result += " and light complextion.";
        }
        else if (answers['question3'] === 'dark'){
            result += " and dark complextion.";
        }
        else if (answers['question3'] === 'bulky'){
            result += " and a bulky build.";
        }
        else if (answers['question3'] === 'skinny'){
            result += " and a skinny build. ";
        }
        // Women
        else if (answers['question3'] === 'tall'){
            result += " and a tall figure. ";
        }
        else if (answers['question3'] === 'short'){
            result += " and a short figure. ";
        }
        else if (answers['question3'] === 'brown'){
            result += " and brown eyes. ";
        }
        else if (answers['question3'] === 'blue'){
            result += " and blue eyes. ";
        }
    }
    console.log(result);
}

// Used to proceed to the next question
function next(questionNum){
    // Stores the value of question1 into answers object
    answers['question1'] = document.getElementById('question1').value;

    const questions = document.getElementById('nextQuestions');
    let nextDrop;
    if (questionNum === 1) {
        const getValue = document.getElementById('question1').value;
        if (getValue === 'men') {
            nextDrop = createForm('question2', 'Question 2 - Facial Hair? ', {yes: 'Yes', no: 'No'}, 2);
        }
        else if (getValue === 'women') {
            nextDrop = createForm('question2', 'Question 2 - Blond or Brunette? ', {blonde: 'Blonde', brunette: 'Brunette'}, 2)
        }
    }
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
    else if (questionNum === 3) {
        result = buildResult();
        nextDrop = createResult('Results', result)
    }

    if (nextDrop){
        questions.appendChild(nextDrop);
    }
}

// Restart button
function restartButton(){
    button
}


