document.getElementById("copyButton").addEventListener("click", function() {
    var iframeDoc = document.getElementById("textView").contentWindow.document;
    var textToCopy = iframeDoc.body.innerHTML.trim(); // Get inner HTML of iframe content
  
    // Create a temporary textarea to copy text to clipboard
    var tempTextArea = document.createElement("textarea");
    tempTextArea.value = textToCopy;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand("copy");
    document.body.removeChild(tempTextArea);
  
    alert("Text copied to clipboard!");
  });
  