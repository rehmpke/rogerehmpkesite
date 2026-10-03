function contactMe() {
  const form = document.getElementById("contact");
  if (!form) return;

  const senderNameInput = document.getElementById("name");
  const senderEmailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");
  const button = document.getElementById("contact-submit");
  const resultText = document.getElementById("result-text");

  if (
    !senderNameInput ||
    !senderEmailInput ||
    !messageInput ||
    !button ||
    !resultText
  ) {
    return;
  }

  let sending = false;

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (sending) return;

    const senderName = senderNameInput.value.trim();
    const senderEmail = senderEmailInput.value.trim();
    const message = messageInput.value.trim();
    const tokenInput = form.querySelector(
      '[name="cf-turnstile-response"]'
    );
    const turnstileToken = tokenInput ? tokenInput.value : "";

    if (!senderName || !senderEmail || !message) {
      resultText.textContent =
        "Please enter your name, email, and message.";
      return;
    }

    if (!turnstileToken) {
      resultText.textContent =
        "Please wait for verification, then try sending again.";
      return;
    }

    sending = true;
    button.disabled = true;
    resultText.textContent = "Sending…";

    const endpoint =
      "https://f1gpiut934.execute-api.us-east-1.amazonaws.com/default/SendContactEmail";

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: JSON.stringify({
          senderName,
          senderEmail,
          message,
          turnstileToken,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message || "Unable to send your message."
        );
      }

      resultText.textContent = "Email sent successfully!";
      form.reset();
    } catch (error) {
      console.error("Contact form error:", error);
      resultText.textContent =
        "Unable to send your message. Your message is still here; please try again.";
    } finally {
      sending = false;
      button.disabled = false;

      if (window.turnstile) {
        window.turnstile.reset("#contact-turnstile");
      }
    }
  });
}

export default contactMe;