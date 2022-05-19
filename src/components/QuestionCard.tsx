import React from "react";
import { AnswerObject } from "../App";
import { Wrapper, ButtonWrapper } from "./QuestionCard.styles";

type cardProps = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNr: number;
  totalQuestion: number;
};

const QuestionCard: React.FunctionComponent<cardProps> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNr,
  totalQuestion,
}) => {
  return (
    <Wrapper>
      <p className="number">
        Question:{questionNr}/{totalQuestion}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }} />
      <div>
        {answers.map((answer) => (
          <ButtonWrapper
            key={answer}
            correct={userAnswer?.correctAnswer === answer}
            userClicked={userAnswer?.answer === answer}
          >
            <button
              disabled={userAnswer ? true : false}
              value={answer}
              onClick={callback}
            >
              <span dangerouslySetInnerHTML={{ __html: answer }}></span>
            </button>
          </ButtonWrapper>
        ))}
      </div>
    </Wrapper>
  );
};

export default QuestionCard;
