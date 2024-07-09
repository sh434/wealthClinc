import AwardCard from "./awardComponents/AwardCard";

import useApiFetcher from "../../../hooks/useApiFetcher";
import { API_URL, getFullUrl } from "../../../assets/constants/apiUrls";

const Awards = () => {
  const AWARDS_API_URL = getFullUrl(`${API_URL.AWARDS}?populate=*`);
  const [awards, error, isLoading] = useApiFetcher(AWARDS_API_URL);
  if (isLoading) return null;
  if (error) return <div>{error.message}</div>;
  const AWARDS_DATA = awards;

  return (
    <div className="container-fluid my-5">
      <div className="row d-flex justify-content-center">
        <div className="row" style={{justifyContent:"center"}}>
          <div className="col-md-4" >
          <h3 >Company Awards</h3>
          </div>

        </div>
      
        {AWARDS_DATA?.map((item, idx) => (
          <AwardCard key={idx} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Awards;
