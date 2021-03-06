import { Global } from "@emotion/react"

// eslint-disable-next-line
const Fonts = () => (
    <Global
        styles={`
            /* Copied from https://fonts.googleapis.com/css2?family=Baloo%20Tammudu%202:wght@300;400;500;700&display=swap */

            /* telugu */
            @font-face {
                font-family: 'baloo-tammudu-2';
                font-style: normal;
                font-weight: 400;
                font-display: swap;
                src: url(https://fonts.gstatic.com/s/balootammudu2/v4/1Pt2g8TIS_SAmkLguUdFP8UaJcKO3nsX2aE.woff2) format('woff2');
                unicode-range: U+0951-0952, U+0964-0965, U+0C00-0C7F, U+1CDA, U+200C-200D, U+25CC;
            }
            /* vietnamese */
            @font-face {
                font-family: 'baloo-tammudu-2';
                font-style: normal;
                font-weight: 400;
                font-display: swap;
                src: url(https://fonts.gstatic.com/s/balootammudu2/v4/1Pt2g8TIS_SAmkLguUdFP8UaJcKOzXsX2aE.woff2) format('woff2');
                unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
            }
            /* latin-ext */
            @font-face {
                font-family: 'baloo-tammudu-2';
                font-style: normal;
                font-weight: 400;
                font-display: swap;
                src: url(https://fonts.gstatic.com/s/balootammudu2/v4/1Pt2g8TIS_SAmkLguUdFP8UaJcKOzHsX2aE.woff2) format('woff2');
                unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
            }
            /* latin */
            @font-face {
                font-family: 'baloo-tammudu-2';
                font-style: normal;
                font-weight: 400;
                font-display: swap;
                src: url(https://fonts.gstatic.com/s/balootammudu2/v4/1Pt2g8TIS_SAmkLguUdFP8UaJcKOwnsX.woff2) format('woff2');
                unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
            }
            /* telugu */
            @font-face {
                font-family: 'baloo-tammudu-2';
                font-style: normal;
                font-weight: 500;
                font-display: swap;
                src: url(https://fonts.gstatic.com/s/balootammudu2/v4/1Ptzg8TIS_SAmkLguUdFP8UaJcKGMVgC-oCKJrU.woff2) format('woff2');
                unicode-range: U+0951-0952, U+0964-0965, U+0C00-0C7F, U+1CDA, U+200C-200D, U+25CC;
            }
            /* vietnamese */
            @font-face {
                font-family: 'baloo-tammudu-2';
                font-style: normal;
                font-weight: 500;
                font-display: swap;
                src: url(https://fonts.gstatic.com/s/balootammudu2/v4/1Ptzg8TIS_SAmkLguUdFP8UaJcKGMVgC6YCKJrU.woff2) format('woff2');
                unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
            }
            /* latin-ext */
            @font-face {
                font-family: 'baloo-tammudu-2';
                font-style: normal;
                font-weight: 500;
                font-display: swap;
                src: url(https://fonts.gstatic.com/s/balootammudu2/v4/1Ptzg8TIS_SAmkLguUdFP8UaJcKGMVgC6ICKJrU.woff2) format('woff2');
                unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
            }
            /* latin */
            @font-face {
                font-family: 'baloo-tammudu-2';
                font-style: normal;
                font-weight: 500;
                font-display: swap;
                src: url(https://fonts.gstatic.com/s/balootammudu2/v4/1Ptzg8TIS_SAmkLguUdFP8UaJcKGMVgC5oCK.woff2) format('woff2');
                unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
            }
            /* telugu */
            @font-face {
                font-family: 'baloo-tammudu-2';
                font-style: normal;
                font-weight: 700;
                font-display: swap;
                src: url(https://fonts.gstatic.com/s/balootammudu2/v4/1Ptzg8TIS_SAmkLguUdFP8UaJcKGeV4C-oCKJrU.woff2) format('woff2');
                unicode-range: U+0951-0952, U+0964-0965, U+0C00-0C7F, U+1CDA, U+200C-200D, U+25CC;
            }
            /* vietnamese */
            @font-face {
                font-family: 'baloo-tammudu-2';
                font-style: normal;
                font-weight: 700;
                font-display: swap;
                src: url(https://fonts.gstatic.com/s/balootammudu2/v4/1Ptzg8TIS_SAmkLguUdFP8UaJcKGeV4C6YCKJrU.woff2) format('woff2');
                unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
            }
            /* latin-ext */
            @font-face {
                font-family: 'baloo-tammudu-2';
                font-style: normal;
                font-weight: 700;
                font-display: swap;
                src: url(https://fonts.gstatic.com/s/balootammudu2/v4/1Ptzg8TIS_SAmkLguUdFP8UaJcKGeV4C6ICKJrU.woff2) format('woff2');
                unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
            }
            /* latin */
            @font-face {
                font-family: 'baloo-tammudu-2';
                font-style: normal;
                font-weight: 700;
                font-display: swap;
                src: url(https://fonts.gstatic.com/s/balootammudu2/v4/1Ptzg8TIS_SAmkLguUdFP8UaJcKGeV4C5oCK.woff2) format('woff2');
                unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
            }
        `}
    />
);

export default Fonts;