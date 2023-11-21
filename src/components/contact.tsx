import "../css/contact.css";
import locationBlack from '../img/svg/bx-map-black.svg';
import locationWhite from '../img/svg/bx-map-white.svg';
import emailBlack from '../img/svg/bx-envelope-black.svg';
import emailWhite from '../img/svg/bx-envelope-white.svg';
import { ThemeType } from './styled/themes';

interface ThemeProps {
  theme: ThemeType;
}


function Contact({theme}: ThemeProps){    
    return (
        <section className={`container__section ${theme === "LightTheme" ? "bg__gray" : "bg__black"}`} id="contact">
            <a href={window.location.pathname+'#contact'}><div className="title__div">
                <h2 className={`title ${theme === "LightTheme" ? "b":"w"}`}>Contact me</h2>
            </div>
            </a>
            <div className="container__contact">
            <div className="title__div extra">
                <h3 className="sub">"I code to turn visions into reality."!</h3>
                <br />
                <div className="container__location">
                    <img src={theme === "LightTheme" ? locationBlack : locationWhite} alt="location" className="img__location"/>
                    <p>Mendoza, Argentina</p>
                </div>
                <div className="container__email">
                    <a href="https://mail.google.com/mail/?view=cm&to=juliorivasdev%40gmail.com" target="blank"><img src={theme === "LightTheme" ? emailBlack : emailWhite} alt="email" className="img__email"/></a>
                    <p>juliorivasdev@gmail.com</p>
                </div>
            </div>
            <form className="form__contact" action="https://formsubmit.co/70add80e68d1397fe0f4ecc6de928421" method="POST" >
                <input type="text" className="input__form" name="name" id="name" placeholder="Name" required/>
                <input type="email" className="input__form" name="email" id="email" placeholder="Email" required/>
                <input type="text" className="input__form" name="subject" id="subject" placeholder="Subject" required/>
                <textarea className="input__form" name="message" id="message" placeholder="Message" required />
                <input type="submit" className="input__form" name="submit" id="submit" title="send" required/>
                <input type="hidden" name="_next" value="https://juliorivasz.github.io/PortFolio/" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
            </form>
            </div>
        </section>
    );
}

export default Contact;