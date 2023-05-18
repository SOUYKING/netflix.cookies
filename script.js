document.addEventListener('DOMContentLoaded', function() {
    var copyButton = document.getElementById('copyButton');
    var textToCopy = document.querySelector('p').innerText;
  
    copyButton.addEventListener('click', function() {
      navigator.clipboard.writeText(textToCopy)
        .then(function() {
          alert('Text copied to clipboard!');
        })
        .catch(function() {
          alert('Error copying text to clipboard.');
        });
    });
  });
  