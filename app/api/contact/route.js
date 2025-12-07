import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const data = await req.json();
    const { restaurantName, contactPerson, phone, email, location, businessType, deliveryOptions, message } = data;

    // Configure transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'pratapandsons10@gmail.com',
        pass: process.env.GMAIL_APP_PASSWORD, // Use an app password for Gmail
      },
    });

    // Compose mail
    const mailOptions = {
      from: 'pratapandsons10@gmail.com',
      to: 'pratapandsons10@gmail.com',
      subject: 'New Partner Application - Pratap\'s Bite',
      html: `
        <h2>New Partner Application</h2>
        <p><strong>Business Name:</strong> ${restaurantName}</p>
        <p><strong>Contact Person:</strong> ${contactPerson}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Business Address:</strong> ${location}</p>
        <p><strong>Business Type:</strong> ${businessType}</p>
        <p><strong>Delivery Options:</strong> ${deliveryOptions?.join(', ')}</p>
        <p><strong>Additional Info:</strong> ${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
  }
}
