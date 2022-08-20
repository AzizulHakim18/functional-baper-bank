document.getElementById(' withdraw-btn').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-amount');
    const withdrawValue = withdrawField.value;
    const previousWithdraw = parseFloat(withdrawValue);

    withdrawField.value = '';
    const newWithdrawvalue = document.getElementById('withdraw-total');
    const newWithdrawString = newWithdrawvalue.innerText;
    const newWithdraw = parseFloat(newWithdrawString);

    const currentWithdraw = newWithdraw + previousWithdraw;

    newWithdrawvalue.innerText = currentWithdraw;



    // -----------------------------
    const balanceWithdrawField = document.getElementById('balance-total');
    const balanceWithdrawstring = balanceWithdrawField.innerText;
    const balancewithdrawNew = parseFloat(balanceWithdrawstring);

    const AfterWithdraw = balancewithdrawNew - previousWithdraw;

    balanceWithdrawField.innerText = AfterWithdraw;


})