var email = document.querySelector('#email');
var confirm_email = document.querySelector('#confirm-email');
var error_label = document.querySelector('#submit-label');

var valid_email = false

function check_email() {
    if (email.value === confirm_email.value) {
        error_label.textContent = ' ';
        valid_email = true;
    } else {
        error_label.textContent = 'Please Ensure Emails Match';
        valid_email = false;
    }
}

function submit_question() {
    if (valid_email) {
        return;
    } else {
        error_label.textContent = 'Cannot Submit Question. Invalid Email';
    }
}