/*!
* Start Bootstrap - Landing Page v6.0.4 (https://startbootstrap.com/theme/landing-page)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-landing-page/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

const sendEmail = () => {
  Email.send({
    secureToken:
      'F0CF9998DAB3225D382F0F6C368FE622D91624DE9AB88E836EC6CA2075A1765E98BD202EB6F8D4C31176725DED7A6088',
    Host: 'smtp.elasticemail.com',
    Username: 'g.edmon25@gmail.com',
    Password: 'AAA4EE3F5D68454F8C0937816DE182F78254',
    To: 'garciaedmon025@gmail.com',
    From: document.getElementById('emailAddressBelow').value,
    Subject: 'Additional User',
    Body: 'We have a new user'
  }).then((message) => alert(message))
}