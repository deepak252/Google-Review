function downloadPDF() {
    html2canvas($("#card")[0], {
        allowTaint: true
    }).then(function (canvas) {
        var imgData = canvas.toDataURL('image/jpeg, 1.0');
        var pdf = new jsPDF({
            unit: 'mm',
            format: 'a4',
            orientation: 'landscape'
        });

        pdf.addImage(imgData, 'jpeg', 20, 2);
        pdf.save('test.pdf');
    });
}