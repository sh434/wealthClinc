import QuestionAnswer from "../../../globalComponents/molecules/QuestionAnswer";

const Faqs = ({ data }) => {
  const FAQS = data?.Specifications;
  return (
    <div>
      {FAQS?.map((item) => (
        <QuestionAnswer
          key={item?.id}
          question={item?.Title}
          answer={item?.Descriptions}
        />
      ))}
    </div>
  );
};

export default Faqs;
