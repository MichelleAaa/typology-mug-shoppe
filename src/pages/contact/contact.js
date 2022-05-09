import React from 'react';
import { ContactHeaderData } from './ContactData';
import HeaderSmall from '../../components/HeaderSmall';
import ContactForm from '../../components/ContactForm';
import SubscriptionSmall from '../../components/SubscriptionSmall';
import ContactAccordion from '../../components/ContactAccordion';

const ContactHeader = () => {
    return (
        <HeaderSmall headerData={ContactHeaderData} />
    )
}

function ContactPage() {
    return (
        <>
            <ContactHeader />
            <div className="py-5"></div>
            <main>
                <ContactForm />
                <div className="pt-5"></div>
                <ContactAccordion />
            </main>
            <div className="pt-5"></div>
            <SubscriptionSmall />
        </>
    );
}

export default ContactPage;