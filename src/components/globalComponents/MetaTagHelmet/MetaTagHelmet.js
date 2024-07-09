import { Helmet } from "react-helmet";

const MetaTagHelmet = ({
  title: metaTitle,
  description: metaDescription,
  link: metaLink,
}) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{metaTitle ? metaTitle : ""}</title>
      <meta name="description" content={metaDescription || ""} />
      <link rel="canonical" href={metaLink || window.location.href} />
    </Helmet>
  );
};

export default MetaTagHelmet;
