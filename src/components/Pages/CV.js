import Footer from "../Footer";
import Header from "../Header/Header";

import cvItem from "../images/cv_item.jpg";
import cvFile from "../Main/Emanuel Caradan - CV.pdf";


export default function CV () {

    return (<>
        <Header/>
        <div className="cv">
            <h2>CV</h2>
            <img src={cvItem} alt="my updated cv"/>
            <p>You can also download my CV in PDF format from <a href={cvFile} download>here</a>.</p>
        </div>
        <Footer/>
    </>)
}