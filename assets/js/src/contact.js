function contactMe() {
  const form = document.querySelector("form");
  form.addEventListener("submit", (event) => {
    // prevent the form submit from refreshing the page
    event.preventDefault();

    // Log the entire event.target to see the structure
    console.log('Event Target:', event.target);

    // Try accessing form elements directly
    const senderNameInput = event.target.querySelector('[name="name"]');
    const senderEmailInput = event.target.querySelector('[name="email"]');
    const messageInput = event.target.querySelector('[name="message"]');

    // Log the form elements to check if they are found
    console.log('Sender Name Input:', senderNameInput);
    console.log('Sender Email Input:', senderEmailInput);
    console.log('Message Input:', messageInput);

    // Check if the inputs are found before accessing their values
    if (senderNameInput && senderEmailInput && messageInput) {
      const senderName = senderNameInput.value;
      const senderEmail = senderEmailInput.value;
      const message = messageInput.value;

      // Use your API endpoint URL you copied from the previous step
      const endpoint =
        "https://f1gpiut934.execute-api.us-east-1.amazonaws.com/default/SendContactEmail";

      // We use JSON.stringify here so the data can be sent as a string via HTTP
      const body = JSON.stringify({
        senderName,
        senderEmail,
        message,
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
    } else {
      console.error('Form elements not found or undefined.');
    }
  });
}

export default contactMe;
