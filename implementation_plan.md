# Implementation Plan - Auto-Reply Email

The goal is to send an automatic reply to the user who submits the contact form, in addition to the notification email sent to the admin.

## User Review Required

> [!IMPORTANT]
> **EmailJS Configuration**: You will need to create a **second template** in your EmailJS dashboard specifically for the auto-reply.
> 1. Go to Email Templates -> Create New Template.
> 2. Set the "To Email" field to `{{user_email}}` (this is crucial).
> 3. Design your auto-reply message (e.g., "Thanks for contacting us...").
> 4. Save and get the new **Template ID**.
> 5. Update the code with this new ID.

## Proposed Changes

### Component Layer

#### [MODIFY] [Contact.jsx](file:///Users/jenish112005gmail.com/Documents/laxa/src/components/Contact.jsx)
- Add a new constant `AUTOREPLY_TEMPLATE_ID`.
- Update `sendEmail` to perform two `emailjs.sendForm` calls:
    1.  Send notification to admin (existing logic).
    2.  Send auto-reply to user (new logic using the same form data).
- Ensure both promises resolve before showing the success message.

## Verification Plan

### Manual Verification
1.  **Code Update**: Add the logic for the second email.
2.  **User Action**: User needs to create the template and provide the ID.
3.  **Testing**:
    - Submit the form with a valid email address.
    - Check the admin inbox for the notification.
    - Check the submitter's inbox for the auto-reply.
