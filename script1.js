
 function sendMail(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    const templateParams = {
        from_name: name,
        from_email: email,
        subject: subject,
        message: message
    }
}

  