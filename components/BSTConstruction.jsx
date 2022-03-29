import React from 'react'

const BSTConstruction = () => {
  return (
    <div className='w-full'>
      <h1>Binary Search Tree</h1> 6.01
      
      <div className='inline-flex w-full'>
        <div className='block px-4'>
          <li>A Binary <u>Search</u> Tree is a special type of Binary Tree</li>
          <li>A Binary Tree is a data structure that consists of <b>nodes</b> where each node has value. </li>
          <li>The value could be a interger, string or array etc.. however it&#39;s typically going to be an interger </li>
          <li>Each node optimally will have 2 children</li>
          <li>Typically these are going to be refered to as the left node and the right node</li>
          <li>A Binary Search Tree is different from a standard Binary Tree beacause every node in a BST has to satisfy an additional property the: &#34;BST property&#34; </li>
          <li>The BST Property is defined as: A nodes value must be strictly greater than all of the values of the nodes to its left <b>and</b> the value of a node must be less than or equal to the value of all of the nodes to it&#39;s right.</li>
          <li></li>
        </div>
        <img className="w-2/5 ml-auto" src="img/binarysearchtree.png" alt="" />
      </div>
      <h1>Construction</h1>
      <p>What do we mean by <b>construction</b> of a BST?</p>
      <p>We are talking about a few methods to that we want our BST class to support</p>
      <ul>
        <li>Insertion - add a new node</li>
        <li>Searching - find a node</li>
        <li>Deletion - remove a node</li>
      </ul>
      <i>There is also traversal of a BST which is covered in another section</i>
    </div>
  )
}

export default BSTConstruction