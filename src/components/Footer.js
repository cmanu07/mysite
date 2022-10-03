import whatsApp from "./Media/whatsapp.png";
import linkedIn from "./Media/linkedin.png";
import gitHub from "./Media/github.png";



const Footer = () => {

    const getFooter = () => {
        return <article className="footer">
                    <div className="footer-main">
                        <div className="footer-main-card">
                            <figure className="footer-main-card-logo-a"></figure>
                            <p className="footer-main-title">ADDRESS</p>
                            <div className="footer-main-br"></div>
                            <span>407280 Florești, Cluj-Napoca  CJ</span>
                        </div>
                        <div className="footer-main-card">
                            <figure className="footer-main-card-logo-e"></figure>
                            <p className="footer-main-title">EMAIL</p>
                            <div className="footer-main-br"></div>
                            <span>emanuel.caradan@gmail.com</span>
                        </div>
                        <div className="footer-main-card">
                            <figure className="footer-main-card-logo-p"></figure>
                            <p className="footer-main-title">PHONE</p>
                            <div className="footer-main-br"></div>
                            <span>(+40) 744 301841</span>
                        </div>
                    </div>
                    <div className="footer-social">
                        <a href="https://wa.me/40744301841" target="_blank" rel="noreferrer">
                            <img src={whatsApp} alt="logo WhatsApp"/>
                        </a>
                        <a href="https://www.github.com/cmanu07" target="_blank" rel="noreferrer">
                            <img src={gitHub} alt="logo GitHub"/>
                        </a>
                        <a href="https://www.linkedin.com/in/emanuel-caradan-7b12a3228" target="_blank" rel="noreferrer">
                            <img src={linkedIn} alt="logo LinkedIn"/>
                        </a>
                    </div>
                    <h4>Copyright © Emanuel Caradan 2022</h4>
                </article>
    }

    return <>
            {getFooter()}
        </>
};

export default Footer;