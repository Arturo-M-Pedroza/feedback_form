import React, { useState } from 'react';
import './FeedbackForm.css'; // Import CSS for styling

const FeedbackForm = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        feedback: '',
        rating: ''
    });

    const handleData = (event) => {
        const {name, value} = event.target;
        setFormData({
            ...formData,
            [name] : value
        });
    };

    const handleSubmit = (event) => {

        event.preventDefault();

        const confirmationMessage = `
            Name: ${formData.name}                         
            Email: ${formData.email}      
            Feedback: ${formData.feedback}
            Rating: ${formData.rating}`;
        
        const isConfirmed = window.confirm(`Please confirm your details: \n ${confirmationMessage}`);

        if (isConfirmed) {
            console.log('Submitting feedback:', formData);
            setFormData({
                name: '',
                email: '',
                feedback: '',
                rating: ''
            });

            alert("Thank you for your valuable feedback!");
        }
    };

  return (
    <>
    <nav>
    Tell Us What You Think
    </nav>
      <form onSubmit={handleSubmit} className="feedback-form">

        <h2>We'd Love to Hear From You!</h2>
        <p>Please share your feedback with us.</p>
        
        <input type='text' name='name' placeholder='Your name' value={formData.name} onChange={handleData}/>
        <input type='email' name='email' placeholder='Your email' value={formData.email} onChange={handleData}/>
        <textarea name='feedback' placeholder='Your feedback' value={formData.feedback} onChange={handleData}></textarea>
        <div style={{display:'flex', flexDirection:'column'}}>
            <span>Rate us:</span>
            <div style={{display:'flex', flexDirection:'row',gap:'10px', margin:'5px'}}>
                <p><input type='radio' name='rating' value="1" onChange={handleData}/>1</p>
                <p><input type='radio' name='rating' value="2" onChange={handleData}/>2</p>
                <p><input type='radio' name='rating' value="3" onChange={handleData}/>3</p>
                <p><input type='radio' name='rating' value="4" onChange={handleData}/>4</p>
                <p><input type='radio' name='rating' value="5" onChange={handleData}/>5</p>
            </div>
        </div>

        <button type='submit'> Submit feedback</button> 
        
      </form>
    </>
  );
};

export default FeedbackForm;
