import React from "react";

import "./CVPage.css";

import cvItem from "../../Media/cv_item.jpg";
import cvFile from "../../Files/Emanuel_Caradan_CV.pdf";
import UiPathFoundation from "../../Files/LearningPath_Certificate_Foundation_Emanuel_Caradan.pdf"
import UiPathAdvanced from "../../Files/LearningPath_Certificate_Advanced_Emanuel_Caradan.pdf"


export default function CVPage () {

    return (<>
        <div className="cv">
            <h2>CV</h2>
            <img src={cvItem} alt="my updated cv"/>
            <p>Here you can see my UiPath Diploma of completion: <a href={UiPathFoundation} download>Foundation</a> and <a href={UiPathAdvanced} download>Advanced</a>.</p>
            <p>You can also download my CV in PDF format from <a href={cvFile} download>here</a>.</p>
        </div>
        </>)
}