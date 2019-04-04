let input = document.querySelector('.input');
let submit = document.querySelector('.submit');
let output = document.querySelector('.output');


submit.addEventListener('click', function() {
    let string = input.value;
    vowelCount(string);
});

function vowelCount(str) {
    let count = 0;
    let vowels = 'aeiou';

    for (var i = 0; i < str.length; i++) {
        if(vowels.indexOf(str[i]) > -1) {
            count++;
        }
    }
    if (count == 0) {
        output.innerHTML = 'No vowels found';
    } else if (count == 1) {
        output.innerHTML = count + ' vowel found';
    } else {
        output.innerHTML = count + ' vowels found';
    }
}

