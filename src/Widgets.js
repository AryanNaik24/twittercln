import React from 'react';
import './Widgets.css';
import SearchIcon from '@mui/icons-material/Search';
import {TwitterTweetEmbed , TwitterTimelineEmbed,TwitterShareButton} from "react-twitter-embed";

function Widgets() {
  return (
    <div className='widgets'>
         <div className='widgets__input'>
            <SearchIcon className='widgets__searchIcon'/>
            <input type='text' placeholder='Search X'/>

         </div>
         <div className='widgets__widgetContainer'>
         <h2>Whats happening?</h2>

         <TwitterTweetEmbed tweetId={"1745946082150867075"}/>
         <TwitterTimelineEmbed sourceType='profile' screenName='elonmusk' options={{height:400}}/>
            <div className='post__btn'> 

         <TwitterShareButton url={'https://facebook.com/'} options={{text:'#react is weird',via: "Aryan"}}/>

            </div>
         </div>
        <div className='widget__footer'>
            <footer> ©2024 Aryan Corp. </footer>
        </div>

    </div>
  )
}

export default Widgets