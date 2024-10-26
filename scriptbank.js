document.getElementById('bank-request-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const accountNumber = document.getElementById('account-number').value;
    const ifscCode = document.getElementById('ifsc-code').value;

    // Generate PDF using jsPDF
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.setFontSize(12);
    doc.text('Bank Request', 10, 10);
    doc.text(`Account Number: ${accountNumber}`, 10, 30);
    doc.text(`IFSC Code: ${ifscCode}`, 10, 40);
    
    // Save the generated PDF
    doc.save('bank-request.pdf');
});
