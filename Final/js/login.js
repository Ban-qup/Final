let isq = true;
let currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab


function showTab(n) {
    // This function will display the specified tab of the form ...
    let x = document.getElementsByClassName("tab");
    x[n].style.display = "block";
    // ... and fix the Previous/Next buttons:
    if (n === 0) {
        document.getElementById("prevBtn").style.display = "none";
    } else {
        document.getElementById("prevBtn").style.display = "inline";
    }
    if (n === (x.length - 1)) {
        document.getElementById("nextBtn").innerHTML = "Submit";
    } else {
        document.getElementById("nextBtn").innerHTML = "Next";
    }
    // ... and run a function that displays the correct step indicator:
    fixStepIndicator(n)
}

function nextPrev(n) {
    // This function will figure out which tab to display
    let x = document.getElementsByClassName("tab");
    // Exit the function if any field in the current tab is invalid:
    if (n === 1 && !validateForm() && isq) return false;
    // Hide the current tab:
    x[currentTab].style.display = "none";
    // Increase or decrease the current tab by 1:
    currentTab = currentTab + n;
    // if you have reached the end of the form... :
    if (currentTab >= x.length) {
        //...the form gets submitted:
        //document.getElementById("regForm").submit();
        window.location.href = "../html/index.html";
        return false;
    }
    // Otherwise, display the correct tab:
    showTab(currentTab);
}

function validateForm() {
    // This function deals with validation of the form fields
    let x, y, i, j, valid = true;
    x = document.getElementsByClassName("tab");
    y = x[currentTab].getElementsByTagName("input");
    // A loop that checks every input field in the current tab:
    for (i = 0; i < y.length; i++) {
        // If a field is empty...
        if (y[i].value === "") {
            // add an "invalid" class to the field:
            y[i].className += " invalid";
            // and set the current valid status to false:
            valid = false;
        }
        if(y[i].id === 'yearInput' || y[i].id === 'monthInput' || y[i].id === 'dayInput'){
            if (y[i].id === 'yearInput') {
                if(y[i].value.length !== 4 || y[i].value < 1900 || y[i].value > 2006){
                    y[i].className += " invalid";
                    // and set the current valid status to false:
                    valid = false;
                }
            }else if (y[i].id === 'monthInput') {
                if(y[i].value.length !== 2 || y[i].value < 1 || y[i].value > 12){
                    y[i].className += " invalid";
                    // and set the current valid status to false:
                    valid = false;
                }
            } else {
                if (y[i].id === 'dayInput') {
                    if(y[i].value.length !== 2 || y[i].value < 1 || y[i].value > 31){
                        y[i].className += " invalid";
                        // and set the current valid status to false:
                        valid = false;
                    }
                }
            }
        }
        if(y[i].type === 'email'){
            let count = 0;
            for(j = 0; j < y[i].value.length; j++){
                if (y[i].value[j] === '@'){
                    count++;
                }
            }
            if(count < 1 || count > 1){
                y[i].className += " invalid";
                valid = false;
            }
        }
        if(y[i].id === 'phoneInput'){
            if(y[i].value.length < 11 || y[i].value.length > 11){
                y[i].className += " invalid";
                valid = false;
            }
        }
        if(y[i].type === 'password'){
            if(y[i].value.length < 8 || y[i].value.length > 16){
                y[i].className += " invalid";
                valid = false;
            }
        }
    }
    // If the valid status is true, mark the step as finished and valid:
    if (valid) {
        document.getElementsByClassName("step")[currentTab].className += " finish";
    }
    return valid; // return the valid status
}
function fixStepIndicator(n) {
    // This function removes the "active" class of all steps...
    let i, x = document.getElementsByClassName("step");
    for (i = 0; i < x.length; i++) {
        x[i].className = x[i].className.replace(" active", "");
    }
    //... and adds the "active" class to the current step:
    x[n].className += " active";
}