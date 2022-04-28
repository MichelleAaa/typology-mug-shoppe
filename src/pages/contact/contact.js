import React, { Component }  from 'react';
import { ContactHeaderData } from './ContactData';
import HeaderSmall from '../../components/HeaderSmall';
import ContactForm from '../../components/ContactForm';
import HeadingWithText from '../../components/HeadingWithText';
import BeigeBackgroundText from '../../components/BeigeBackgroundText';
import ImgGridWithText from '../../components/ImageGridWithText';
import SubscriptionSmall from '../../components/SubscriptionSmall';
import ContactAccordion from '../../components/ContactAccordion';

const ContactHeader = () => {
    return (
        <HeaderSmall headerData={ContactHeaderData} />
    )
}

// const AboutTextDetail = () => {
//     return (
//         <HeadingWithText textData={AboutTextData} />
//     )
// }

// const RefundDetail = () => {
//     return (
//         <BeigeBackgroundText textData={GuaranteeData} />
//     )
// }

// const AboutImgGrid = () => {
//     return (
//         <ImgGridWithText textData={AboutImgGridData} />
//     )
// }

function ContactPage() {
    return (
        <>
            <ContactHeader />
            <div className="py-5"></div>
            <ContactForm />
            <div className="pt-5"></div>
            <ContactAccordion />
            <div className="pt-5"></div>
            {/* <AboutImgGrid /> */}
            <SubscriptionSmall />
        </>
    );
}

export default ContactPage;