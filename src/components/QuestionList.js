import React ,{useEffect,useState}from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {
 const[questions,setQuestions]=useState([]);

  useEffect(()=>{
    fetch("http://localhost:4000/questions")
    .then((Response)=>Response.json())
    .then((questions)=>{setQuestions(questions)})
  },[]);


  function handleDeleteQuestion(deletedQuestion){
    const remainingQuestions = questions.filter((question)=>{
      return question.id !== deletedQuestion.id
    })
    setQuestions(remainingQuestions)
  }

function handleUpdatedQuestion(updatedQuestion){
const updatedQuestions=questions.map((question)=>{
  if (question.id === updatedQuestion.id) {
    return updatedQuestion
  }else{
    return question
  }
})
setQuestions(updatedQuestions)

}

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questions.map((question)=>(<QuestionItem 
      key={question.id}
      question={question}
      
      onDeletedQuestion={handleDeleteQuestion}
      onUpdatedQuestion={handleUpdatedQuestion}

      
      />))}</ul>
    </section>
  );
}

export default QuestionList;
