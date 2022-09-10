import React from 'react';
import { AboutHeaderData, AboutTextData, AboutImgGridData, GuaranteeData } from './AboutData';
import HeaderSmall from '../../components/HeaderSmall';
import HeadingWithText from '../../components/HeadingWithText';
import BeigeBackgroundText from '../../components/BeigeBackgroundText';
import ImgGridWithText from '../../components/ImageGridWithText';
import SubscriptionSmall from '../../components/SubscriptionSmall';

function AboutPage() {
    return (
        <React.Fragment>
            <HeaderSmall headerData={AboutHeaderData} />
            <div className="py-5"></div>
            <main>
                <HeadingWithText textData={AboutTextData} />
                <div className="pt-5"></div>
                <BeigeBackgroundText textData={GuaranteeData} />
                <div className="pt-5"></div>
                <ImgGridWithText textData={AboutImgGridData} />
            </main>
            <SubscriptionSmall />
        </React.Fragment>
    );
}

export default AboutPage;