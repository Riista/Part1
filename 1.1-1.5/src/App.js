const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}
const Part = (props) => {
  return (
    
      <p>
        {props.part} {props.ex}
      </p>
    
  )
}
const Content = (props) => {
  return (
    <div>
     <Part part={props.cpart1} ex={props.cex1}/>
     <Part part={props.cpart2} ex={props.cex2}/>
     <Part part={props.cpart3} ex={props.cex3}/>
    </div>
  )
}
const Total = (props) => {
  return (
    
      <p>Number of exercises {props.y1 + props.y2 + props.y3}</p>
    
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
     <Content cpart1={course.parts[0].name} cex1={course.parts[0].exercises} cpart2={course.parts[1].name} cex2={course.parts[1].exercises} cpart3={course.parts[2].name} cex3={course.parts[2].exercises} />
     <Total y1={course.parts[0].exercises} y2={course.parts[1].exercises} y3={course.parts[2].exercises} />
    </div>
  )
}

export default App
