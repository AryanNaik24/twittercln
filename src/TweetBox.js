import React, { useState } from 'react'
import './TweetBox.css'
import {Avatar, Button } from '@mui/material'
import db from './firebase';

function TweetBox() {

  const [tweetMessage , setTweetMessage] = useState("");
  const [tweetImage , setTweetImage] = useState("");

  const sendTweet =  (e)=>{
      e.preventDefault();


      db.collection('posts').add({displayname:'Aronds', username:'aaronds2',verified:true,text:tweetMessage,image:tweetImage,avatar:'https://preview.redd.it/created-random-people-using-chatgpt-midjourney-do-you-know-v0-q1aa450i5dqb1.png?width=1024&format=png&auto=webp&s=c4e9abc47d193474a2fa1a7e337d9d9340dce947'});

      setTweetMessage("");
      setTweetImage("");
  };

  return (
    <div className='tweetBox'>

    <form>

    <div className='tweetBox__input'>

        <Avatar src='https://preview.redd.it/created-random-people-using-chatgpt-midjourney-do-you-know-v0-q1aa450i5dqb1.png?width=1024&format=png&auto=webp&s=c4e9abc47d193474a2fa1a7e337d9d9340dce947'/>
        <input onChange={(e)=>setTweetMessage(e.target.value)} value={tweetMessage} placeholder="What's happening?" type='text'></input>



    </div>
   
    <input onChange={(e)=>setTweetImage(e.target.value)} value={tweetImage} className='tweetBox__url ' placeholder="Enter image URL" type='text'></input>
    
    <Button onClick={sendTweet} type='submit' variant='outlined' className='tweetBox__tweetButton'>Tweet</Button>

    </form>

    </div>
  )
}

export default TweetBox