function contactMe() {
  const form = document.querySelector("form");
  form.addEventListener("submit", async (event) => {
    // prevent the form submit from refreshing the page
    event.preventDefault();

    // Access form elements directly using FormData
    const formData = new FormData(event.target);

    // Extract values from formData
    const senderName = formData.get("name");
    const senderEmail = formData.get("email");
    const message = formData.get("message");

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

    try {
      const response = await fetch(endpoint, requestOptions);

      if (!response.ok) {
        throw new Error("Error in fetch");
      }

      const result = await response.json();

      document.getElementById("result-text").innerText =
        "Email sent successfully!";
    } catch (error) {
      console.error('An unknown error occurred:', error);
      document.getElementById("result-text").innerText =
        "An unknown error occurred.";
    }
  });
}

export default contactMe;
