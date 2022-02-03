const sgMail = require('@sendgrid/mail')



sgMail.setApiKey(process.env.SENDDRID_API_KEY)

sgMail.send({
    to: 'vijay.da11458@gmail.com',
    from: 'vs11458@gmail.com',
    subject: 'This is my first creation!',
    text: 'I hope this one actually get to you.'
})

const sendWelcomemail = (name,email)=>{
    sgMail.send({
        to:email,
        from:'vs11458@gmail.com',
        subject:'Thanks for Joining in',
        text: `Thanks for choosing app ${name}, let us know the app is familar to you`

    })
}


const deletmail = (name,email)=>{
    sgMail.send({
        to:email,
        from:'vs11458@gmail.com',
        subject:'Account Deletion Mail',
        text:`you are such as loyal customer, we miss you ${name}`
    })


}

module.exports = {sendWelcomemail,deletmail}