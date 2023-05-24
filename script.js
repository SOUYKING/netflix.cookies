// Copy text when copyButton1 is clicked
document.getElementById("copyButton1").addEventListener("click", function() {
  var textToCopy = document.getElementById("textToCopy1").innerText;
  copyTextToClipboard(textToCopy);
});

// Copy text when copyButton2 is clicked
document.getElementById("copyButton2").addEventListener("click", function() {
  var textToCopy = document.getElementById("textToCopy2").innerText;
  copyTextToClipboard(textToCopy);
});

// Copy text when copyButton3 is clicked
document.getElementById("copyButton3").addEventListener("click", function() {
  var textToCopy = document.getElementById("textToCopy3").innerText;
  copyTextToClipboard(textToCopy);
});

// Function to copy text to clipboard
function copyTextToClipboard(text) {
  var dummyElement = document.createElement("textarea");
  document.body.appendChild(dummyElement);
  dummyElement.value = text;
  dummyElement.select();
  document.execCommand("copy");
  document.body.removeChild(dummyElement);
  alert("Text copied to clipboard: " + text);
}
