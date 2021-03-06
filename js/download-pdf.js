const downloadPDF2 = async(details)=> {
    try{
        // const url = "http://127.0.0.1:2000/api/pdf";
        // const url = "http://192.168.43.138:2000/api/pdf";
        const url = "https://google-review-pdf-generator.herokuapp.com/api/pdf";
        

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(details)
         }) // FETCH BLOB FROM IT
            .then((response) => response.blob())
            .then((blob) => { // RETRIEVE THE BLOB AND CREATE LOCAL URL
                var _url = window.URL.createObjectURL(blob);
                window.open(_url, "_blank").focus(); // window.open + focus
            }).catch((err) => {
                alert(err);
                console.log(err);
            });

    } catch(e){
        alert(e);
    } 
};

// function downloadPDF() {

//     var HTML_Width = $("#card").width();
//     var HTML_Height = $("#card").height();
//     var top_left_margin = 15;
//     var PDF_Width = HTML_Width + (top_left_margin * 2);
//     var PDF_Height = (PDF_Width * 1.5) + (top_left_margin * 2);
//     var canvas_image_width = HTML_Width;
//     var canvas_image_height = HTML_Height;

//     var totalPDFPages = Math.ceil(HTML_Height / PDF_Height) - 1;


//     html2canvas($("#card")[0], { allowTaint: true }).then(function (canvas) {
//         canvas.getContext('2d');

//         console.log(canvas.height + "  " + canvas.width);


//         var imgData = canvas.toDataURL("image/jpeg", 1.0);
//         var pdf = new jsPDF('p', 'pt', [PDF_Width, PDF_Height]);
//         pdf.addImage(imgData, 'JPG', top_left_margin, top_left_margin, canvas_image_width, canvas_image_height);


//         for (var i = 1; i <= totalPDFPages; i++) {
//             pdf.addPage(PDF_Width, PDF_Height);
//             pdf.addImage(imgData, 'JPG', top_left_margin, -(PDF_Height * i) + (top_left_margin * 4), canvas_image_width, canvas_image_height);
//         }

//         pdf.save("card.pdf");
//     });
// };