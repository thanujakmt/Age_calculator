
function getData(){
    var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    
    var dateInput = document.getElementById('dateinput');
    var monthInput = document.getElementById('monthinput');
    var yearInput = document.getElementById('yearinput');

    var dateValue = parseInt(dateInput.value, 10);
    var monthValue = parseInt(monthInput.value, 10);
    var yearValue = parseInt(yearInput.value, 10);

    if (isNaN(dateValue) ) {
        dateInput.style.borderColor = 'red';
        document.getElementById('daylabel').style.color = 'red';
        document.getElementById('dayreq').innerHTML = 'This field is required';
        document.getElementById('dayreq').style.color = 'red';
    }

    if (isNaN(monthValue)) {
        monthInput.style.borderColor = 'red';
        document.getElementById('monthlabel').style.color = 'red';
        document.getElementById('monthreq').innerHTML = 'This field is required';
        document.getElementById('monthreq').style.color = 'red';
    }

    if (isNaN(yearValue)) {
        yearInput.style.borderColor = 'red';
        document.getElementById('yearlabel').style.color = 'red';
        document.getElementById('yearreq').innerHTML = 'This field is required';
        document.getElementById('yearreq').style.color = 'red';
    }
    if (dateValue <= 0 || dateValue > daysInMonth[monthValue - 1]) {
        dateInput.style.borderColor = 'red';
        document.getElementById('daylabel').style.color = 'red';
        document.getElementById('dayreq').innerHTML = 'Must be a valid day';
        document.getElementById('dayreq').style.color = 'red';
    }
    if (monthValue <= 0 || monthValue > 12) {
        monthInput.style.borderColor = 'red';
        document.getElementById('monthlabel').style.color = 'red';
        document.getElementById('monthreq').innerHTML = 'Must be a valid month';
        document.getElementById('monthreq').style.color = 'red';
    }
    if (yearValue <= 0) {
        yearInput.style.borderColor = 'red';
        document.getElementById('yearlabel').style.color = 'red';
        document.getElementById('yearreq').innerHTML = 'Must be in the past';
        document.getElementById('yearreq').style.color = 'red';
    }
    

    dateInput.addEventListener('input', () =>{
        dateInput.style.borderColor = '';
        document.getElementById('daylabel').style.color = '';
        document.getElementById('dayreq').innerHTML = '';
        document.getElementById('dayreq').style.color = '';
    })

    monthInput.addEventListener('input', () => {
        monthInput.style.borderColor = '';
        document.getElementById('monthlabel').style.color = '';
        document.getElementById('monthreq').innerHTML = '';
        document.getElementById('monthreq').style.color = '';
    })

    yearInput.addEventListener('input', () => {
        yearInput.style.borderColor = '';
        document.getElementById('yearlabel').style.color = '';
        document.getElementById('yearreq').innerHTML = '';
        document.getElementById('yearreq').style.color = '';
    })

    var birthDate = new Date(yearValue, monthValue - 1, dateValue);
    var currentDate = new Date();

    if (birthDate > currentDate) {
        yearInput.style.borderColor = 'red';
        document.getElementById('yearlabel').style.color = 'red';
        document.getElementById('yearreq').innerHTML = 'Must be in the past';
        document.getElementById('yearreq').style.color = 'red';
      }
    var timeDiff = currentDate - birthDate;

    var years = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365.25));
    var months = Math.floor((timeDiff % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44));
    var days = Math.floor((timeDiff % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));

    document.getElementById('yearspan').innerHTML = years;
    document.getElementById('monthspan').innerHTML = months;
    document.getElementById('dayspan').innerHTML = days;

}   