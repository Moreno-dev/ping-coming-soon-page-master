
function ValidateEmail(inputText) {
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (inputText.match(mailformat)) {
        return true
    }
    else {
        return false
    }
}

function button_press() {
    const email = document.getElementById('email')
    const error_message = document.getElementById('error-message')
    if (email.value === '') {
        error_message.innerHTML = 'Whoops! It looks like you forgot to add your email'
        display_error(email, error_message)
    } else if (!ValidateEmail(email.value)) {
        error_message.innerHTML = 'Please provide a valid email address'
        display_error(email, error_message)
    } else {
        clear_form(email, error_message)
        alert('Thank you for subscribing! You will be notified soon.')
    }
}

function display_error(email, error_message) {
    error_message.style.display = 'unset'
    email.value = ''
    email.style.border = '1px solid red'
}

function clear_form(email, error_message) {
    error_message.style.display = 'none'
    email.value = ''
    email.style.border = '1px solid var(--Pale-Blue)'
}