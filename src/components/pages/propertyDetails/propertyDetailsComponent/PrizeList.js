import { EMPTY_ARRAY } from "../../../../assets/constants";
import { CallBackForm } from "../../../globalComponents/CallBackPopUpForm/CallBackPopUpForm";

const PrizeList = ({ data }) => {
  const PRICES_PDF = data?.Add_Price_List?.Price_List?.data || EMPTY_ARRAY;

  if (PRICES_PDF.length <= 0)
    return (
      <CallBackForm
        hideCloseBtn={false}
        styleForm="border"
        formBtnText={"Request Download"}
      />
    );

  return (
    <div className={` col-md-12  col-sm-12 col-xs-12`}>
      <div>
        {/* <ButtonDarkBlue
          name="Download Price List"
          className={"px-3 rounded-2"}
        /> */}
        <div>
          {PRICES_PDF?.map((item) => {
            const { url } = item?.attributes;
            return (
              <div className="">
                <object
                  data={url}
                  type="application/pdf"
                  width="100%"
                  height="500px"
                >
                  <p>
                    Your browser does not support PDFs.{" "}
                    <a href={url}>Download the PDF</a>.
                  </p>
                </object>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PrizeList;

// export function PrizeListForm() {
//   return (
//     <div className={` col-md-12  col-sm-12 col-xs-12`}>
//       <div className="d-flex my-2 ">
//         <Heading
//           text={"Please Enter Your Details"}
//           fontSize={"1.rem"}
//           color="111"
//           fontWeight="600"
//           style={{ lineHeight: "1.5rem" }}
//         />
//       </div>

//       <form
//         onClick={(e) => e.preventDefault()}
//         className={`col-md-5 border rounded-3 p-3`}
//       >
//         <InputCustom placeholder="Enter Name" className="px-3 rounded-2" />
//         <InputCustom placeholder="Enter Email" className="px-3 rounded-2" />

//         <ButtonDarkBlue
//           name="Contact For Price List"
//           className={"px-3 rounded-2"}
//         />
//       </form>
//     </div>
//   );
// }
