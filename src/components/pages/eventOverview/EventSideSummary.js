import CkEditorContentDisplay from "../../globalComponents/CkEditorContentDisplay/CkEditorContentDisplay";

const EventSideSummary = ({ description }) => {
  return (
    <div className="">
      <div className="bg-dark text-white p-2  mb-3">About Event</div>
      <p style={{ color: "#888" }}>
        {description?.map((item, idx) => {
          return <CkEditorContentDisplay key={idx} content={item} />;
        })}
      </p>
    </div>
  );
};

export default EventSideSummary;
