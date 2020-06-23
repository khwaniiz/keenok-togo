import React, {useState} from 'react';
import CustomButton from '../custom-button/custom-button.component';

import axios from 'axios'

import './contact-form.styles.scss';

const ContactForm = () => {

const [formData, setFormData] = useState({});

  const updateInput = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async event => {
    event.preventDefault()
  
    setFormData({
      name: '',
      email: '',
      message: '',
    })

    const  {name, email, message} = formData;
    console.log(name, email, message)

    const form = await axios.post('/api/form', {
        name,
        email,
        message
    })
  }

    return (
       <div className='ContactContainer'>
     <h1>Contact us</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={updateInput}
          value={formData.name || ''}
          required
        
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={updateInput}
          value={formData.email || ''} 
          required
     
        />
        <textarea
          type="text"
          name="message"
          placeholder="Message"
          onChange={updateInput}
          value={formData.message || ''} 
          required
      
        ></textarea>
           <CustomButton type="submit">Submit</CustomButton>
        </form>
     
      
    </div>
      );
};

export default ContactForm;
