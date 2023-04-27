import React, { useState } from 'react';
import './Contacts.scss';
import emailjs from 'emailjs-com';

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message
      };

      emailjs.send('service_7p9xnuh', 'template_9mdqp2b', templateParams, '83wlyhITjwRLXHZZV')
        .then(() => {
          alert('Message sent successfully!');
          setFormData({ name: '', email: '', subject: '', message: '' });
        }, (error) => {
          alert('Failed to send the message. Error: ', error.text);
        });
    }
  };

  const validate = (data) => {
    const errors = {};

    if (!data.name.trim()) {
      errors.name = 'Name is required';
    }
    if (!data.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = 'Email is not valid';
    }
    if (!data.subject.trim()) {
      errors.subject = 'Subject is required';
    }
    if (!data.message.trim()) {
      errors.message = 'Message is required';
    }

    return errors;
  };

  return (
    <div className="contacts">
      <h3 className="contacts__title">Contacts</h3>
      <form className="contacts__form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="contacts__form__input-half"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p className="error">{errors.name}</p>}
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="contacts__form__input-half"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className="error">{errors.email}</p>}
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          className="contacts__form__input-full"
          value={formData.subject}
          onChange={handleChange}
        />
        {errors.subject && <p className="error">{errors.subject}</p>}
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          placeholder="Message"
          className="contacts__form__input-full contacts__form__input--textarea"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        {errors.message && <p className="error">{errors.message}</p>}
        <button type="submit" className="contacts__form__button">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contacts;