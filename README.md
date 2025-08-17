# Build Match Pro - Contact Form API Integration

This project uses a REST API endpoint for handling contact form submissions.

## API Configuration

**API Endpoint:** `https://pacificpact.com/buildmatchpro-mail/contact.php`

The contact form sends all form data to this endpoint, which handles:
- Form validation
- Email sending via PHPMailer
- SMTP configuration (PrivateEmail/Namecheap)
- CORS handling

## Contact Form Fields

The form collects the following data:
- **Required:** name, email, message
- **Optional:** phone, business, estimatedCost, projectType, services

## API Response Format

**Success:**
```json
{
  "success": true,
  "message": "Message sent successfully"
}
```

**Error:**
```json
{
  "success": false,
  "message": "Error description"
}
```

## Testing

Use the `ApiTest` component to test the API connection and email sending functionality.

## SMTP Configuration

The API uses PrivateEmail (Namecheap) SMTP:
- **Host:** mail.privateemail.com
- **Port:** 465 (SSL/TLS)
- **Username:** hello@buildmatchpro.com
- **Password:** Bu1ld@MatcH_Pr0!

## CORS Settings

The API allows requests from:
- https://buildmatchpro.com (production)
- Development localhost URLs
