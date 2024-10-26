document.getElementById('bank-request-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const aadhaarNumber = document.getElementById('aadhaar-number').value;
    const panNumber = document.getElementById('pan-number').value;
    const mobileNumbers = document.getElementById('mobile-numbers').value;
    const caseDetails = document.getElementById('case-details').value;

    // Generate PDF using jsPDF
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Add content to the PDF
    doc.setFontSize(12);
    doc.text('TAMIL NADU POLICE', 10, 10);
    doc.text('NOTICE U/S 91 of Cr.P.C', 10, 20);
    doc.text('From: Inspector of Police', 10, 30);
    doc.text('Cyber Crime Police Station', 10, 40);
    doc.text('Tirupur City', 10, 50);
    doc.text('To: The branch manager, Concerned', 10, 60);
    doc.text('cybertpc.tnpol@nic.in', 10, 70);
    
    doc.text('Sir/Madam,', 10, 80);
    doc.text('Sub: Requesting details of the suspected bank account – Police Request – Reg.', 10, 90);
    doc.text('Ref: 1. FIR 07/2023 u/s 66D IT Act & 420 IPC, Dt:02.03.2023.', 10, 100);
    doc.text('2. NCRP No: 32902230003193 Dt:16-02-2023.', 10, 110);
    doc.text('3. CSR No: 193/2023. Dt:16-02-2023.', 10, 120);
    doc.text('***', 10, 130);
    
    doc.text(`It is to inform that a cybercrime case of fraud by impersonation has been registered, ${caseDetails}`, 10, 140);
    doc.text(`Suspect’s Aadhaar Number: ${aadhaarNumber}`, 10, 160);
    doc.text(`Suspect’s Pan Number: ${panNumber}`, 10, 170);
    doc.text(`Suspect’s Mobile Numbers: ${mobileNumbers}`, 10, 180);
    
    doc.text('If any bank account has been created with these details, please provide the following information as soon as possible:', 10, 200);
    doc.text('1. KYC and AOF of the aforementioned account.', 10, 220);
    doc.text('2. Mobile numbers and address which was linked with account from the time of opening to till date.', 10, 230);
    doc.text('3. Transaction Statement of the account from the date of opening to till date.', 10, 240);
    doc.text('4. IP Logs of the aforesaid account from the date of opening to till date.', 10, 250);
    doc.text('5. Other relevant information if any.', 10, 260);

    // Save the generated PDF
    doc.save('bank-request.pdf'); // This triggers the download
});
