function contactMe() {
const form = document.querySelector('form')
form.addEventListener('submit', event => {
  // prevent the form submit from refreshing the page
  event.preventDefault()

  const { name, email, message } = event.target
  console.log('Name: ', name.value)
  console.log('Email Address: ', email.value)
  console.log('Message: ', message.value)

})
}

export default contactMe;
