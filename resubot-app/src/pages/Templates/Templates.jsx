import React, {useState} from "react";
import './Templates.scss'
import Modal from "../../components/Modal/Modal.jsx";

const templateData = [
    {
        id: 1,
        title: "Template 1",
        description: "This is the first template.",
    },
    {
        id: 2,
        title: "Template 2",
        description: "This is the second template.",
    },
    {
        id: 3,
        title: "Template 3",
        description: "This is the third template.",
    },
    {
        id: 4,
        title: "Template 4",
        description: "This is the fourth template.",
    },
    {
        id: 5,
        title: "Template 5",
        description: "This is the fifth template.",
    },
];

const TemplatesPage = () => {

    const [openModal, setOpenModal] = useState(false);
    return (
            <div className="templates-wrapper">
                <Modal open={openModal} onClose={()=> setOpenModal(false)} title={"Template Preview"}/>
                <h3 className="title is-3">Available Templates</h3>
                <div className="box">
                    <div className="tabs">
                        <ul>
                            <li className="is-active"><a>All</a></li>
                            <li><a>Creative</a></li>
                            <li><a>Professional</a></li>
                            <li><a>Modern</a></li>
                            <li><a>Minimalist</a></li>
                            <li><a>Compact</a></li>
                            <li><a>Coming Soon...</a></li>
                        </ul>
                    </div>

                    <div className="template-display-area">
                        <div className="template-grid">
                            {templateData.map((template) => (
                                <div className="template-card" key={template.id} onClick={()=> setOpenModal(true)}>
                                    <h4 className="template-title">{template.title}</h4>
                                    <p className="template-description">{template.description}</p>
                                    <div className="card">
                                        <div className="card-image">
                                            <figure className="image is-1by2">
                                                <img src="https://bulma.io/images/placeholders/320x640.png"
                                                     alt="Template Preview"/>
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default TemplatesPage;
