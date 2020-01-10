// THIS CODE DOESN'T WORK; REASON: WE ARE NOT PAYING FOR FIREBASE.
// WE ARE KEEPING THIS CODE AS POSTERITY.

require('dotenv').config()
const functions = require('firebase-functions');
const admin = require('firebase-admin')
const sgMail = require('@sendgrid/mail')
const cors = require('cors')({
    origin: true
})

admin.initializeApp()

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  console.log("Hello from Firebase in the console!")
//  console.log(request.body)
//  response.send("Hello from Firebase!");
// });

// exports.emailMessage = functions.https.onRequest((req, res) => {
//     const {sendto, name, subject, email, message} = req.body;
//     return cors(req, res, () => {
//         const msg = {
//             to: sendto,
//             from: email,
//             subject: subject,
//             text: `You have a message from ${name}, ${message}`
//         };
//         sgMail.setApiKey(process.env.SGAK);
//         sgMail.send(msg);
//         res.status(200).send('success')
//     }).catch((err) => {
//         console.log("error", err)
//         res.status(500).send('error', err)
//     });
// });

exports.emailMessage = functions.https.onRequest((req, res) => {
    const {sendto, name, subject, email, message} = req.body;
    return cors(req, res, () => {
    var text = `<div>
        <h4>Information</h4>
        <ul>
            <li>
            Name - ${name || ""}
            </li>
            <li>
            Email - ${email || ""}
            </li>
            <li>
            Message - ${subject || ""}
            </li>
        </ul>
        <h4>Message</h4>
        <p>${message || ""}</p>
    </div>`;
    const msg = {
        to: sendto,
        from: email,
        subject: subject,
        text: text,
        html: text
    };
    sgMail.setApiKey(
        process.env.SGAK
    );
    sgMail.send(msg)
      .then(() => {
        res.status(200).send("success")
      }).catch((err) => {
        console.log("error here!!!", err)
        res.status(500).send("failure")
    })
    })
  });