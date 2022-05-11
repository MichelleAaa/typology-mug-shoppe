import React, { useState } from 'react';
import { AccordionFAQData } from '../pages/contact/ContactData';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

function Accordion() {
    return (
        <section>
            <div className='container'>
                <div className='row d-flex justify-content-center pb-5'>
                    <div className='col-10 pb-3'>
                        <h3 className='contact-title text-center'>Commonly Asked Questions</h3>
                    </div>
                    <div className='col-10'>
                        <div className='info'>
                        {AccordionFAQData.map(section => {
                            return (
                            <QuestionSection key={section.id} sectionData={section}></QuestionSection>
                            );
                        })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

const QuestionSection = ({ sectionData }) => {
    const [showInfo, setShowInfo] = useState(false);
    return (
        <section className='faq-category'>
        <div>
            <button type='button' className='btn faq-category-title' onClick={() => setShowInfo(!showInfo)}>
                {sectionData.title + ' '} 
            {showInfo ? 
                <AiOutlineMinus size='25px' /> 
                : 
                <AiOutlinePlus size='25px' /> 
                } 
            </button>
        </div>
        {showInfo && <p>{sectionData.questions.map(question => <SectionQuestions questionData={question}/>)}</p>}
        </section>
    );
};

const SectionQuestions = ({ questionData }) => {
    const [showInfo, setShowInfo] = useState(false);
    return (
        <article className='question'>
            <div>
                <button type='button' className='btn faq-category-title' onClick={() => setShowInfo(!showInfo)}><span>{questionData.title.toUpperCase() + ' '}</span>
                {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </button>
            </div>
            {showInfo && <p className='faq-answer'>{questionData.answer}</p>}
        </article>
    );
};

export default Accordion;
