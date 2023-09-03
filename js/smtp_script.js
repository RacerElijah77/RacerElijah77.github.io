function sendMail() {
  var params = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value,
  };
  
  const serviceID = 'service_8cwk14k';
  const templateID = 'template_h85jxg6';

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('message').value = '';
      console.log(res);
      alert('Message sent sucessfully');
    })
    .catch((err) => console.log(err));
}
