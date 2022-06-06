// validation script here
// var reg = /[a-z]/ig; // The i flag makes the regex case insensitive
// var reg2 = new RegExp([a-z],"ig"); Alternate wway to define regex
const inputs = document.querySelectorAll('input'); // CSS Selector input

const patterns = {
    username: /^[a-z\d]{5,12}$/i, // Alphanumeric between 5-12 digits
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/, //email Regex
    password: /^[\w@-]{8,20}$/, //Any metacharacter, @ or hyphen
    telephone: /^\d{11}$/, //Accepts 11 digits, nothing else more at beginning or end
    slug: /^[a-z\d-]{8,20}$/
};

// Validation function
function validate(field, regex) {
    // console.log(regex.test(field.value)); Checks if the regex is valid to a defined rule
    if(regex.test(field.value)) {
        field.className = 'valid';
    } else {
        field.className = 'invalid';
    }
}

//Event listener for each form field
inputs.forEach((input) => { 
    input.addEventListener('keyup', (e) => {
        // console.log(e.target.attributes.name.value);
        validate(e.target, patterns[e.target.attributes.name.value])
    });
});

