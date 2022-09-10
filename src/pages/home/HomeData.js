import { BiLandscape } from 'react-icons/bi';
import { FaHandHoldingHeart } from 'react-icons/fa';
import { GiCompass } from 'react-icons/gi';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
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
            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus incidunt tempore, maiores omnis sed nesciunt eaque exercitationem deleniti quas, itaque delectus velit autem. Dicta exercitationem optio tenetur iusto eos saepe. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus incidunt tempore, maiores omnis sed nesciunt eaque exercitationem deleniti quas, itaque delectus velit autem. Dicta exercitationem optio tenetur iusto eos saepe. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus incidunt tempore, maiores omnis sed nesciunt eaque exercitationem deleniti quas, itaque delectus velit autem. Dicta exercitationem optio tenetur iusto eos saepe."
        }
    ]
};

export const ImgGridWithTextData = {
    title: 'Mugs Display the Order of the Four Perspectives',
    subtitle: 'Each Mug displays the perspectives in order of precidence, with the strongest preference at the top.',
    text1: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus incidunt tempore, maiores omnis sed nesciunt eaque exercitationem deleniti quas, itaque delectus velit autem. Dicta exercitationem optio tenetur iusto eos saepe.',
    text2: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus incidunt tempore, maiores omnis sed nesciunt eaque exercitationem deleniti quas, itaque delectus velit autem.',
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
        title: 'Classic',
        subtitle: 'A Classic Mug Type',
        text: 'Click here to view our wide selection of classic mugs.'
    },
    {
        id: 2,
        img: img8,
        title: 'Tall',
        subtitle: 'A Tall Mug Type',
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

