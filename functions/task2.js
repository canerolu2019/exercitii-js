// Question 

function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      return confirm('Did parents allow you?');
    }} 

// Rewrite it, to perform the same, but without if, in a single line.

//Make two variants of checkAge:

//Using a question mark operator ?
//Using OR || 

// The Answer

// using '?' operator

function checkAge(age) {
    return(age > 18) ?true :confirm('Did parents allow you?')
}

// using '||' operator

function checkAge(age) {
    return(age > 18) || confirm('Did parents allow you?')
}