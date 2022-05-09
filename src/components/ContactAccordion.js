import React, { useState } from 'react';
import { AccordionFAQData } from '../pages/contact/ContactData';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

function Accordion() {
    return (
        <main>
            <div className='container'>
                <div className='row d-flex justify-content-center pb-5'>
                    <div className='col-10 pb-3'>
                        <h3 className='contact-title text-center'>Commonly Asked Questions</h3>
                    </div>
                    <div className='col-10'>
                        <section className='info'>
                        {AccordionFAQData.map(section => {
                            return (
                            <QuestionSection key={section.id} sectionData={section}></QuestionSection>
                            );
                        })}
                        </section>
                    </div>
                </div>
            </div>
        </main>
    );
}

const QuestionSection = ({ sectionData }) => {
    const [showInfo, setShowInfo] = useState(false);
    return (
        <article className='faq-category'>
        <header>
            <button type='button' className='btn faq-category-title' onClick={() => setShowInfo(!showInfo)}><span>{sectionData.title + ' '}</span> 
            {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </button>
        </header>
        {showInfo && <p>{sectionData.questions.map(question => <SectionQuestions questionData={question}/>)}</p>}
        </article>
    );
};

const SectionQuestions = ({ questionData }) => {
    const [showInfo, setShowInfo] = useState(false);
    return (
        <article className='question'>
        <header>
            <button type='button' className='btn faq-category-title' onClick={() => setShowInfo(!showInfo)}><span>{questionData.title.toUpperCase() + ' '}</span>
            {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </button>
        </header>
        {showInfo && <p className='faq-answer'>{questionData.answer}</p>}
        </article>
    );
};

export default Accordion;
