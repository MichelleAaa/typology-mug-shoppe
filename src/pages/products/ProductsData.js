import React, { Component }  from 'react';
import { BiLandscape } from 'react-icons/bi';
import { FaHandHoldingHeart } from 'react-icons/fa';
import { GiCompass } from 'react-icons/gi';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import img1 from '../../assets/cup-img/ISTJ/classic/istj7.jpg';
import img2 from '../../assets/cup-img/ENFJ/classic/enfj7.jpg';
import img3 from '../../assets/cup-img/ENFP/classic/enfp7.jpg';
import img4 from '../../assets/cup-img/ENTJ/classic/entj7.jpg';
import img5 from '../../assets/cup-img/ENTP/classic/entp7.jpg';
import img6 from '../../assets/cup-img/ESFJ/classic/esfj7.jpg';
import img7 from '../../assets/cup-img/ESFP/classic/esfp7.jpg';
import img8 from '../../assets/cup-img/ESTJ/classic/estj7.jpg';
import img9 from '../../assets/cup-img/ESTP/classic/estp7.jpg';
import img10 from '../../assets/cup-img/INFJ/classic/infj7.jpg';
import img11 from '../../assets/cup-img/INFP/classic/infp7.jpg';
import img12 from '../../assets/cup-img/INTJ/classic/intj7.jpg';
import img13 from '../../assets/cup-img/INTP/classic/intp7.jpg';
import img14 from '../../assets/cup-img/ISFJ/classic/isfj7.jpg';
import img15 from '../../assets/cup-img/ISFP/classic/isfp7.jpg';
import img16 from '../../assets/cup-img/ISTP/classic/istp7.jpg';
import img17 from '../../assets/cup-img/ISTJ/tall/istj1.jpg';
import img18 from '../../assets/cup-img/ENFJ/tall/enfj1.jpg';
import img19 from '../../assets/cup-img/ENFP/tall/enfp1.jpg';
import img20 from '../../assets/cup-img/ENTJ/tall/entj1.jpg';
import img21 from '../../assets/cup-img/ENTP/tall/entp1.jpg';
import img22 from '../../assets/cup-img/ESFJ/tall/esfj1.jpg';
import img23 from '../../assets/cup-img/ESFP/tall/esfp1.jpg';
import img24 from '../../assets/cup-img/ESTJ/tall/estj1.jpg';
import img25 from '../../assets/cup-img/ESTP/tall/estp1.jpg';
import img26 from '../../assets/cup-img/INFJ/tall/infj1.jpg';
import img27 from '../../assets/cup-img/INFP/tall/infp1.jpg';
import img28 from '../../assets/cup-img/INTJ/tall/intj1.jpg';
import img29 from '../../assets/cup-img/INTP/tall/intp1.jpg';
import img30 from '../../assets/cup-img/ISFJ/tall/isfj1.jpg';
import img31 from '../../assets/cup-img/ISFP/tall/isfp1.jpg';
import img32 from '../../assets/cup-img/ISTP/tall/istp1.jpg';
// import Button from './Button';


export const ProductsDisplayData = [
    {
        id: 100,
        name: 'ISTJ Classic Mug',
        price: 1899,
        img: img1,
        typeCategory: 'ISTJ',
        cupCategory: 'Classic'
    },
    {
        id: 101,
        name: 'ENFJ Classic Mug',
        price: 1899,
        img: img2,
        typeCategory: 'ENFJ',
        cupCategory: 'Classic'
    },
    {
        id: 102,
        name: 'ENFP Classic Mug',
        price: 1899,
        img: img3,
        typeCategory: 'ENFP',
        cupCategory: 'Classic'
    },
    {
        id: 103,
        name: 'ENTJ Classic Mug',
        price: 1899,
        img: img4,
        typeCategory: 'ENTJ',
        cupCategory: 'Classic'
    },
    {
        id: 104,
        name: 'ENTP Classic Mug',
        price: 1899,
        img: img5,
        typeCategory: 'ENTP',
        cupCategory: 'Classic'
    },
    {
        id: 105,
        name: 'ESFJ Classic Mug',
        price: 1899,
        img: img6,
        typeCategory: 'ESFJ',
        cupCategory: 'Classic'
    },
    {
        id: 106,
        name: 'ESFP Classic Mug',
        price: 1899,
        img: img7,
        typeCategory: 'ESFP',
        cupCategory: 'Classic'
    },
    {
        id: 107,
        name: 'ESTJ Classic Mug',
        price: 1899,
        img: img8,
        typeCategory: 'ESTJ',
        cupCategory: 'Classic'
    },
    {
        id: 108,
        name: 'ESTP Classic Mug',
        price: 1899,
        img: img9,
        typeCategory: 'ESTP',
        cupCategory: 'Classic'
    },
    {
        id: 109,
        name: 'INFJ Classic Mug',
        price: 1899,
        img: img10,
        typeCategory: 'INFJ',
        cupCategory: 'Classic'
    },
    {
        id: 110,
        name: 'INFP Classic Mug',
        price: 1899,
        img: img11,
        typeCategory: 'INFP',
        cupCategory: 'Classic'
    },
    {
        id: 111,
        name: 'INTJ Classic Mug',
        price: 1899,
        img: img12,
        typeCategory: 'INTJ',
        cupCategory: 'Classic'
    },
    {
        id: 112,
        name: 'INTP Classic Mug',
        price: 1899,
        img: img13,
        typeCategory: 'INTP',
        cupCategory: 'Classic'
    },
    {
        id: 113,
        name: 'ISFJ Classic Mug',
        price: 1899,
        img: img14,
        typeCategory: 'ISFJ',
        cupCategory: 'Classic'
    },
    {
        id: 114,
        name: 'ISFP Classic Mug',
        price: 1899,
        img: img15,
        typeCategory: 'ISFP',
        cupCategory: 'Classic'
    },
    {
        id: 115,
        name: 'ISTP Classic Mug',
        price: 1899,
        img: img16,
        typeCategory: 'ISTP',
        cupCategory: 'Classic'
    },

    {
        id: 200,
        name: 'ISTJ Tall Mug',
        price: 2099,
        img: img17,
        typeCategory: 'ISTJ',
        cupCategory: 'Tall'
    },
    {
        id: 201,
        name: 'ENFJ Tall Mug',
        price: 2099,
        img: img18,
        typeCategory: 'ENFJ',
        cupCategory: 'Tall'
    },
    {
        id: 202,
        name: 'ENFP Tall Mug',
        price: 2099,
        img: img19,
        typeCategory: 'ENFP',
        cupCategory: 'Tall'
    },
    {
        id: 203,
        name: 'ENTJ Tall Mug',
        price: 2099,
        img: img20,
        typeCategory: 'ENTJ',
        cupCategory: 'Tall'
    },
    {
        id: 204,
        name: 'ENTP Tall Mug',
        price: 2099,
        img: img21,
        typeCategory: 'ENTP',
        cupCategory: 'Tall'
    },
    {
        id: 205,
        name: 'ESFJ Tall Mug',
        price: 2099,
        img: img22,
        typeCategory: 'ESFJ',
        cupCategory: 'Tall'
    },
    {
        id: 206,
        name: 'ESFP Tall Mug',
        price: 2099,
        img: img23,
        typeCategory: 'ESFP',
        cupCategory: 'Tall'
    },
    {
        id: 207,
        name: 'ESTJ Tall Mug',
        price: 2099,
        img: img24,
        typeCategory: 'ESTJ',
        cupCategory: 'Tall'
    },
    {
        id: 208,
        name: 'ESTP Tall Mug',
        price: 2099,
        img: img25,
        typeCategory: 'ESTP',
        cupCategory: 'Tall'
    },
    {
        id: 209,
        name: 'INFJ Tall Mug',
        price: 2099,
        img: img26,
        typeCategory: 'INFJ',
        cupCategory: 'Tall'
    },
    {
        id: 210,
        name: 'INFP Tall Mug',
        price: 2099,
        img: img27,
        typeCategory: 'INFP',
        cupCategory: 'Tall'
    },
    {
        id: 211,
        name: 'INTJ Tall Mug',
        price: 2099,
        img: img28,
        typeCategory: 'INTJ',
        cupCategory: 'Tall'
    },
    {
        id: 212,
        name: 'INTP Tall Mug',
        price: 2099,
        img: img29,
        typeCategory: 'INTP',
        cupCategory: 'Tall'
    },
    {
        id: 213,
        name: 'ISFJ Tall Mug',
        price: 2099,
        img: img30,
        typeCategory: 'ISFJ',
        cupCategory: 'Tall'
    },
    {
        id: 214,
        name: 'ISFP Tall Mug',
        price: 2099,
        img: img31,
        typeCategory: 'ISFP',
        cupCategory: 'Tall'
    },
    {
        id: 215,
        name: 'ISTP Tall Mug',
        price: 2099,
        img: img32,
        typeCategory: 'ISTP',
        cupCategory: 'Tall'
    },
]

// export const HeaderButton = {
//     id: 0,
//     text: 'View Our Selection Now'
// }

// export const HomeCardsData = [
//     {
//         id: 0,
//         icon: <BiLandscape />,
//         title: 'Sensing',
//         subtitle: 'What Is or Was',
//         text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus incidunt tempore, maiores omnis sed nesciunt eaque exercitationem deleniti quas, itaque delectus velit autem. Dicta exercitationem optio tenetur iusto eos saepe.'
//     },
//     {
//         id: 1,
//         icon: <GiCompass />,
//         title: 'Intuition',
//         subtitle: 'What is Possible',
//         text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus incidunt tempore, maiores omnis sed nesciunt eaque exercitationem deleniti quas, itaque delectus velit autem. Dicta exercitationem optio tenetur iusto eos saepe.'
//     },
//     {
//         id: 2,
//         icon: <AiOutlineQuestionCircle />,
//         title: 'Thinking',
//         subtitle: "Making Separations",
//         text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus incidunt tempore, maiores omnis sed nesciunt eaque exercitationem deleniti quas, itaque delectus velit autem. Dicta exercitationem optio tenetur iusto eos saepe.'
//     },
//     {
//         id: 3,
//         icon: <FaHandHoldingHeart />,
//         title: "Feeling",
//         subtitle: 'Forming Connections',
//         text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus incidunt tempore, maiores omnis sed nesciunt eaque exercitationem deleniti quas, itaque delectus velit autem. Dicta exercitationem optio tenetur iusto eos saepe.'
//     }
// ];

// export const HomeTextTypeData = {
//     id: 0,
//     title: 'What is a Personality Type?',
//     text: [
//         {
//             id: 0,
//             text: "According to the theory, we each have a core set of perspectives from which we see the world and make decisions. There are two sets of dicotomies in the theory, Sensing/Intuition and Thinking/Feeling. Sensing (what is) and Intuition (what is possible) are opposites. If our preferred perspective is to look at concrete facts and focus on real experiences over abstract possibilities, then, by nature of these being opposing viewpoints, we could be said to have a preference for Sensing over intuition. Likewise, Feeling (making connections) and Thinking (making separations) are also seen as opposites. If we give more weight to logical deductions and the cutting away of data/concepts in order to place items into buckets, we consequently put less focus on the unregulated connections personified by feeling. The Personality Type theory simply separates contradictions into buckets, and then orders these buckets into generalized types. Since these are imaginary buckets formed through a logical process, typically an individual may personify some, but not all, of the generalizations about their type. With that said, it remains a valuable tool for understanding others."
//         }
//     ]
// };

// export const ImgGridWithTextData = {
//     title: 'Mugs Display the Order of the Four Perspectives for Each Type',
//     subtitle: 'Each Mug displays the perspectives in order of precidence, with the strongest preference at the top.',
//     text1: 'According to the theory, the viewpoint we hold most dear and spend the most time seeing life from can be categeorized into one of eight buckets. From there, a second bucket can be found based on the second viewpoint from which we spend the most time. This continues down until there are four perspectives for each type.',
//     text2: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus incidunt tempore, maiores omnis sed nesciunt eaque exercitationem deleniti quas, itaque delectus velit autem. Dicta exercitationem optio tenetur iusto eos saepe.',
//     img1: img1,
//     img2: img2,
//     img3: img3
// }

// export const ShoppingPromptData = {
//     id: 0,
//     title: 'Shop our Wide Selection of Mugs',
//     text: [
//         {
//             id: 0,
//             text: "There's a mug for every type."
//         }
//     ]
// };

// export const ProductsCategories = [
//     {
//         id: 0,
//         img: img1,
//         alt: 'FILL THIS IN LATER',
//         title: 'Classic',
//         subtitle: 'A classic mug type',
//         text: 'Click here to view our wide selection of classic mugs.'
//     },
//     {
//         id: 2,
//         img: img2,
//         alt: 'FILL THIS IN LATER',
//         title: 'Tall',
//         subtitle: 'A tall mug type',
//         text: 'Click here to view our wide selection of tall mugs.'
//     }
// ];

// export const ViewProductButtonData = {
//     id: 0,
//     text: 'View All Products'
// };