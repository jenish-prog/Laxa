import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
    title = 'Laxa Tech | Web Design & Development Agency in Kanyakumari, Tamil Nadu',
    description = 'Laxa Tech is a digital design and web development agency offering custom websites, UI/UX design, and full-stack solutions for businesses across India. Based in Tamil Nadu.',
    keywords = 'web design agency Tamil Nadu, website development Kanyakumari, affordable web development India, freelance React developer, UI UX design agency South India, Laxa Tech',
    name = 'Laxa Tech',
    type = 'website'
}) => {
    return (
        <Helmet>
            { /* Standard metadata tags */}
            <title>{title}</title>
            <meta name='description' content={description} />
            <meta name='keywords' content={keywords} />

            { /* End standard metadata tags */}

            { /* Facebook tags */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            { /* End Facebook tags */}

            { /* Twitter tags */}
            <meta name="twitter:creator" content={name} />
            <meta name="twitter:card" content={type} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            { /* End Twitter tags */}
        </Helmet>
    );
}

export default SEO;
