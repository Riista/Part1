import { useState } from 'react'
const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)
function generateRandomInteger(max, min) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const votes = new Uint8Array(7); 
const copy = [...votes]
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]
  const max = Math.max(...copy);
  const index = copy.indexOf(max);
  const handleNextClick= () => {
  const votesTotal = ({vote}) => (
  copy.forEach(vote+vote)
  )
  const mostVotes = (most) =>
  {
    if (votesTotal === 0) {
      return (
        <div>
          <h1>Anecdote with most votes</h1>
          <p>No votes given</p>
        </div>
      )
    }
    return (
      <div> 
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[index]} </p>
      <p>has {most} votes</p>
      </div> 
    )
  }

  
    setSelected(generateRandomInteger(6, 0))
    }
  const handleVoteClick= () => {
    
    setSelectedVote(copy[selected]++);
  }
  const [selected, setSelected] = useState(0)
  const [selectedVote, setSelectedVote] = useState(1)
  
  return (
    <div>
      <h1>Anecdote of the day</h1>
       <p>{anecdotes[selected]} </p>
       <p>has {copy[selected]} votes</p>
      <Button handleClick={handleVoteClick} text={"vote"} />
      <Button handleClick={handleNextClick} text={"next anecdote"} />
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[index]} </p>
      <p>has {max} votes</p>
      </div>
  )
  }
export default App
