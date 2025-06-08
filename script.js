function domReady(fn) {
  if (
    document.readyState === "complete" ||
    document.readyState === "interactive"
  ) {
    setTimeout(fn, 1000);
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}

domReady(function () {
  // If QR code found
  function onScanSuccess(decodedText, decodedResult) {
    alert("Your QR is: " + decodedText);
  }

  // Correct initialization of Html5QrcodeScanner
  let htmlscanner = new Html5QrcodeScanner(
    "my-qr-reader",
    {
      fps: 10,          
      qrbox: 250        
    },
    /* verbose= */ false
  );

  htmlscanner.render(onScanSuccess);
});
