function round(num) {
    "use strict";
    var result = num.toString().match(/^\d+(?:\.\d{0,2})?/);
    return result;
}

function calculate_click() {
    "use strict";
    var initialLoanAmount = parseFloat(document.getElementById("txtInitialLoanAmount").value),
        numberOfPeriods = parseFloat(document.getElementById("txtNumberOfPeriods").value) * 12,
        interestRate = parseFloat(document.getElementById("txtInterestRate").value) / 100 / 12,

        numerator = interestRate,
        demoninator = Math.pow(1 + interestRate, numberOfPeriods) - 1,
        payment = (interestRate + (numerator / demoninator)) * initialLoanAmount,

        table = document.getElementById("tblOutput"),
        remainingLoanAmount = initialLoanAmount,
        period = 0,
        tr,
        td,
        interest,
        principal,
        temp;
    for (period = 1; period <= numberOfPeriods; period += 1) {
        tr = document.createElement('tr');
        interest = remainingLoanAmount * interestRate;
        principal = payment - interest;

        td = document.createElement('td');
        temp = round(remainingLoanAmount, 2);
        td.appendChild(document.createTextNode(round(remainingLoanAmount)));
        tr.appendChild(td);

        td = document.createElement('td');
        td.appendChild(document.createTextNode(round(payment)));
        tr.appendChild(td);

        td = document.createElement('td');
        td.appendChild(document.createTextNode(round(interest)));
        tr.appendChild(td);

        td = document.createElement('td');
        td.appendChild(document.createTextNode(round(principal)));
        tr.appendChild(td);

        td = document.createElement('td');
        remainingLoanAmount -= principal;
        td.appendChild(document.createTextNode(round(remainingLoanAmount)));
        tr.appendChild(td);

        td = document.createElement('td');
        td.appendChild(document.createTextNode(period));
        tr.appendChild(td);

        table.appendChild(tr);
    }
}