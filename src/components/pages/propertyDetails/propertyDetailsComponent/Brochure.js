import { EMPTY_ARRAY } from "../../../../assets/constants";

import PdfViewer from "./../../../globalComponents/PdfViewer/PdfViewer";

import { CallBackForm } from "./../../../globalComponents/CallBackPopUpForm/CallBackPopUpForm";

const Brochure = ({ data, className }) => {
  const Brochures = data?.Brochures || EMPTY_ARRAY;

  if (Brochures.length <= 0)
    return (
      <CallBackForm
        hideCloseBtn={false}
        styleForm="border"
        formBtnText="Request Download"
      />
    );

  let pdfUrl = Brochures[0]?.Brochure?.data?.attributes?.url;

  return (
    <div className={` col-md-12  col-sm-12 col-xs-12`}>
      <PdfViewer w="100%" h="500px" pdfUrl={pdfUrl} />
    </div>
  );
};

export default Brochure;

// export function BrochureListForm() {
//   return (
//     <div className={` col-md-12  col-sm-12 col-xs-12`}>
//       <div className="d-flex my-2 ">
//         <Heading
//           text={"Please Enter Your Details"}
//           fontSize={"1rem"}
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

//         <ButtonDarkBlue name="Download Brochure" className={"px-3 rounded-2"} />
//       </form>
//     </div>
//   );
// }
