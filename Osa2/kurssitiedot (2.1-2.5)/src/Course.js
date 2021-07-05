import React from "react";


const Course = ({ course }) => {

  const Header = (props) => {
    return (
      <h1>{props.course}</h1>
    );
  };

  const Part = (props) => {
    return (
      <li>{props.name} {props.exercises}</li>
    )
  };

  const Total = (props) => {
    let total = props.parts.reduce((acc, val) => {
      return acc + val.exercises;
    }, 0);
    return (
      <p><strong>total of {total} exercises</strong></p>
    );
  };

  return (
    <div>
      <Header course={course.name} />
      <ul>
        {course.parts.map(part =>
        <Part key={part.id} name={part.name} exercises={part.exercises} />
        )}
      </ul>
      <Total parts={course.parts} />
    </div>
  );
};

export default Course;