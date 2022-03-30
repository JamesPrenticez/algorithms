import React, {useState} from 'react'
import { CodeBlock, obsidian } from "react-code-blocks";
//8.47
const TwoNumberSum = () => {
  const [option1Answer, setOption1Answer] = useState("")
  const [array, setArray] = useState('[3, 5, -4, 8, 11, -1, 6]')
  const [target, setTarget] = useState(10)

  function option1(array, target){
    let myArray = JSON.parse(array)
    let myTarget = Number(target)
    for(let a = 0; a <= myArray.length; a++){
      for(let b = 0; b < myArray.length; b++){
        if(myArray[a] != myArray[b] && myArray[a] + myArray[b] === myTarget){
          return "Sum: " + myArray[a] + "+" + myArray[b] + " = " + myTarget
        }
      }
    } 
    return "No two numbers = " + myTarget
  }

  function option3(array, target){
    let nums = {}
    for(let i = 0; i < array.length; i++){
      //Does our object/hash table contain (target - current number) aka 'y'? 
      let potentialMatch = (target - array[i])
      if(nums.hasOwnProperty(potentialMatch)){
        return [target - array[i], array[i]]
      } else {
        nums[array[i]] = true
      }
    }
    return [] //no answer
  }

  //console.log(option3([3, 5, -4, 8, 11, -1, 6], 10))


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
        <p>Time complexity: O(n^2)</p>
        <p>Space: O(1)</p>

        <div className='p-3 text-3xl space-x-2'>
          <input className="p-1 outline-none" placeholder="3, 5, -4, 8, 11, -1, 6" onChange={(e) => setArray("[" + e.target.value + "]")}/>
          <input className="p-1 outline-none" placeholder={target} onChange={(e) => setTarget(e.target.value)}/>
          <button className="p-1 bg-green-600 rounded" onClick={() => {setOption1Answer(option1(array, target))}}>Run</button>
          <p className='inline'>{option1Answer}</p>
        </div>

        <CodeBlock
          text={` 
            function option1(array, target){
              for(let i = 0; i <= array.length; i++){
                for(let j = 0; j < array.length; j++){
                  if(array[i] != array[j] && array[i] + array[j] === target) 
                  return [array[a], array[b]]
                }
              }
            }
          `}
          language="js"
          showLineNumbers={false}
          theme={obsidian}
        />

        <div className='max-w-7xl mx-auto my-5 h-[3px] bg-gradient-to-r from-gray-50 via-green-600 to-gray-50'></div>

        <h2>Option 2 :</h2>
        <p>We could sort the array first</p>
        <p>[-4, -1, 3, 5, 6, 8, 11], 10</p>
        <p>Then we could establish a Left pointer at -4 and a Right pointer at 11</p>
        <p>[<b>-4</b>, -1, 3, 5, 6, 8, <b>11</b>]</p>
        <p>And then sum those two numbers -4 + 11 = 7</p>
        <p>Which is less than 10 our target sum. So now we know to move the Left pointer inward allowing us to have a greater sum</p>
        <p>[-4, <b>-1</b>,3, 5, 6, 8, <b>11</b>]</p>
        <p>-1 + 11 = 10</p>
        <p>Lets change the target to be 13 to make things more interesting</p>
        <p>[-4, -1, <b>3</b>, 5, 6, 8, <b>11</b>]</p>
        <p>3 + 11 = 14 this is greater than out target so we move the right pointer instead</p>
        <p>[-4, -1, <b>3</b>, 5, 6, <b>8</b>, 11]</p>
        <p>3 + 8 = 11 is less than the target sum so that means we more the left pointer again </p>
        <p>[-4, -1, 3, <b>5</b>, 6, <b>8</b>, 11]</p>
        <p>5 + 8 = 13 </p>
        <p>Time complexity: O(n log(n))</p>
        <p>Space complexity: O(1) or constant</p>

        <div className='max-w-7xl mx-auto my-5 h-[3px] bg-gradient-to-r from-gray-50 via-green-600 to-gray-50'></div>

        <h2>Option 3:</h2>
        <p>The best option is to use a hash table which can be represented as a javascript object or a python dictionary</p>
        <p>This will require extra space but will make our algorithm faster</p>
        <p>TargetSum = 10</p>
        <p>CurrentNum = x</p>
        <p>Answer = y</p>
        <p>x + y = 10</p>
        <p>y = 10 - x</p>
        <p>Time complexity: O(n)</p>
        <p>Space complexity: O(n)</p>

        <CodeBlock
          text={` 
            function option3(array, target){
              let nums = {}
              for(let i = 0; i < array.length; i++){
                //Does our object/hash table contain (target - current number) aka 'y'? 
                let potentialMatch = (target - array[i])
                if(nums.hasOwnProperty(potentialMatch)){
                  return [target - array[i], array[i]]
                } else {
                  nums[array[i]] = true
                }
              }
              return [] //no answer
            }
          `}
          language="jsx"
          showLineNumbers={false}
          theme={obsidian}
        />



        <p className='font-bold'>Also see:</p>
        <p>3 number sum & 4 number sum</p>
        

    </div>
  )
}

export default TwoNumberSum