import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)
const StatisticLine = ({ name, value }) => <div>{name} {value}</div>
const Statistics = ({good, bad, neutral, total}) => 
{
  if (total === 0) {
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
  <div> 
<h1>statistics</h1>
<table>
<tbody> 
 <tr>
<td>good</td>
<td>{good}</td>
</tr> 
<tr>
<td>neutral</td>
<td>{neutral}</td>
</tr>   
<tr>
<td>bad</td>
<td>{bad}</td>
</tr> 
<tr>
<td>all</td>
<td>{total}</td>
</tr>  
<tr>
<td>average</td>
<td>{(good + (bad * -1)) / total}</td>
</tr>
<tr>
<td>positive</td>
<td>{(good)/total * 100 + " %"} </td>
</tr>
</tbody>
      </table>
      </div> 
      
  )
}
  
const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const total = good + bad + neutral
  const handleGoodClick= () => {
    setGood(good + 1)
  }
  const totalNumGood = 0
  const totalNumBad = 0
  const totalNumNeutral = 0
  const totalNum= () => {
    
     good.forEach(element => {
     totalNumGood++ 
    });
    bad.forEach(element => {
      totalNumBad = totalNumBad -1 
     });

  }
  const handleBadClick= () => {
    setBad(bad + 1)
  }
  const handleNeutralClick= () => {
    setNeutral(neutral + 1) 
  }
  return (
    <div>
      <div>
      <h1>give feedback</h1>
        <Button handleClick={handleGoodClick} text='good' />
        <Button handleClick={handleNeutralClick} text='neutral' />
        <Button handleClick={handleBadClick} text='bad' />
        <Statistics good={good} bad={bad} neutral={neutral} total={total} />
      </div>
    </div>
  )
}

export default App
