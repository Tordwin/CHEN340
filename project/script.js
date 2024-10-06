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
// Used to proceed to the next question
function next(questionNum){
    const questions = document.getElementById('nextQuestions');
    let nextDrop;
    if (questionNum === 1){
        const getValue = document.getElementById('question1').value;
        if (getValue === 'Men') {
            nextDrop = createForm('question2', 'Question 2 - Facial Hair? ', {yes: 'Yes', no: 'No'}, 2);
        }
        else if (getValue === 'Women') {
            nextDrop = createForm('question2', 'Question 2 - Blond or Brunette? ', {blonde: 'Blonde', brunette: 'Brunette'}, 2)
        }
    }
    if (nextDrop){
        questions.appendChild(nextDrop);
    }
}

// Restart button
function restartButton(){
    button
}


