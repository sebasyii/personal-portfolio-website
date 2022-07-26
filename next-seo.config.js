/**
 * @type {import('next-seo').DefaultSeoProps}
 */
const SEO = {
  title: "Developer and Creator",
  titleTemplate: "Sebastian Yii - %s",
  description:
    "Sebastian Yii. Developer and Creator. Cyber Specialist at CSA. Always learning. Always improving. Helping the web to be a better place.",
  url: "https://sebastianyii.com",
  openGraph: {
    type: "website",
    url: "https://sebastianyii.com",
    site_name: "Sebastian Yii",
  },
  twitter: {
    site: "@atlantic_base",
    cardType: "summary_large_image",
  },
  additionalLinkTags: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/favicon-16x16.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/favicon-32x32.png",
    },
    {
      rel: "apple-touch-icon",
      size: "180x180",
      href: "/apple-touch-icon.png",
    },
  ],
};

export default SEO;
