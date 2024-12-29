import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST, // إعدادات الخادم (مثل SMTP)
  port: parseInt(process.env.EMAIL_PORT || '587'), // عادةً 587 أو 465
  secure: false, // true إذا كنت تستخدم SSL/TLS
  auth: {
    user: process.env.EMAIL_USER, // بريد الإرسال
    pass: process.env.EMAIL_PASS, // كلمة المرور

  },
});

export const sendInvitationEmail = async ({
  recipientEmail,
  senderName,
  taskTitle,
  invitationLink,
}: {
  recipientEmail: string;
  senderName: string;
  taskTitle: string;
  invitationLink: string;
}) => {
  const mailOptions = {
    from: `"${senderName}" <${process.env.EMAIL_USER}>`, // اسم المُرسل وبريده
    to: recipientEmail, // البريد المستلم
    subject: `Invitation to collaborate on task: ${taskTitle}`,
    text: `Hello,

You have been invited by ${senderName} to collaborate on the task "${taskTitle}".

Please use the following link to accept the invitation:
${invitationLink}

This invitation will expire in 24 hours.

Best regards,
Task Manager Team`,
    html: `<p>Hello,</p>
<p>You have been invited by <strong>${senderName}</strong> to collaborate on the task "<strong>${taskTitle}</strong>".</p>
<p>Please use the following link to accept the invitation:</p>
<p><a href="${invitationLink}">${invitationLink}</a></p>
<p>This invitation will expire in 24 hours.</p>
<p>Best regards,<br>Task Manager Team</p>`,
  };

  await transporter.sendMail(mailOptions);
};
