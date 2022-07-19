import React ,{useEffect,useState}from "react";

function QuestionList() {
  const[questionList,setQuestionList]=useState
  
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{/* display QuestionItem components here after fetching */}</ul>
    </section>
  );
}

export default QuestionList;
