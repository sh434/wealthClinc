import { useEffect, useState } from "react";
import Disclaimer from "../disclaimer/Disclaimer";
import STORAGE_KEY from "../../../assets/constants/storageKey";

const CookiesPolicy = () => {
  const [isCookiesPolicyAccepted, setIsCookiesPolicyAccepted] = useState(false);
  useEffect(() => {
    const isCookiesPolicy = JSON.parse(
      localStorage.getItem(STORAGE_KEY.COOKIES_POLICY)
    );
    setIsCookiesPolicyAccepted(isCookiesPolicy);
  }, []);

  const handleCookiesPolicy = () => {
    localStorage.setItem(STORAGE_KEY.COOKIES_POLICY, true);
    setIsCookiesPolicyAccepted(true);
  };

  return (
    <>
      {!isCookiesPolicyAccepted && (
        <Disclaimer onClickPolicy={handleCookiesPolicy} />
      )}
    </>
  );
};

export default CookiesPolicy;
