# M Ahmad — React Portfolio
A responsive React portfolio based on Muhammad Ahmad's CV, featuring StockPilot, CampusEvents, CropGuard, and more.

## Run locally
```sh
npm install
npm run dev
```

## Production build
```sh
npm run build
```
Deploy the `dist` directory to any static host. Source: `src/main.jsx`; styling: `src/style.css`; CV: `public/M-Ahmad-CV.pdf`.

Project artwork is illustrative, not a screenshot of deployed applications. StockPilot is marked in development. Project links lead to the supplied GitHub profile because individual repository/demo URLs were not supplied. The Let’s talk buttons lead to the contact form. FormSubmit forwards submissions to ahmadyousaf7090@gmail.com; no API keys or custom backend are required. A direct email link remains available as an alternative.

## Activate contact email delivery
1. Open the hosted site and submit the contact form once.
2. Complete the FormSubmit spam check.
3. Check ahmadyousaf7090@gmail.com (including Spam) for the activation email and click its confirmation link.
4. Submit another test message and confirm it reaches your inbox. Email delivery is not verified until this step succeeds.

The form uses native browser validation and leaves FormSubmit CAPTCHA enabled. Visitors continue to FormSubmit for its spam check and confirmation; the portfolio does not show a fake sent message. FormSubmit processes the submitted name, email and message. The visitor email becomes the reply-to address. Run via localhost rather than opening index.html directly.
