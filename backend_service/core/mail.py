from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail
from config import settings

SENDGRID_API_KEY = settings.SENDGRID_API_KEY
SENDER_EMAIL = "yuhnie@school.com"  # Must be verified in SendGrid

def send_add_user_email(to_email: str, user_name: str, password , user_role: str):
    """
    Send a welcome email to a newly added user with their role.

    Parameters:
    - to_email: recipient email
    - user_name: name of the user
    - user_role: role of the user (e.g., 'Student', 'Teacher', 'Principal')
    """
    if not SENDGRID_API_KEY:
        raise Exception("SendGrid API key not found in environment variables.")

    subject = f"Welcome to the School Management System, {user_role}!"
    html_content = f"""
    <h1>Welcome, {user_name}!</h1>

    <p>Your account has been created successfully with the role of <b>{user_role}</b>.</p>
    <p>You can now login to the School Management System using your the below email and password.</p>
    <p><b>Email:</b> {to_email}</p>
    <p><b>Password:</b> {password}</p>

    <p>Thank you for joining our platform!</p>
    """

    message = Mail(
        from_email=SENDER_EMAIL,
        to_emails=to_email,
        subject=subject,
        html_content=html_content
    )

    try:
        sg = SendGridAPIClient(SENDGRID_API_KEY)
        sg.send(message)
        print(f"Welcome email sent successfully to {to_email}")
    except Exception as e:
        print(f"Error sending email to {to_email}: {e}")

def send_code_to_mail(to_email,user_name,code,user_role):
    if not SENDGRID_API_KEY:
        raise Exception("SendGrid API key not found in environment variables.")
    subject = f"Welcome to the School Management System, {user_role}!"
    html_content = f"""
    <h1>Welcome, {user_name}!</h1>

    <p>You have requested a verification code.</p>
    <p>Your code is: {code}</p>
    <p>Please use this code to complete your action.</p>

    <p>Thank you. </p>
    """

    message = Mail(
        from_email=SENDER_EMAIL,
        to_emails=to_email,
        subject=subject,
        html_content = html_content
    )
    try:
        sg = SendGridAPIClient(SENDGRID_API_KEY)
        sg.send(message)
        print(f"Welcome email sent successfully to {to_email}")
    except Exception as e:
        print(f"Error sending email to {to_email}: {e}")


def send_reset_password_email(email: str, name: str, token: str):
    try:
        reset_url = f"https://yourfrontend.com/reset-password?token={token}"

        subject = "Reset Your Password"
        html_content = f"""
        <h2>Hello {name},</h2>
        <p>You requested a password reset. Click below:</p>
        <a href="{reset_url}">Reset Password</a>
        <p>This link expires in 30 minutes.</p>
        """

        message = Mail(
            from_email=SENDER_EMAIL,
            to_emails=email,
            subject=subject,
            html_content=html_content,
        )

        sg = SendGridAPIClient(SENDGRID_API_KEY)
        sg.send(message)

    except Exception as e:
        print("SendGrid error:", e)
        raise Exception("Failed to send reset password email")