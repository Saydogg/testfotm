document.getElementById('card-number').addEventListener('input', function(e) {
  let cardNumber = e.target.value.replace(/\D/g, ''); // Удаляем все нецифровые символы
  if (cardNumber.length > 16) {
    cardNumber = cardNumber.slice(0, 16); // Обрезаем до 16 символов, если введено больше
  }
  const maskedValue = cardNumber.replace(/(.{4})/g, '$1 '); // Добавляем пробелы после каждых 4 символов
  
  const cardNumberDisplay = document.querySelector('.card-number');
  cardNumberDisplay.textContent = maskedValue.trim(); // Обновляем содержимое элемента .card-number, удаляя лишние пробелы
});


document.getElementById('expiration-date').addEventListener('input', function(e) {
  let date = e.target.value.replace(/\D/g, '');
  if (date.length > 4) {
    date = date.slice(0, 4);
  }
  if (date.length > 2) {
    date = date.substring(0, 2) + '/' + date.substring(2);
  }
  document.querySelector('.card-expiration-date').innerText = date || 'MM/YY';
});

document.getElementById('phone').addEventListener('input', function(e) {
  let phone = e.target.value.replace(/\D/g, '');
  if (phone.length > 9) {
    phone = phone.slice(0, 9);
  }
  if (phone.length > 0) {
    phone = '+998 ' + phone;
    phone = phone.replace(/\+998(\d{3})(\d{3})(\d{2})(\d{2})/, '+998 $1 $2 $3 $4');
  }
  document.querySelector('.card-phone').innerText = phone || '+998 ______ ____';
});

document.getElementById('card-number').addEventListener('focus', function() {
  document.querySelector('.card-number').classList.add('focus');
});

document.getElementById('card-number').addEventListener('blur', function() {
  document.querySelector('.card-number').classList.remove('focus');
});

document.getElementById('phone').addEventListener('focus', function() {
  document.querySelector('.card-phone').classList.add('focus');
});

document.getElementById('phone').addEventListener('blur', function() {
  document.querySelector('.card-phone').classList.remove('focus');
});

document.getElementById('expiration-date').addEventListener('focus', function() {
  document.querySelector('.card-expiration-date').classList.add('focus');
});

document.getElementById('expiration-date').addEventListener('blur', function() {
  document.querySelector('.card-expiration-date').classList.remove('focus');
});
