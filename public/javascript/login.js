const loginForm = document.querySelector('#login-form')||"";

async function loginSubmit(event) {
    event.preventDefault();

    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (username && password) {
        const response = await fetch('api/users/login', {
            method: 'post',
            body: JSON.stringify({
                username,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        
      if (response.ok) {
        document.location.replace('/profile');
      }
      else {
          alert(response.statusText);
      }
    }
};

loginForm && loginForm.addEventListener('submit', loginSubmit);

console.log(loginForm);