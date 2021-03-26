function calculate(amount, interest, term) {
    if (!amount || !interest || !term) return { balance: 0, pmt: 0 };

    const r = (interest * 0.01) / 12;
    const n = term * 12;
    const p = amount;

    const balance = ((r * p * n) / (1 - Math.pow(1 + r, -n))).toFixed(2);
    const pmt = (balance / n).toFixed(2);

    return {
        balance,
        pmt
    };
};

function handle_click() {
    var amount = document.getElementById('amount').value;
    console.log(amount);
    var interest = document.getElementById('interest').value;
    console.log(interest);
    var term = document.getElementById('term').value;


    var answer_object = calculate(amount, interest, term);
    var balance = answer_object.balance;
    var pmt = answer_object.pmt;
    renderBalance.innerHTML = balance;
    renderPayment.innerHTML = pmt;
};