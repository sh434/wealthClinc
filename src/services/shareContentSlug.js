import { slugFormat } from "./slug";

const handleShareClick = async (url, title, textMsg) => {
  const websiteLink = slugFormat(url);
  // const imageUrl =
  //   "https://new.wealth-clinic.com/static/media/WC_PRIMARY.7c30f07e7550b72e64b9.png";

  const shareMessage = `Hey 👋,
    \nCheckout this property`;

  const shareData = {
    title: title || "Wealth Clinic",
    text: textMsg || shareMessage,
    url: websiteLink,
  };

  if (navigator.share) {
    navigator
      .share(shareData)
      .then(() => console.log("Shared successfully"))
      .catch((error) => console.error("Error sharing:", error));
  } else {
  }
};

export default handleShareClick;

export const shareContent = async (title, text, url) => {
  if (navigator.share) {
    try {
      await navigator.share({
        title: title,
        text: text,
        url: url,
      });
      console.log("Content shared successfully");
    } catch (error) {
      console.error("Error sharing content:", error);
    }
  } else {
    alert("Sharing not supported on this browser");
  }
};
