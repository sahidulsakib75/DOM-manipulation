// Function for Noakhali
document.getElementById('donateBtnNoakhali').addEventListener('click', function (event) {
  event.preventDefault();

  // donate amount
  const donateMoneyAmount = getInputFieldValueById('inputDonationNoakhali');

  // default balance amount
  const balanceAmount = getTotalBalanceById('totalBalanceNoakhali')

  // remaining amount
  const remainingAmount = getRemainingBalanceById('remainingBalance');

  const currentTime = new Date().toString();

  const modalCheckbox = document.getElementById("my-modal");

  // validation for number input
  if (donateMoneyAmount <= 0 || isNaN(donateMoneyAmount)) {
    alert("Please Enter a Valid Amount to Donate.");
    document.getElementById('inputDonationNoakhali').value = "";
    modalCheckbox.checked = false;
    return;
  }

  // validation for if input is less than remaining amount
  else if (remainingAmount <= 0 || remainingAmount < donateMoneyAmount) {
    alert("You don't have enough money to donate.")
    document.getElementById('inputDonationNoakhali').value = "";
    modalCheckbox.checked = false;
    return;
  }

  else {

    // total balance updated
    const balanceUpdated = balanceAmount + donateMoneyAmount;
    document.getElementById('totalBalanceNoakhali').innerText = balanceUpdated;

    // Remaining Balance Updated
    const remainingBalanceUpdated = remainingAmount - donateMoneyAmount;

    document.getElementById('remainingBalance').innerText = remainingBalanceUpdated;

    // left the input field blank
    document.getElementById('inputDonationNoakhali').value = "";

    // add to history
    const noaDiv = document.createElement('div');
    noaDiv.classList.add('p-6', 'flex', 'flex-col', 'gap-6', 'border-2', 'border-[#B4F461]', 'rounded-2xl');
    noaDiv.innerHTML = `
    <h3 class="text-lg font-bold">${donateMoneyAmount} Taka is Donated for flood in Noakhali, Bangladesh </h3>
    <p>Date: ${currentTime} </p>`

    // should be a common function
    document.getElementById('historySection').prepend(noaDiv);

    // modal
    modalCheckbox.checked = true;
  }

})


// Function for Feni

document.getElementById('donateBtnFeni').addEventListener('click', function (event) {
  event.preventDefault();

  // donate amount
  const donateMoneyAmount = getInputFieldValueById('inputDonationFeni');

  // default balance amount
  const balanceAmount = getTotalBalanceById('totalBalanceFeni')

  // remaining amount
  const remainingAmount = getRemainingBalanceById('remainingBalance');

  const currentTime = new Date().toString();

  const modalCheckbox = document.getElementById("my-modal");

  // validation for number input
  if (donateMoneyAmount <= 0 || isNaN(donateMoneyAmount)) {
    alert("Please Enter a Valid Amount to Donate.");
    document.getElementById('inputDonationFeni').value = "";
    modalCheckbox.checked = false;
    return;
  }

  // validation for if input is less than remaining amount
  else if (remainingAmount <= 0 || remainingAmount < donateMoneyAmount) {
    alert("You don't have enough money to donate.")
    document.getElementById('inputDonationFeni').value = "";
    modalCheckbox.checked = false;
    return;
  }

  else {

    // total balance updated
    const balanceUpdated = balanceAmount + donateMoneyAmount;
    document.getElementById('totalBalanceFeni').innerText = balanceUpdated;


    // Remaining Balance Updated
    const remainingBalanceUpdated = remainingAmount - donateMoneyAmount;

    document.getElementById('remainingBalance').innerText = remainingBalanceUpdated;

    // left the input field blank
    document.getElementById('inputDonationFeni').value = "";


    // add to history
    const feniDiv = document.createElement('div');
    feniDiv.classList.add('p-6', 'flex', 'flex-col', 'gap-6', 'border-2', 'border-[#B4F461]', 'rounded-2xl');
    feniDiv.innerHTML = `
    <h3 class="text-lg font-bold">${donateMoneyAmount} Taka is Donated for Flood Relief in Feni,Bangladesh. </h3>
    <p>Date: ${currentTime} </p>`

    // should be a common function
    document.getElementById('historySection').prepend(feniDiv);

    modalCheckbox.checked = true;
  }

})


// Function for Quota Movement

document.getElementById('donateBtnQm').addEventListener('click', function (event) {
  event.preventDefault();

  // donate amount
  const donateMoneyAmount = getInputFieldValueById('inputDonationQm');

  // default balance amount
  const balanceAmount = getTotalBalanceById('totalBalanceQm')

  // remaining amount
  const remainingAmount = getRemainingBalanceById('remainingBalance');

  const currentTime = new Date().toString();

  const modalCheckbox = document.getElementById("my-modal");

  // validation for number input
  if (donateMoneyAmount <= 0 || isNaN(donateMoneyAmount)) {
    alert("Please Enter a Valid Amount to Donate.");
    document.getElementById('inputDonationQm').value = "";
    modalCheckbox.checked = false;
    return;
  }

  // validation for if input is less than remaining amount
  else if (remainingAmount <= 0 || remainingAmount < donateMoneyAmount) {
    alert("You don't have enough money to donate.")
    document.getElementById('inputDonationQm').value = "";
    modalCheckbox.checked = false;
    return;
  }

  else {

    // total balance updated
    const balanceUpdated = balanceAmount + donateMoneyAmount;
    document.getElementById('totalBalanceQm').innerText = balanceUpdated;

    // Remaining Balance Updated
    const remainingBalanceUpdated = remainingAmount - donateMoneyAmount;

    document.getElementById('remainingBalance').innerText = remainingBalanceUpdated;

    // left the input field blank
    document.getElementById('inputDonationQm').value = "";


    // add to history
    const qmDiv = document.createElement('div');
    qmDiv.classList.add('p-6', 'flex', 'flex-col', 'gap-6', 'border-2', 'border-[#B4F461]', 'rounded-2xl');
    qmDiv.innerHTML = `
    <h3 class="text-lg font-bold">${donateMoneyAmount} Taka is Donated for Injured in the Quota Movement.</h3>
    <p>Date: ${currentTime} </p>`

    // should be a common function
    document.getElementById('historySection').prepend(qmDiv);

    modalCheckbox.checked = true;

  }

})



// get input field value function
function getInputFieldValueById(id) {
  const donateMoney = document.getElementById(id).value;
  const donateMoneyAmount = parseFloat(donateMoney);
  return donateMoneyAmount;
}

// get total balance function
function getTotalBalanceById(id) {
  const balance = document.getElementById(id).innerText;
  const balanceAmount = parseFloat(balance);
  return balanceAmount;
}
// get remaining balance amount function 
function getRemainingBalanceById(id) {
  const remainingBalance = document.getElementById(id).innerText;
  const remainingAmount = parseFloat(remainingBalance);
  return remainingAmount;
}
