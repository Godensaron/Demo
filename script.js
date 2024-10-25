// You can update the status and OEE metrics dynamically here if needed
const statusElement = document.getElementById('status');
const oeeElement = document.getElementById('oee-percentage');
const availabilityElement = document.getElementById('availability');
const performanceElement = document.getElementById('performance');
const qualityElement = document.getElementById('quality');

// Example of updating values dynamically
function updateDashboard() {
    statusElement.innerText = "Running";
    oeeElement.innerText = "54%";
    availabilityElement.innerText = "80%";
    performanceElement.innerText = "75%";
    qualityElement.innerText = "90%";
}

// Call the function to update the dashboard
updateDashboard();
