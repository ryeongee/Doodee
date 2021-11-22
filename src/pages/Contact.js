import React, { useEffect, useRef, useState } from 'react';
import KakaoMap from '../components/KakaoMap';
import './Contact.css';



const Contact = () => {
    const [form, setForm] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    });

    const {name, phone, email, message} = form;

    const inputNameRef = React.useRef(null);
    const inputEmailRef = React.useRef(null);
    
    const handleChange = (e) => {
        const nextForm = {
            ...form,
            [e.target.name]: e.target.value
        };
        setForm(nextForm);
    };

    const handleReset =() => {
        setForm({
            name: '',
            phone: '',
            email: '',
            message: ''
        })
    };

    const userAlert = () => {
        alert(
            'Name : ' + name + '\n' +
            'Phone : ' + phone + '\n' +
            'E-mail : ' + email + '\n' +
            'Message : ' + message
        );
    };

    const errorAlert = () => {
        alert('이메일을 다시 한번 확인해주세요.');
    };

    const handleSubmit = () => {
        if (email.includes ('@')) {
            userAlert();
            handleReset();
            inputNameRef.current.focus();
        } else {
            errorAlert();
            setForm({
                ...form,
                email: ''
            });
            inputEmailRef.current.focus();
        }
    };
    

    return (
        <>
        <div className='contact'>
            <div className='contact_header'>
                <h1 className='contact_title'>C O N T A C T</h1>
                <p className='contact_request'>Request a Free Quote Call or Message</p>
            </div>
            <div className='contact_form'>
                <input 
                    className='client_info contact_form_items'
                    type='text'
                    placeholder='Name'
                    name="name"
                    value={name}  
                    onChange={handleChange}
                    ref = {inputNameRef}  
                />
                <input 
                    className='client_info contact_form_items'
                    type='text'
                    placeholder='Phone'
                    name="phone"
                    value={phone}  
                    onChange={handleChange}    
                />
                <input 
                    className='client_info contact_form_items'
                    type='text'
                    placeholder='E-mail'
                    name="email"
                    value={email}  
                    onChange={handleChange}  
                    ref = {inputEmailRef}  
                />
                <textarea 
                    className='client_message contact_form_items'
                    type='text'
                    placeholder='Message'
                    name="message"
                    value={message}  
                    onChange={handleChange}   
                />
                <div className='submit contact_form_items'>
                    <button className='submit_btn' onClick={handleSubmit}>
                        <p>Submit</p>
                    </button>
                </div>
            </div>
            <div className='contact_intro'>
                <div className='company_info'>
                    <p><b>Address</b> Seoul, Republic of Korea</p>
                    <p><b>Tel</b> 010 0000 0000</p>
                    <p><b>E-mail</b> abc123@naver.com</p>
                </div>
                <div className='company_pic'>
                    <img 
                        src="https://static.wixstatic.com/media/f1b974_fb928d1903b54e6fb27cc3781eab0e14~mv2.jpg/v1/fill/w_1200,h_500,al_c,q_85/Contactus_%EB%B0%B0%EB%84%88.webp" 
                        alt="Company Pictures" 
                    />
                </div>
            </div>
            <div className='contact_map' >
                <KakaoMap />
            </div>
        </div>
        </>
    );  
};

export default Contact;