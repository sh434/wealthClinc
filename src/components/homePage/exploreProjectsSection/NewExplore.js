import "./newExplore.css";

const EXPLORE_CARD_DATA = [
  {
    title: "LUXURY",
    frontClass: "flip-card-front",
    backClass: "flip-card-back",
  },
  {
    title: "MID-RANGE",
    frontClass: "flip-card-front1",
    backClass: "flip-card-back1",
  },
  {
    title: "AFFORDABLE",
    frontClass: "flip-card-front2",
    backClass: "flip-card-back2",
  },
  {
    title: "READY TO MOVE IN",
    frontClass: "flip-card-front",
    backClass: "flip-card-back",
  },
];

const NewExplore = () => {
  return (
    <div className="container-fluid bg-newExplore">
      <div className="container">
        <div className="row">
          {EXPLORE_CARD_DATA?.map((card, index) => (
            <div className="col-md-3" key={index}>
              <FlipCard data={card} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewExplore;

export function FlipCard({ data }) {
  const { frontClass, backClass, title } = data;
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className={frontClass}>
          {/* <p className="title">FLIP CARD</p>
          <p>Hover Me</p> */}
        </div>
        <div className={backClass}>
          <p>{title}</p>
        </div>
      </div>
    </div>
  );
}
