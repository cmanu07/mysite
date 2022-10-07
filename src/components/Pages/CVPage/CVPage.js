import React from "react";

import "./CVPage.css";

import cvItem from "../../Media/cv_item.jpg";
import cvFile from "../../Files/Emanuel Caradan - CV.pdf";

export default function CVPage () {

    return (<>
        <div className="cv">
            <h2>CV</h2>
            <img src={cvItem} alt="my updated cv"/>
            <p>You can also download my CV in PDF format from <a href={cvFile} download>here</a>.</p>
        </div>
    </>)
}