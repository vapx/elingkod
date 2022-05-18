/*!
* Start Bootstrap - Landing Page v6.0.4 (https://startbootstrap.com/theme/landing-page)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-landing-page/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

const sendEmail = () => {
  Email.send({
    Host: 'smtp.elasticemail.com',
    Username: 'g.edmon25@gmail.com',
    Password: 'AAA4EE3F5D68454F8C0937816DE182F78254',
    To: 'garciaedmon025@gmail.com',
    From: document.querySelector('.e-lingkod-form-input').value,
    Subject: document.querySelector('.e-lingkod-form-input').value,
    Body: document.querySelector('.e-lingkod-form-input').value
  }).then((message) => alert(message))
}