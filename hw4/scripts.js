function addLoadTimestamp() {
  var footer = document.querySelector("footer");
  if (!footer) return;

  var currentDate = new Date();

  var newParagraph = document.createElement("p");
  var message = document.createTextNode("Page loaded on: " + currentDate.toString());

  newParagraph.appendChild(message);
  newParagraph.style.fontSize  = "0.85em";
  newParagraph.style.color     = "#f5f5dc";
  newParagraph.style.marginTop = "0.4em";

  footer.appendChild(newParagraph);
}

if (document.body && document.body.id === "page-home") {
  window.onload = addLoadTimestamp;
}

function validateContactForm(event) {
  var nameField  = document.getElementById("name");
  var emailField = document.getElementById("email");

  var nameValue  = nameField  ? nameField.value.trim()  : "";
  var emailValue = emailField ? emailField.value.trim() : "";

  if (nameValue === "" || emailValue === "") {
    alert("Please fill out all required fields.");
    event.preventDefault();
    return false;
  }
  return true;
}

var contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.onsubmit = validateContactForm;
}


function toggleDescription(descriptionId, buttonElement) {
  var description = document.getElementById(descriptionId);
  if (!description) return;

  if (description.style.display === "none") {
    description.style.display = "block";
    buttonElement.textContent = "Hide Description";
  } else {
    description.style.display = "none";
    buttonElement.textContent = "Show Description";
  }
}

var blockquote = document.querySelector("blockquote");

if (blockquote) {
  blockquote.addEventListener("mouseover", function () {
    blockquote.style.backgroundColor = "#d4e8f0";
    blockquote.style.fontStyle       = "italic";
    blockquote.style.cursor          = "pointer";
    blockquote.style.transition      = "background-color 0.3s ease";
  });

  blockquote.addEventListener("mouseout", function () {
    blockquote.style.backgroundColor = "";
    blockquote.style.fontStyle       = "";
    blockquote.style.cursor          = "";
  });
}
