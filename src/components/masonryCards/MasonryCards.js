import Masonry from "@mui/lab/Masonry";
import MasonryCard from "./MasonryCard";
import useWindowSize from "../../hooks/useWindowSize";

const size = [
  "450",
  "490",
  "400",
  "420",
  "450",
  "450",
  "350",
  "400",
  "600",
  "450",
  "500",
  "550",
  "450",
  "550",
  "550",
  "600",
  "550",
];

const MasonryCards = ({ data, imgType }) => {
  //imgType if if have option of properties field like 'img1' field 'img2' field
  const [isMobileSize] = useWindowSize();
  const columnCount = isMobileSize < 576 ? 2 : 4;
  const spacing = isMobileSize < 576 ? 0.25 : 2;

  return (
    <div style={{ width: "100%", minHeight: 829 }}>
      <Masonry columns={columnCount} spacing={spacing} sequential>
        {data?.map((item, idx) => {
          return (
            <MasonryCard
              key={idx}
              item={{ item, size: size[idx % data.length] }}
              imgType={imgType}
            />
          );
        })}
      </Masonry>
    </div>
  );
};

export default MasonryCards;
