import React from 'react';
import { AboutHeaderData, AboutTextData, AboutImgGridData, GuaranteeData } from './AboutData';
import HeaderSmall from '../../components/HeaderSmall';
import HeadingWithText from '../../components/HeadingWithText';
import BeigeBackgroundText from '../../components/BeigeBackgroundText';
import ImgGridWithText from '../../components/ImageGridWithText';
import SubscriptionSmall from '../../components/SubscriptionSmall';

const AboutHeader = () => {
    return (
        <HeaderSmall headerData={AboutHeaderData} />
    )
}

const AboutTextDetail = () => {
    return (
        <HeadingWithText textData={AboutTextData} />
    )
}

const RefundDetail = () => {
    return (
        <BeigeBackgroundText textData={GuaranteeData} />
    )
}

const AboutImgGrid = () => {
    return (
        <ImgGridWithText textData={AboutImgGridData} />
    )
}

function AboutPage() {
    return (
        <>
            <AboutHeader />
            <div className="py-5"></div>
            <AboutTextDetail />
            <div className="pt-5"></div>
            <RefundDetail />
            <div className="pt-5"></div>
            <AboutImgGrid />
            <SubscriptionSmall />
        </>
    );
}

export default AboutPage;