import React, { useEffect, useState } from 'react'
import { gk } from '../utils/constant'


const Comment2 = ({comment}) => {
    
    console.log(comment)
    

  return (
    <div className='flex p-8'>
        <img src={comment.snippet.topLevelComment.snippet.authorProfileImageUrl} alt='sandeep'/>
        <div className='flex flex-col'>
        <span>{comment.snippet.topLevelComment.snippet.authorDisplayName}</span>
        <span>{comment.snippet.topLevelComment.snippet.textOriginal}</span>
        <span>Reply Count: {comment.snippet.topLevelComment.snippet.updatedAt}</span>
        </div>
    </div>
  )
}

export default Comment2