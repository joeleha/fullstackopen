import React from "react";

const Header = (props) => {
  return (
    <h1>{props.course.name}</h1>
  );
};

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  );
};

const Content = (props) => {
  const array = [];
  let i = 0;
  props.parts.forEach((element) => {
    array.push(<Part part={props.parts[i]} />);
    i += 1;
  });
  return array;
};

const Total = (props) => {
  let total = 0;
  props.parts.forEach((element) => {
    total += element.exercises;
  });
  return (
    <p>Number of exercises {total}</p>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default App;
