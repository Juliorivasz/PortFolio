import React from "react";
import "../css/contact.css";

function Contact(){    
    return (
        <section className="container__section" id="contact">
            <a href={window.location.pathname+'#contact'}><div className="title__div">
                <h2 className="title">Contact me</h2>
            </div>
            </a>
            <div className="container__contact">
            <div className="title__div extra">
                <h3 className="sub">! Contact your favorite developer ¡</h3>
                <br />
                <p>Mendoza, Argentina</p>
                <p>juliorivasdev@gmail.com</p>
                <p>(+54) 261-575-2890</p>
            </div>
            <form className="form__contact" action="https://formsubmit.co/70add80e68d1397fe0f4ecc6de928421" method="POST" >
                <input type="text" className="input__form" name="name" id="name" placeholder="Name" required/>
                <input type="email" className="input__form" name="email" id="email" placeholder="Email" required/>
                <input type="text" className="input__form" name="subject" id="subject" placeholder="Subject" required/>
                <textarea type="textarea" className="input__form" name="message" id="message" placeholder="Message" required />
                <input type="submit" className="input__form" name="submit" id="submit" value="SEND" required/>
                <input type="hidden" name="_next" value="https://juliorivasz.github.io/PortFolio/" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
            </form>
            </div>
        </section>
    );
}

export default Contact;