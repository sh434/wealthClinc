// import Heading from "../../../globalComponents/molecules/Heading";

const LocationMap = ({ data }) => {
  if (!data?.Location_Map) return <div>No Address</div>;
  const { Location_Map } = data?.Location_Map;
  // const address = "DLF New Town Heights";

  return (
    <div className="container">
      <div className="p-2 row center-item border">
        {/* <iframe
          title="location by name"
          src={`${Location_Map}`} //{`https://www.google.com/maps?q=${address}&output=embed`}
          style={{ border: "none" }}
          width="100%"
          height="420px"
        /> */}
        <div dangerouslySetInnerHTML={{ __html: Location_Map }} />
      </div>
    </div>
  );
};

export default LocationMap;
