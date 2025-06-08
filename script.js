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
      fps: 10,          // Frames per second for scanning
      qrbox: 250        // Scanning box size (pixels)
    },
    /* verbose= */ false
  );

  htmlscanner.render(onScanSuccess);
});
