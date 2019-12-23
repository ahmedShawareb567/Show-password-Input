

let inputPass = document.getElementById('inputPass'),
    authEl = document.getElementById('authEl');

    //PASSWORD AUTHANTICATION
    authEl.addEventListener('click', () => {
        if (inputPass.getAttribute('type') == 'password') {
            inputPass.setAttribute('type', 'text');
            authEl.classList.remove('fa-vision');
            authEl.classList.add('fa-low-vision');
        } else {
            inputPass.setAttribute('type', 'password');
            authEl.classList.remove('fa-low-vision');
            authEl.classList.add('fa-vision');
        }
    });

    console.log(inputPass.length);