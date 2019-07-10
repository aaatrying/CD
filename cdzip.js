var links = [];	

 function generateZIP() {	
  console.log('TEST');	
  var zip = new JSZip();	
  var count = 0;	
  var zipFilename = "Pictures.zip";	

   links.forEach(function (url, i) {	
    var filename = url.slice(url.lastIndexOf("/"), url.length - 1);	

     JSZipUtils.getBinaryContent(url, function (err, data) {	
      if (err) {	
        throw err; /* or handle the error */	
      }	
      zip.file(filename, data, { binary: true });	
      count++;	
      if (count == links.length) {	
        zip.generateAsync({ type: 'blob' }).then(function (content) {	
          saveAs(content, zipFilename);	
        });	
      }	
    });	
  });	
}	

 $(document).ready(function () {	

  /*  var links = []; */	

   $('.gallery').on('click', '.thumb', function () {	

     $(this).removeClass().addClass('thumbChecked');	
    $(this).css("border", "2px solid #c32032");	
    links.push($(this).attr('src'));	
    console.log(links);	

     if (links.length != 0) {	
      $('.download').css("display", "block");	
    }	

   });	


   $('.gallery').on('click', '.thumbChecked', function () {	

     $(this).removeClass().addClass('thumb');	
    $(this).css("border", "2px solid white");	
    var itemtoRemove = $(this).attr('src');	
    links.splice($.inArray(itemtoRemove, links), 1);	
    console.log(links);	

     if (links.length == 0) {	
      $('.download').css("display", "none");	
    }	

   });	
});
