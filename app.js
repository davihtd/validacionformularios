function emailValidation() {
  const emailInput = document.getElementById('email');
  const emailConfirmInput = document.getElementById('email_confirm');
  const emailError = document.getElementById('email_error');

  emailConfirmInput.addEventListener('input', () => {
    if (emailInput.value !== emailConfirmInput.value) {
      emailError.textContent = 'Correo electrónico no coincide.';
      emailError.classList.add('alert');
      emailConfirmInput.classList.add('error-background');
    } else {
      emailError.textContent = '';
      emailError.classList.remove('alert');
      emailConfirmInput.classList.remove('error-background');
    }
  });

  const form = document.getElementById('form');
  form.addEventListener('submit', e => {
    e.preventDefault();
    if (emailInput.value !== emailConfirmInput.value) {
      emailError.textContent = 'Correo electrónico no coincide. Envío bloqueado.';
      emailError.classList.add('alert');
      emailConfirmInput.classList.add('error-background');
    } else {
      form.submit();
    }
  });
}

window.onload = emailValidation;
