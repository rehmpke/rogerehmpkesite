function contactMe() {
const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  // prevent the form submit from refreshing the page
  event.preventDefault();

  const { senderName, senderEmail, message } = event.target.elements;

        // Use your API endpoint URL you copied from the previous step
  const endpoint =
    "https://f1gpiut934.execute-api.us-east-1.amazonaws.com/default/SendContactEmail";
  // We use JSON.stringify here so the data can be sent as a string via HTTP
  const body = JSON.stringify({
      senderName: senderName.value,
      senderEmail: senderEmail.value,
      message: message.value,
  });

  const requestOptions = {
    method: "POST",
    body,
  };

  fetch(endpoint, requestOptions)
    .then((response) => {
      if (!response.ok) throw new Error("Error in fetch");
      return response.json();
    })
    .then((response) => {
      document.getElementById("result-text").innerText =
        "Email sent successfully!";
    })
    .catch((error) => {
      document.getElementById("result-text").innerText =
        "An unknown error occurred.";
    });
});
}

export default contactMe;
