// document.getElementById('deposit-btn').addEventListener('click', function () {
//     const depositField = document.getElementById('deposit-amount');
//     const depositFieldText = depositField.value;
//     const newDepositdNumber = parseFloat(depositFieldText);

//     const previousDepositString = document.getElementById('deposit-total');
//     const preciousDeposit = previousDepositString.innerText;
//     const previousDepositNumber = parseFloat(preciousDeposit);

//     const currentDeposit = previousDepositNumber + newDepositdNumber;

//     previousDepositNumber.innerText = currentDeposit;
//     depositField.value = '';

// })


// step 1 add eventhandler to the deposit button
document.getElementById('deposit-btn').addEventListener('click', function () {
    // step 2 get deposit input field
    const depositField = document.getElementById('deposit-amount');
    const newDepositAmountString = depositField.value;
    // step 3 string to number
    const newDpositAmount = parseFloat(newDepositAmountString);

    depositField.value = '';

    // step 4 get the previous diposit total
    const depositTotallElement = document.getElementById('deposit-total');
    const previousDepositTotallString = depositTotallElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotallString);

    // calculate total things
    // step 5 
    const newDepositTotal = previousDepositTotal + newDpositAmount;

    depositTotallElement.innerText = newDepositTotal;

    // step 6 add total balance

    const balanceTotalElemnt = document.getElementById('balance-total');
    const previousBalanaceTotalElementString = balanceTotalElemnt.innerText;
    const previousBalanceTotal = parseFloat(previousBalanaceTotalElementString);

    // step 7 calculate the new balance and set it to the current balnace
    const newBalanceTotal = previousBalanceTotal + newDpositAmount;
    balanceTotalElemnt.innerText = newBalanceTotal;


})