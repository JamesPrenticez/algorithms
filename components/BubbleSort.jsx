import React, {useState, useEffect} from 'react'
import { CodeBlock, obsidian } from "react-code-blocks";

export default function BubbleSort(){
  const [array, setArray] = useState('[8, 5, 2, 9, 6, 3]')
  const [auxArray, setAuxArray] = useState('[8, 5, 2, 9, 6, 3]')
  const ARRAY_LENGTH = 10

  const timer = ms => new Promise(res => setTimeout(res, ms))

  // async function load () { // We need to wrap the loop into an async function for this to work
  //   for (var i = 0; i < 3; i++) {
  //     console.log(i);
  //     await timer(3000); // then the created Promise can be awaited
  //   }
  // }

  function randomInt(min, max){
    const arrayItems = document.getElementsByClassName("arrayItems") //for animations
    for(let i = 0; i < auxArray.length -1; i++){
      arrayItems[i]?.style.color = "black"
    }
    return Math.floor(Math.random() * (max - min + 1) + min)

  }

  const resetArray = () => {
    const myArray = []
    for (let i = 0; i < ARRAY_LENGTH; i++){
      myArray.push(randomInt(0, 800))
    }
    setArray(JSON.stringify(myArray))
    setAuxArray(JSON.stringify(myArray))
  }

  async function bubbleSort(array){
    const arrayItems = document.getElementsByClassName("arrayItems") //for animations
    console.log(arrayItems)
    let myArray = JSON.parse(array)
    let isSorted = false
    while(!isSorted){
      isSorted = true
      for(let i = 0; i < myArray.length -1; i++){
        if (myArray[i] > myArray[i + 1]){
            swap(i, i + 1, myArray)

            arrayItems[i].style.color = "black"
            arrayItems[i+1].style.color = "red"

            setAuxArray(JSON.stringify(myArray))

            isSorted = false
            await timer(250);
        }
      }
    }
    return setArray(JSON.stringify(myArray))
  }

  function swap(i, j, array){
    [array[i], array[j]] = [array[j], array[i]]
    return array
  }

  return (
    <div>
      <h1>BubbleSort</h1>
      <div className='flex'>
        <div className="inline-flex">
          <div className='p-5 truncate block'>
            {JSON.parse(array).map((num, index) => {
              return (
                <p key={index} className="">{num} &nbsp;</p>
                )
              })}
          </div>

          <div className='p-5 truncate block'>
            {JSON.parse(auxArray).map((num, index) => {
              return (
                <p key={index} className="arrayItems">{num} &nbsp;</p>
                )
              })}
          </div>
        </div>
        <div className='inline-flex ml-auto'>
          <div 
            className="bg-purple-600 text-white p-5 rounded-md cursor-pointer hover:bg-white hover:text-green-500 font-bold w-48 h-16 ml-auto select-none"
            onClick={() => resetArray()}
            >
            Randomize Array
          </div>
          <div 
            className="bg-green-600 text-white p-5 rounded-md cursor-pointer hover:bg-white hover:text-green-500 font-bold w-48 h-16 ml-auto select-none"
            onClick={() => bubbleSort(array)}
            >
            BubbleSort
          </div>
        </div>
      </div>

      <p>This is a pretty simple algorithim, its very intuitive and easy to wrap your head around. That being said it a a very important algorithim to prepare ourselves for more complex algorithims such as merge sort and quick sort.</p>
      <p>[8, 5, 2, 9, 6, 3]</p>
      <p>The goal is to sort a list of numbers in assending order in other words smallest to larget</p>
      <p>Basically we are going to iterate thorugh this array serveral times</p>
      <p>And each time we iterate through it we are going to preform swaps to place numbers in their corret order</p>
      <p>More precisely, the first time we iterate through for each number that we are at, we are going to check the current number and the number directly after it are in the correct order</p>
      <p>In other words is the current number smaller than or equal to the next number</p>
      <p>if they are carry on to the next number</p>
      <p>else we swap them </p>
      <p>at the end of the iteration we ask ourselves &quot;did we preform any swaps?&quot;</p>
      <p>if yes then our array is not sorted and we need to run it again</p>
      <p>if no then we are done</p>
      <br />
      <p>It is important to note that these <b>swaps happen in place</b></p>
      <p>As we work through our array it is natural that we can identify the largest number and move it to the very end</p>
      <p>So we can do a very small optimization here and not cehck the last number again</p>
      <h2>Space/Time Complexity</h2>
      <p>Space: O(1)</p>
      <p>Time: O(n^2)</p>

        <CodeBlock
          text={` 
          function bubbleSort(array){
            let isSorted = false
            while(!isSorted){
              isSorted = true
              for(let i = 0; i < array.length -1; i++){
                if (array[i] > array[i + 1]){
                    swap(i, i + 1, array)
                    isSorted = false
                }
              }
            }
            return setArray(array)
          }
          `}
          language="js"
          showLineNumbers={false}
          theme={obsidian}
          />

          <CodeBlock
            text={` 
            function swap(i, j, array){
              [array[i], array[j]] = [array[j], array[i]]
              return array
            }
            `}
            language="js"
            showLineNumbers={false}
            theme={obsidian}
          />

        
    </div>
  )
}