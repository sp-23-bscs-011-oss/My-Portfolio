import React from 'react';
import {ArrowUpRight, Mail} from 'lucide-react';

export default function ContactForm({email}) {
  function validateText(event) {
    const field = event.currentTarget;
    field.setCustomValidity(field.value.trim() ? '' : 'Please enter more than spaces.');
  }

  return (
    <form className="contact-form" id="contact-form" action={`https://formsubmit.co/${email}`} method="POST" aria-labelledby="contact-form-title">
      <div className="form-heading">
        <Mail size={21} aria-hidden="true"/>
        <div><h3 id="contact-form-title">Send me a message</h3><p>Have a role, a project, or an idea in mind?</p></div>
      </div>
      <input type="hidden" name="_subject" value="New message from Ahmad’s portfolio"/>
      <input type="hidden" name="_template" value="table"/>
      <div className="form-row">
        <label htmlFor="contact-name">Your name
          <input id="contact-name" name="name" type="text" autoComplete="name" placeholder="Your full name" required maxLength={100} onInput={validateText}/>
        </label>
        <label htmlFor="contact-email">Email address
          <input id="contact-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required maxLength={254}/>
        </label>
      </div>
      <label htmlFor="contact-message">Message
        <textarea id="contact-message" name="message" rows={5} placeholder="Tell me a little about your opportunity or project…" required minLength={10} maxLength={5000} onInput={validateText}/>
      </label>
      <p className="form-note" id="contact-form-note">Your message is forwarded to my inbox through FormSubmit. You’ll continue to a spam check and confirmation page.</p>
      <button className="button primary" type="submit" aria-describedby="contact-form-note">Send message <ArrowUpRight size={18} aria-hidden="true"/></button>
    </form>
  );
}
