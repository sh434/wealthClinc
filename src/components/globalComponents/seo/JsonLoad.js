import React from "react";
import { Helmet } from "react-helmet";

const JsonLoad = ({ page }) => {
  const jsonLdData = {
    "@context": "http://www.schema.org",
    "@type": "RealEstateAgent",
    name: "WealthClinic",
    url: window.location.href,
    sameAs: [
      "https://www.facebook.com/WEALTHCLINICDOTCOM/",
      "https://twitter.com/WealthClinic1",
      "https://www.instagram.com/wealthclinicofficial/",
      "https://www.youtube.com/channel/UCz9FabhLgR4hzWHiB2xNMXQ/videos?app=desktop",
    ],
    logo: "https://www.wealth-clinic.com/static/media/WC_PRIMARY.7c30f07e7550b72e64b9.png",
    priceRange: "$$$$",
    image:
      "https://www.wealth-clinic.com/static/media/WC_PRIMARY.7c30f07e7550b72e64b9.png",
    description:
      "Wealth Clinic is on a mission to provide One Stop Solution to all your realty requirements – in a quick, simple, and reliable manner. We want to make buying or selling properties in India a breeze in the park – minus the worries and complications often associated with this sector. We at Wealth Clinic aim to offer every builder, buyer, and seller the best prop-tech platform for them to get easy and effective solutions to their realty aspirations. We don’t want to be just another realty consultancy with the sole motto of making money. We believe in reality with Relationships. We want to grow with our clients and partners, investors and associates – much like a family – by building a long-lasting relationship based on effective delivery of their realty aspirations with trust and accountability.",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "1401, 4th Floor, Tower-1, Express Trade Tower-2, B-36, Sector-132",
      addressLocality: "Noida",
      addressRegion: "Uttar Pradesh",
      postalCode: "201301",
      addressCountry: "India",
    },
    hasMap: "https://g.co/kgs/coEYqzB",
    openingHours:
      "Mo 10:00-18:30 We 10:00-18:30 Th 10:00-18:30 Fr 10:00-18:30 Sa 10:00-18:30 Su 10:00-18:30",
    telephone: "+919089222000",
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(jsonLdData)}</script>
    </Helmet>
  );
};

export default JsonLoad;
