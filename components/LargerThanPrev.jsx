import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import { CodeBlock, obsidian } from "react-code-blocks";

export default function LargerThanPrev(){
  const [count, setCount] = useState(0)
  const [depths, setDepths] = useState([])

  useEffect(async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/depths`)
    let result = await response.json()
    setDepths(result.depths)
  }, [])

  function LargerThanPrev(){
    let count = 0
    
    for(let i = 0; i < depths.length; i++){
      if(depths[i] > depths[i - 1]) count += 1
      console.log("prev: ", depths[i -1])
      console.log("curr: ", depths[i])
      console.log("count: ", count)
    }
    console.log(depths)
    return setCount(count)
  }

  return (
  <>
  <div className='w-full'>

    <h1>Sonar Sweeping</h1>
    <p>At the bottom of the ocean you are looking for treasure... As you scan outward from the submarine you get a reading</p>
    <p>199, 200, 208, 210 and so on</p>
    <p>The first order of business is to figure out how quickly the depth increases!</p>
    <p>To do this, <b>count the number of time a depth measurement increases from the previous measurment</b></p>
    <ul className='border p-1 m-1 bg-gray-50'>
      <li>199 (N/A - no previous measurement)</li>
      <li>200 (increase)</li>
      <li>208 (increase)</li>
      <li>210 (increase)</li>
      <li className='text-red-500'>200 (decrease)</li>
      <li>207 (increase)</li>
      <li>240 (increase)</li>
      <li>269 (increase)</li>
      <li className='text-red-500'>260 (decrease)</li>
      <li>263 (increase)</li>
    </ul>
      <p>In this example, there are 7 measurements that are larger than the previous measurment.</p>

      <CodeBlock
          text={` 
          function LargerThanPrev(){
            let count = 0
            
            for(let i = 0; i < depths.length; i++){
              if(depths[i] > depths[i - 1]) x += 1
            }
            return setCount(count)
          }
          
          `}
          language="js"
          showLineNumbers={false}
          theme={obsidian}
          />


      <Link href='/api/depths' passHref>
          <a className='text-purple-500'>
            Check out the data here
          </a>
      </Link>

    <div className="bg-green-600 text-white p-5 rounded-md cursor-pointer hover:bg-purple-500 font-bold " onClick={() => LargerThanPrev()}>{`${count == 0 ? "Run the Algorithim!" : "Result: " + count + " measurements - check the console"}`}</div>
    </div>
  </>
  )
}

//https://adventofcode.com/2021
//https://adventofcode.com/2021/day/1/input