// Script

// ^ - start
// (?=.*[a-z]) - lowercase
// (?=.*[A-Z]) - uppercase
// (?=.*[0-9]) - numeric
// (?=.*[!@#$%^&*]) - special
// (?=.{8,}) - length [8+]

// My function

function password_test() {
    const red = 0,
      yellow = 60,
      green = 120;
    var password = document.getElementById('password').value;
    var total = document.getElementById('total');
    var lowercase = document.getElementById('lowercase');
    var uppercase = document.getElementById('uppercase');
    var numeric = document.getElementById('numeric');
    var special = document.getElementById('special');
    var score_results = document.getElementById('score');
    var total_characters = password.length;
    var lowercase_characters = password.replace(/[^a-z]/g, "").length;
    var uppercase_characters = password.replace(/[^A-Z]/g, "").length;
    var numeric_characters = password.replace(/[^0-9]/g, "").length;
    var special_characters = password.replace(/[^!@#$%^&*]/g, "").length;
    var score = 0 + (total_characters * 4) - total_characters + ((total_characters - uppercase_characters) * 2) + ((total_characters - lowercase_characters) * 2) + (numeric_characters * 4) - (uppercase_characters * 2) + uppercase_characters - (lowercase_characters * 2) + lowercase_characters - (numeric_characters * 2) + numeric_characters;
    total.innerHTML = total_characters;
    lowercase.innerHTML = lowercase_characters;
    uppercase.innerHTML = uppercase_characters;
    numeric.innerHTML = numeric_characters;
    special.innerHTML = special_characters;
    if(score > 100){
        score = 100;
    };
    // Used other color algorithm
    function hsl_col_perc(percent, start, end) {
        var a = percent / 100,
            b = (end - start) * a,
                c = b + start;
        return 'hsl('+c+', 100%, 50%)';
    }
    score_results.innerHTML = score;
    var progressDiv = document.getElementById('progress');
    var progressContainerDiv = document.getElementById('progress-container');
    let colour = hsl_col_perc(score, red, green);
    progressDiv.style.backgroundColor = colour;
    progressContainerDiv.style.borderColor = colour;
    progressDiv.style.width = score+'%';
}