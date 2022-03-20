import React from "react";
import { useSelector } from "react-redux";
import { Table } from "reactstrap";

function QuestionList() {
  // const date = new Date();
  // const yyyy = date.getFullYear();
  // const mm = date.getMonth();
  // const dd = date.getDate();

  const questions = useSelector((state) => state.questionReducer.questions);

  return (
    <div>
      <Table striped className="question-list-table">
        <thead>
          <tr>
            <th>No</th>
            <th>제 목</th>
            <th>작성자</th>
            <th>작성일</th>
          </tr>
        </thead>
        <tbody>
          {questions.map((question) => (
            <tr>
              <th scope="row">{question.id}</th>
              <td>{question.content}</td>
              <td>{question.writer}</td>
              <td>{question.date}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
export default QuestionList;
