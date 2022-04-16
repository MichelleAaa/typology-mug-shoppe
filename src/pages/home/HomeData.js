import React, { Component }  from 'react';
import { BiLandscape } from 'react-icons/bi';
import { FaHandHoldingHeart } from 'react-icons/fa';
import { GiCompass } from 'react-icons/gi';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import img1 from '../../assets/page-img/esfj-table.png';
import img2 from '../../assets/page-img/intj-leaves.png';
import img3 from '../../assets/page-img/infp-pour-cropped.png';
// import Button from './Button';

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

export const ImgGridWithTextData = {
    title: 'Mugs Display the Four-Function Cognitive Process Stack',
    subtitle: 'Based on the theory, each personality type has a different order of preference for performing the cognitive processes.',
    text1: 'On each mug the cognitive processes are displayed in order of preference, with greatest at the top to least at the bottom.',
    text2: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus incidunt tempore, maiores omnis sed nesciunt eaque exercitationem deleniti quas, itaque delectus velit autem. Dicta exercitationem optio tenetur iusto eos saepe.',
    img1: img1,
    img2: img2,
    img3: img3
}

