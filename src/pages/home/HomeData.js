import React, { Component }  from 'react';
import { BiLandscape } from 'react-icons/bi';
import { FaHandHoldingHeart } from 'react-icons/fa';
import { GiCompass } from 'react-icons/gi';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import img1 from '../../assets/page-img/esfj-table.png';
import img2 from '../../assets/page-img/intj-leaves.png';
import img3 from '../../assets/page-img/infp-pour-cropped.png';
import img5 from '../../assets/page-img/enfp-sock.png';
import img7 from '../../assets/page-img/istj-plate.png';
import img6 from '../../assets/page-img/entp-table.png';
import img4 from '../../assets/page-img/infj-leaves.png';
import img8 from '../../assets/page-img/istp-tall.png';

export const HeaderButton = {
    id: 0,
    text: 'View Our Selection Now',
    btnClass: 'outline-btn',
    linkClass: 'outline-link',
    link: '/products'
}

export const HomeCardsData = [
    {
        id: 0,
        icon: <BiLandscape />,
        title: 'Sensing',
        subtitle: 'What Is or Was',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus incidunt tempore, maiores omnis sed nesciunt eaque exercitationem deleniti quas, itaque delectus velit autem. Dicta exercitationem optio tenetur iusto eos saepe.'
    },
    {
        id: 1,
        icon: <GiCompass />,
        title: 'Intuition',
        subtitle: 'What is Possible',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus incidunt tempore, maiores omnis sed nesciunt eaque exercitationem deleniti quas, itaque delectus velit autem. Dicta exercitationem optio tenetur iusto eos saepe.'
    },
    {
        id: 2,
        icon: <AiOutlineQuestionCircle />,
        title: 'Thinking',
        subtitle: "Making Separations",
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus incidunt tempore, maiores omnis sed nesciunt eaque exercitationem deleniti quas, itaque delectus velit autem. Dicta exercitationem optio tenetur iusto eos saepe.'
    },
    {
        id: 3,
        icon: <FaHandHoldingHeart />,
        title: "Feeling",
        subtitle: 'Forming Connections',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus incidunt tempore, maiores omnis sed nesciunt eaque exercitationem deleniti quas, itaque delectus velit autem. Dicta exercitationem optio tenetur iusto eos saepe.'
    }
];

export const HomeTextTypeData = {
    id: 0,
    title: 'What is a Personality Type?',
    text: [
        {
            id: 0,
            text: "According to the theory, we each have a core set of perspectives from which we see the world and make decisions. There are two sets of dicotomies in the theory, Sensing/Intuition and Thinking/Feeling. Sensing (what is) and Intuition (what is possible) are opposites. If our preferred perspective is to look at concrete facts and focus on real experiences over abstract possibilities, then, by nature of these being opposing viewpoints, we could be said to have a preference for Sensing over intuition. Likewise, Feeling (making connections) and Thinking (making separations) are also seen as opposites. If we give more weight to logical deductions and the cutting away of data/concepts in order to place items into buckets, we consequently put less focus on the unregulated connections personified by feeling. The Personality Type theory simply separates contradictions into buckets, and then orders these buckets into generalized types. Since these are imaginary buckets formed through a logical process, typically an individual may personify some, but not all, of the generalizations about their type. With that said, it remains a valuable tool for understanding others."
        }
    ]
};

export const ImgGridWithTextData = {
    title: 'Mugs Display the Order of the Four Perspectives for Each Type',
    subtitle: 'Each Mug displays the perspectives in order of precidence, with the strongest preference at the top.',
    text1: 'According to the theory, the viewpoint we hold most dear and spend the most time seeing life from can be categeorized into one of eight buckets. From there, a second bucket can be found based on the second viewpoint from which we spend the most time. This continues down until there are four perspectives for each type.',
    text2: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus incidunt tempore, maiores omnis sed nesciunt eaque exercitationem deleniti quas, itaque delectus velit autem. Dicta exercitationem optio tenetur iusto eos saepe.',
    img1: img5,
    img2: img4,
    img3: img6
}

export const ShoppingPromptData = {
    id: 0,
    title: 'Shop our Wide Selection of Mugs',
    text: [
        {
            id: 0,
            text: "There's a mug for every type."
        }
    ]
};

export const ProductsCategories = [
    {
        id: 0,
        img: img7,
        alt: 'FILL THIS IN LATER',
        title: 'Classic',
        subtitle: 'A classic mug type',
        text: 'Click here to view our wide selection of classic mugs.'
    },
    {
        id: 2,
        img: img8,
        alt: 'FILL THIS IN LATER',
        title: 'Tall',
        subtitle: 'A tall mug type',
        text: 'Click here to view our wide selection of tall mugs.'
    }
];

export const ViewProductButtonData = {
    id: 0,
    text: 'View All Products',
    btnClass: 'outline-btn',
    linkClass: 'outline-link',
    link: '/products'
};

