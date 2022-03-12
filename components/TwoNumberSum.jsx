import React, {useState} from 'react'
import { CodeBlock, obsidian } from "react-code-blocks";
//8.47
const TwoNumberSum = () => {
  const [option1Answer, setOption1Answer] = useState([])
  const [array, setArray] = useState('[3, 5, -4, 8, 11, -1, 6]')
  const [target, setTarget] = useState(10)

  let startTime = performance.now()
  console.log(startTime)
  function option1(array, target){
    let myArray = JSON.parse(array)
    let myTarget = Number(target)
    for(let a = 0; a <= myArray.length; a++){
      for(let b = 0; b < myArray.length; b++){
        if(myArray[a] != myArray[b] && myArray[a] + myArray[b] === myTarget) 
        return "Sum: " + myArray[a] + "+" + myArray[b] + " = " + myTarget
      }
    }
  }
  let endTime = performance.now()
  console.log(endTime)
  console.log(startTime - endTime)

  //console.log(JSON.parse(array))
  //console.log(target)
  //console.log(option1(array, target))
  return (
    <div>
        <h2>Explanation:</h2>
        <p>This problem gives us an array of distinct numbers (meaning no number is repeated) and it also gives another interger the represents a target sum. The goal is then to write a function that searches the array and determines whether or not there is a pair of numbers the sums together to match the target interger.</p>

        <h2>Example:</h2>
        <p>[3, 5, -4, 8, 11, -1, 6], 10</p>
        <p>The answer we are looking for is 11 + -1 = 10</p>

        <h2>Option 1:</h2>
        <p>We could use two <b>for loops</b> and traverse the array twice to find the sum</p>
        <p>Unfortunatly this is not very optimal from a time prospective</p>
        <p>O n^2</p>

        <div className='p-3 text-3xl space-x-2'>
          <input className="p-1 outline-none" placeholder={array} onChange={(e) => setArray("[" + e.target.value + "]")}/>
          <input className="p-1 outline-none" placeholder={target} onChange={(e) => setTarget(e.target.value)}/>
          <button className="p-1 bg-green-600 rounded" onClick={() => {setOption1Answer(option1(array, target))}}>Run</button>
          <p className='inline'>{option1Answer}</p>
        </div>


        <CodeBlock
          text={  function option1(array, target){
            for(let a = 0; a <= array.length; a++){
              for(let b = 0; b < array.length; b++){
                if(array[a] != array[b] && array[a] + array[b] === target) 
                return [array[a], array[b]]
              }
            }
          }}
          language="jsx"
          showLineNumbers={false}
          theme={obsidian}
        />
        <hr/>
        <h2>Option 2:</h2>
        <p>Hash Table which can be represented as a javascript object</p>
        <p>This will require extra space but will make our algorithm faster</p>
        <p>TargetSum = 10</p>
        <p>CurrentNum = x</p>
        <p>Answer = y</p>
        <p>x + y = 10</p>
        <p>y = 10 - x</p>

        <hr/>
        <p className='font-bold'>Realated Topics:</p>
        <p>3 number sum & 4 number sum</p>
        

    </div>
  )
}

export default TwoNumberSum