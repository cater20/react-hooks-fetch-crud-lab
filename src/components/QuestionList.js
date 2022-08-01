import React ,{useEffect,useState}from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({deleteItem,updateAnswer}) {

  const [questions,setQuestions]=useState([])

  useEffect(()=>{
  fetch('http://localhost:4000/questions')
  .then((res)=>res.json())
  .then((questions)=>setQuestions(questions))
  
},[questions])

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{/* display QuestionItem components here after fetching */ questions.map(question=>{
        return <QuestionItem key={question.id} question={question} deleteItem={deleteItem} updateAnswer={updateAnswer}/>
      })}</ul>
    </section>
  );
}

export default QuestionList;