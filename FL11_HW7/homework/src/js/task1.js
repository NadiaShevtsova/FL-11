const six = 6, five = 5;
let mail = prompt('Enter your mail', ''), password, changePassword;
if (mail === '' || mail === '0') {
    alert('Canceled');
}
if (mail.length < six) {
    alert('I don\'t know any emails having name length less than 6 symbols');
}
if (mail === 'user@gmail.com' || mail === 'admin@gmail.com') {
    password = prompt('Enter your password', '');
    if (password === '' || password === '0') {
        alert('Canceled');
    } else {
        if (mail === 'user@gmail.com' && password ==='UserPass' ||
            mail === 'admin@gmail.com' && password ==='AdminPass') {
            alert('Correct');
            changePassword = confirm('Do you want to change your password?');
            if (changePassword === false) {
                alert('You have failed the change');
            } else {
                let checkForNewPassword = prompt('Enter your old password', '');
                if (checkForNewPassword === '' || checkForNewPassword === '0') {
                    alert('Canceled');
                } else {
                    if (mail === 'user@gmail.com' && password ==='UserPass' ||
                        mail === 'admin@gmail.com' && password ==='AdminPass') {
                        let newPassword = prompt('Enter your new password', '');
                        if (newPassword.length < five) {
                            alert('It’s too short password. Sorry.');
                        } else {
                            let repeatPassword = prompt('Enter your new password again');
                            if (newPassword === repeatPassword) {
                                alert('You have successfully changed your password.');
                            } else {
                                alert('You wrote the wrong password');
                            }
                        }
                    } else {
                        alert('Wrong password');
                    }
                }
            }
        } else {
            alert('Wrong password');
        }
    }
} else {
    alert('I don’t know you');
}



