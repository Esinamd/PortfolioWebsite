import React, {useRef, useState, useEffect} from "react";
import './contact.css';
import MenuItems from "../Components/Navbar/MenuItems";
import Navbar from "../Components/Navbar/Navbar";
import { useForm } from 'react-hook-form';
import { init, sendForm } from 'emailjs-com';
init("user_DyQTauVzBuQDQCEmix2Gz");

const Contact = () => {
    const { register, formState:{errors}, reset } = useForm();
    const [contactNumber, setContactNumber] = useState("000000");
    const [statusMessage, setStatusMessage] = useState("");

    useEffect(() => {
        const numStr = contactNumber + (Math.random() * 1000000 | 0);
        const gen = numStr.substring(numStr.length - 6);
        setContactNumber(gen);
    }, "contactNumber");

    const form = useRef();
    const submit = (data) => {
        const statusMessage = document.querySelector('.status-message');
        data.preventDefault();

        sendForm('contact_service', 'template_co5auub', form.current, 'user_DyQTauVzBuQDQCEmix2Gz')
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                //reset form?
                setStatusMessage("Message Sent :)");
                statusMessage.className = 'status-message success'
                setTimeout(() => {
                    statusMessage.className = 'status-message'
                }, 2500);
            }, function (error) {
                console.log('FAILED...', error.text);
                setStatusMessage("Message Failed to Send :( Please try again later!");
                statusMessage.className = 'status-message failure '
                setTimeout(() => {
                    statusMessage.className = 'status-message'
                }, 2500);
            });
        reset();
    }

    return (
        <>
            <div className="head">
                <a href="/"><h1 className="name">Esinam Dake</h1></a>
                <div className="menu"><MenuItems pageWrapId = {'page-wrap'} outerContainerId={'outer-container'} /></div>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className="main">
                <div className="leftC">
                    <h1 className="titleC" >Contact Me!</h1>
                    <div className="cInfo">
                        If you saw something interesting on my website that you like, want to collaborate on a
                        project, want to hire me for a project or would just like to say hi and start a
                        conversation then please fill free to contact me :D
                        <br/>
                        <br/>
                        Fill out your name, email and message in the form and I'll reply as soon as possible!
                    </div>
                </div>
                <div className="rightC sForm">
                    <p className='status-message'>{statusMessage}</p>
                    <form  ref={form} id='contact-form' onSubmit={submit}>
                        <input
                            type="hidden"
                            name="contact_number"
                            value={contactNumber}
                        />
                        <input
                            name="form_name"
                            id="contactName"
                            type="text"
                            placeholder="Name"
                            {...register("form_name", {required:true, maxLength: 80})}
                        /><br/>
                        <input
                            type="email"
                            name="form_email"
                            id="contactEmail"
                            placeholder="Email"
                            {...register("form_email", {required: true, pattern: /^\S+@\S+$/i} )}
                        /><br/>
                        <textarea
                            name="form_message"
                            id="contactMessage"
                            placeholder="Message..."
                            rows="9"
                            {...register("form_message", {required: true})}
                        /> <br/>
                        <button type="submit" value="Send">Send</button>
                    </form>
                </div>
            </div>
            <div className="footerC">
                <div className="bottomNavC"><Navbar /></div>
            </div>
        </>
    );
};

export default Contact;
