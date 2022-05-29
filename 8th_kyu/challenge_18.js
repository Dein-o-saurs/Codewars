// Write a function to convert a name into initials. 
// This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.


function abbrevName(name){
    words = name.toUpperCase().split(' ');
    return `${words[0][0]}.${words[1][0]}`
}