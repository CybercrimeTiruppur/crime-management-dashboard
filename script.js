// Sample data for demonstration
let totalIncidents = 50;
let activeCases = 20;
let resolvedCases = 30;

// Function to update dashboard data
function updateDashboard() {
    document.getElementById('total-incidents').innerText = totalIncidents;
    document.getElementById('active-cases').innerText = activeCases;
    document.getElementById('resolved-cases').innerText = resolvedCases;
}

// Call function to update the dashboard when the page loads
window.onload = updateDashboard;
