import Heading from "./Heading";

const QuestionAnswer = ({ question, answer }) => {
  return (
    <div
      className="py-2 mx-2 border-bottom-1"
      style={{ borderBottom: "1px solid rgba(0,0,0,0.15)" }}
    >
      <div className="d-flex">
        <div className="fw-bold px-3">Q:</div>
        <Heading
          text={question}
          fontSize="1rem"
          fontWeight="600"
          className="ques"
        />
      </div>

      <div className="d-flex">
        <div className="fw-bold px-3">A:</div>
        <Heading
          text={answer}
          fontSize="14px"
          color="#444"
          fontWeight="400"
          className="ans"
          showLine="3"
          lineHeight="1.5rem"
        />
      </div>
    </div>
  );
};

export default QuestionAnswer;
