import headerimg1 from '../../assets/page-img/esfj-table.png';
import headerimg3 from '../../assets/page-img/infp-pour-cropped.png';
import headerimg2 from '../../assets/page-img/intj-leaves.png';

export const ContactHeaderData = {
    img1: headerimg1,
    img2: headerimg2,
    img3: headerimg3,
    title: 'Contact Us',
    subtitle: 'Please feel free to reach out to us if you have any questions or feedback',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. ',
    button: {
        id: 0,
        text: 'View Our Selection Now',
        btnClass: 'outline-btn',
        linkClass: 'outline-link',
        link: '/products'
    }
}

export const AccordionFAQData = [
        {   id: 0.0,
            title: 'ORDERING',
            questions: [
            {
                id: 0.1,
                title: 'How do I place an order?',
                answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
            },
            {
                id: 0.2,
                title: 'How can I update an order I already placed?',
                answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
            },
            {
                id: 3,
                title: 'I need to change something about my order. What can I do?',
                answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
            },
        ]
    },
        {   id: 1.0,
            title: 'SHIPPING',
            questions: [
            {
                id: 1.1,
                title: 'How long does it take to ship?',
                answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
            },
            {
                id: 1.2,
                title: 'What if my package is lost in shipment?',
                answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
            },
            {
                id: 1.3,
                title: 'Do you ship to P.O. Boxes?',
                answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
            },
        ]
    },
        {   id: 2.0,
            title: 'RETURNS',
            questions: [
            {
                id: 2.1,
                title: 'What is your refund policy?',
                answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
            },
            {
                id: 2.2,
                title: 'When do I need to request a refund by?',
                answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
            }
        ]
    }
]