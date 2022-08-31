import whatsApp from "./images/whatsapp.png";
import linkedIn from "./images/linkedin.png";
import gitHub from "./images/github.png";


const Footer = () => {

    const getFooter = () => {
        return <article className="footer">
                    <div className="footer-main">
                        <p>Address</p>
                        <p>Email</p>
                        <p>Phone</p>
                    </div>
                    <div className="footer-social">
                        <a href="https://web.whatsapp.com/" target="_blank" rel="noreferrer"><img src={whatsApp} alt="logo WhatsApp"/></a>
                        <a href="https://www.github.com/cmanu07" target="_blank" rel="noreferrer"><img src={gitHub} alt="logo GitHub"/></a>
                        <a href="https://www.linkedin.com/in/emanuel-caradan-7b12a3228" target="_blank" rel="noreferrer"><img src={linkedIn} alt="logo LinkedIn"/></a>
                    </div>
                    <h4>Copyright © Emanuel Caradan 2022</h4>
                </article>
    }

    return <>
            {getFooter()}
        </>
};

export default Footer;