import { DefaultSeoProps } from 'next-seo';

const defaultSEOConfig: DefaultSeoProps = {
  title: "Sebastian Yii's Website",
  titleTemplate: '%s',
  defaultTitle: 'Sebastian Yii',
  description: "Sebastian Yii's Website",
  canonical: 'https://sebastianyii.com',
  openGraph: {
    url: 'sebastianyii.com',
    title: "Sebastian Yii's Website",
    description: "Sebastian Yii's Website",
    site_name: 'sebastian-yii-website',
    type: 'website',
  },
};

export default defaultSEOConfig;
