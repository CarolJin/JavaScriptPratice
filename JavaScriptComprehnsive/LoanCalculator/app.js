// Add event listener to calculate bases on the inputs when clicking 'Calculate button'
document.getElementById('calculateBtn').addEventListener('click', calculate, true);

function calculate() {
    //Initialize the input & output elements
    let amount = document.getElementById('amount');
    let apr = document.getElementById('apr');
    let years = document.getElementById('years');
    let zipcode = document.getElementById('zipcode');
    let payment = document.getElementById('payment');
    let total = document.getElementById('total');
    let totalinterest = document.getElementById('totalinterest');


    if(!amount.value){
        document.querySelector('#AmtMessage').innerHTML='Amount cannot be empty!';
    } else if(isNaN(Number(amount.value))){
        document.querySelector('#AmtMessage').innerHTML='Invalid amount.';
        amount.value='';
    } else {
        document.getElementById('AmtMessage').innerHTML='';
    }
    if(apr.value===''){
        document.getElementById('InterestMessage').innerHTML='Interest rate cannot be empty!';
    } else if(isNaN(Number(apr.value))){
        document.getElementById('InterestMessage').innerHTML='Invalid interest rate.';
        apr.value='';
    } else {
        document.getElementById('InterestMessage').innerHTML='';
    }
    if(years.value===''){
        document.getElementById('YearMessage').innerHTML='Year cannot be empty!';
    } else if(isNaN(Number(years.value))){
        document.getElementById('YearMessage').innerHTML='Invalid year.';
        years.value='';
    } else {
        document.getElementById('YearMessage').innerHTML='';
    }

// Convert the user's inputs
    let principal = parseFloat(amount.value);
    let interest = parseFloat(apr.value) / 100 / 12;
    let payments = parseFloat(years.value) * 12;

// compute the monthly payment figure
    let x = Math.pow(1 + interest, payments);
    let monthly = (principal*x*interest)/(x-1);

// If the user's inputs are good, calculate & display outputs
    if (isFinite(monthly)){
        payment.innerHTML = monthly.toFixed(2);
        total.innerHTML = (monthly * payments).toFixed(2);
        totalinterest.innerHTML = ((monthly*payments)-principal).toFixed(2);
// Save the user's input so we can restore it the next time they visit
        save(amount.value, apr.value, years.value, zipcode.value);
// Get lenders with the matching zipcode
        getLenders(zipcode.value);
// Draw the chart
        chart(principal, interest, monthly, payments);
    } else {
        //clears the chart & outputs if no inputs
        payment.innerHTML = '';
        total.innerHTML = '';
        totalinterest.innerHTML = '';
        chart();
    }
}
// Save the user's input as properties of the localStorage objects.
function save(amount, apr, years, zipcode) {
    if (window.localStorage) {
        localStorage.loan_amount = amount;
        localStorage.loan_apr = apr;
        localStorage.loan_years = years;
        localStorage.loan_zipcode = zipcode;
    }
}

/* Pass the user's input to a server-side script which can (in theory) return
 a list of links to local lenders from the json. */
function getRequest() {
    let request;
    if(window.XMLHttpRequest){
        request  = new XMLHttpRequest();
    }else{
        request = new ActiveXObject();
    }
    return request;
}
function getLenders(zip) {
    let zipValue = zip.toString();

    let xhr = getRequest();
    xhr.open('GET', 'localLenders.json');
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            let response = xhr.responseText;
            let lenders = JSON.parse(response);
            let output = '<ul>';
            let counter =0;
            for(let key in lenders){
                if(lenders[key].zipcode===zipValue) {
                    output += `<li>
                        <h2>${lenders[key].name}</h2>
                        <p><h3>Phone Number: ${lenders[key].phone}</h3></p>
                        <p><h3>Average Rates: ${lenders[key].rates}</h3></p>
                        <p><h3>Short description: </h3></p>
                        <textarea rows="6" cols="70">${lenders[key].bio}</textarea>
                        </li>`;
                    counter++;
                }
            }
            if(counter===0){
                output += '<p>Sorry, there is no matched lenders found!</p>' //if not matching zipcode & lender found, show this message.
            }
            output+='</ul>';
            document.querySelector('#lenders').innerHTML=output;
        }
    };
    xhr.send();
}

// Draw chart with monthly loan balance, interest and equity in an HTML <canvas> element.
function chart(principal, interest, monthly, payments) {
    let graph = document.getElementById('graph');
    graph.width = graph.width; // Magic to clear and reset the canvas element
    if (arguments.length === 0 || !graph.getContext)
        return;
    let chart = graph.getContext("2d");

    // Payments are a straight line from (0,0) to (payments, monthly*payments)
    let width = graph.width, height = graph.height;
    function paymentToX(n) { return n * width/payments; }
    function amountToY(a) { return height-(a * height/(monthly*payments*1.05));}
    chart.moveTo(paymentToX(0), amountToY(0));
    chart.strokeStyle = "red";
    chart.lineTo(paymentToX(payments),
        amountToY(monthly*payments));
    chart.lineWidth = 2;
    chart.stroke();
    chart.fillStyle = "red";
    chart.font = "bold 12px sans-serif";
    chart.fillText("Total Interest Payments", 20,20);

    //Draw the Equity line
    let equity = 0;
    chart.beginPath();
    chart.moveTo(paymentToX(0), amountToY(0));
    chart.strokeStyle = "green";
    for(let p = 1; p <= payments; p++) {
        let thisMonthsInterest = (principal-equity)*interest;
        equity += (monthly - thisMonthsInterest);
        chart.lineTo(paymentToX(p),amountToY(equity));
    }
    chart.lineWidth = 2;
    chart.stroke();
    chart.fillStyle = "green";
    chart.fillText("Total Equity", 20,35);

    // Draw loan balance line as blue
    let bal = principal;
    chart.beginPath();
    chart.moveTo(paymentToX(0),amountToY(bal));
    chart.strokeStyle = "blue";
    for(let p = 1; p <= payments; p++) {
        let thisMonthsInterest = bal*interest;
        bal -= (monthly - thisMonthsInterest);
        chart.lineTo(paymentToX(p),amountToY(bal));
    }
    chart.lineWidth = 2;
    chart.stroke();
    chart.fillStyle = "blue";
    chart.fillText("Loan Balance", 20,50);

    // Now make yearly tick marks & year numbers on X axis
    chart.textAlign="center";
    let y = amountToY(0);
    for(let year=1; year*12 <= payments; year++) {
        let x = paymentToX(year*12);
        chart.fillRect(x-0.5,y-3,1,3);
        if (year === 1) chart.fillText("Year", x, y-5);
        if (year % 5 === 0 && year*12 !== payments)
            chart.fillText(String(year), x, y-5);
    }

    // Mark payment amounts along the right edge
    chart.textAlign = "right";
    chart.textBaseline = "middle";
    let ticks = [monthly*payments, principal];
    let rightEdge = paymentToX(payments);
    for(let i = 0; i < ticks.length; i++) {
        let y = amountToY(ticks[i]);

        chart.fillRect(rightEdge-3, y-0.5, 3,1); // Draw the tick mark
        chart.fillText(String(ticks[i].toFixed(0)),
            rightEdge-5, y);
    }
}