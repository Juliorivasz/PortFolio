import React from "react";
import "../css/contact.css";

function Contact(){
    return (
        <section className="container__section" id="contact">
            <div className="title__div">
                <h2 className="title">Contact</h2>
            </div>
            <div className="title__div extra">
                <h3 className="sub">! Contact your favorite developer ¡</h3>
                <br />
                <p>Mendoza, Argentina</p>
                <p>juliorivasdev@gmail.com</p>
                <p>(+54) 261-575-2890</p>
            </div>
            <form className="form__contact" action="https://formsubmit.co/juliorivasdev@gmail.com" method="POST" >
                <input type="text" className="input__form" name="name" id="name" placeholder="Name" required/>
                <input type="email" className="input__form" name="email" id="email" placeholder="Email" required/>
                <input type="text" className="input__form" name="subject" id="subject" placeholder="Subject" required/>
                <textarea type="textarea" className="input__form" name="message" id="message" placeholder="Message" required />
                <input type="submit" className="input__form" name="submit" id="submit" required/>
                <input type="hidden" name="_next" value="https://juliorivasz.github.io/PortFolio/"/>
                <input type="hidden" name="_captcha" value="false"/>
            </form>
        </section>
    );
}

export default Contact;