// const calculateBtn = document.querySelector('.calculate-btn');
// const amountInput = document.getElementById('amount-input');
// const termInput = document.getElementById('term-input');
// const interestInput = document.getElementById('interest-input');
// const typeInputs = document.querySelectorAll('input[name="mortgage-type"]');
// const monthlyResult = document.querySelector('.monthly-amount');
// const totalResult = document.querySelector('.total-amount');
// // const clearBtn = document.querySelector('.reset-buttton');
// calculateBtn.addEventListener('click', function(e) {
//   e.preventDefault();

//   // 2. هنجيب الأرقام (وعملنا حساب لو كتبت الفايدة بفاصلة أو نقطة)
//   let amount = parseFloat(amountInput.value.replace(/,/g, ''));
//   let term = parseFloat(termInput.value);
//   let interest = parseFloat(interestInput.value.replace(',', '.'));

//   // تأمين عشان لو دوست الزرار والمربعات فاضية الكود ميبوظش
//   if (isNaN(amount) || isNaN(term) || isNaN(interest)) {
//     console.log("تأكد من إدخال جميع الأرقام");
//     return; 
//   }

//   // 3. هنجيب نوع القرض
//   let mortgageType = "";
//   typeInputs.forEach(input => {
//     if (input.checked) {
//       mortgageType = input.value;
//     }
//   });

//   if (mortgageType === "") {
//     console.log("يرجى اختيار نوع القرض");
//     return;
//   }

//   // 4. معادلات الحساب
//   let totalMonths = term * 12;
//   let monthlyInterestRate = (interest / 100) / 12;
//   let monthlyPayment = 0;
//   let totalRepayment = 0;

//   if (mortgageType === 'Repayment') {
//     monthlyPayment = amount * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalMonths)) / (Math.pow(1 + monthlyInterestRate, totalMonths) - 1);
//     totalRepayment = monthlyPayment * totalMonths;
//   } else if (mortgageType === 'Interest Only') {
//     monthlyPayment = amount * monthlyInterestRate;
//     totalRepayment = (monthlyPayment * totalMonths) + amount;
//   }

//   // 5. عرض النتيجة في الكارت الأزرق بتنسيق الفلوس (جنيه إسترليني وفواصل الألوف)
//   const formatter = new Intl.NumberFormat('en-GB', {
//     style: 'currency',
//     currency: 'GBP'
//   });

//   monthlyResult.textContent = formatter.format(monthlyPayment);
//   totalResult.textContent = formatter.format(totalRepayment);
  
//   // طباعة للكونسول للتأكيد
//   console.log("تم الحساب بنجاح:", formatter.format(monthlyPayment));
// });
// // السطر ده هو اللي بياخد النتيجة النهائية ويرميها مكان الرقم الليموني
// monthlyResult.textContent = formatter.format(monthlyPayment);
// totalResult.textContent = formatter.format(totalRepayment);





const calculateBtn = document.querySelector('.calculate-btn');
const clearBtn = document.querySelector('.reset-button'); 
const amountInput = document.getElementById('amount-input');
const termInput = document.getElementById('term-input');
const interestInput = document.getElementById('interest-input');
const typeInputs = document.querySelectorAll('input[name="mortgage-type"]');
const monthlyResult = document.querySelector('.monthly-amount');
const totalResult = document.querySelector('.total-amount');

calculateBtn.addEventListener('click', function(e) {
  e.preventDefault();

  let amount = parseFloat(amountInput.value.replace(/,/g, ''));
  let term = parseFloat(termInput.value);
  let interest = parseFloat(interestInput.value.replace(',', '.'));

  if (isNaN(amount) || isNaN(term) || isNaN(interest)) {
    return; 
  }

  let mortgageType = "";
  typeInputs.forEach(input => {
    if (input.checked) {
      mortgageType = input.value;
    }
  });

  if (mortgageType === "") return;

  let totalMonths = term * 12;
  let monthlyInterestRate = (interest / 100) / 12;
  let monthlyPayment = 0;
  let totalRepayment = 0;

  if (mortgageType === 'Repayment') {
    monthlyPayment = amount * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalMonths)) / (Math.pow(1 + monthlyInterestRate, totalMonths) - 1);
    totalRepayment = monthlyPayment * totalMonths;
  } else if (mortgageType === 'Interest Only') {
    monthlyPayment = amount * monthlyInterestRate;
    totalRepayment = (monthlyPayment * totalMonths) + amount;
  }

  const formatter = new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP'
  });

  monthlyResult.textContent = formatter.format(monthlyPayment);
  totalResult.textContent = formatter.format(totalRepayment);
});

clearBtn.addEventListener('click', function(e) {
  e.preventDefault(); 

  amountInput.value = '';
  termInput.value = '';
  interestInput.value = '';

  typeInputs.forEach(input => {
    input.checked = false;
  });

  monthlyResult.textContent = '£0.00';
  totalResult.textContent = '£0.00';
});










