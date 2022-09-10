import React from 'react';
import { ContactHeaderData } from './ContactData';
import HeaderSmall from '../../components/HeaderSmall';
import ContactForm from '../../components/ContactForm';
import SubscriptionSmall from '../../components/SubscriptionSmall';
import ContactAccordion from '../../components/ContactAccordion';

function ContactPage() {
    return (
        <React.Fragment>
            <HeaderSmall headerData={ContactHeaderData} />
            <div className="py-5"></div>
            <main>
                <ContactForm />
                <div className="pt-5"></div>
                <ContactAccordion />
            </main>
            <div className="pt-5"></div>
            <SubscriptionSmall />
        </React.Fragment>
    );
}

export default ContactPage;