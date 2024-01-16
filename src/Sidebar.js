import React from 'react'
import './Sidebar.css'
import XIcon from '@mui/icons-material/X';
import SidebarOption from './SidebarOption';
import CastleIcon from '@mui/icons-material/Castle';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button } from '@mui/material';

function Sidebar() {
  return (
    <div className='sidebar'>
       
            <XIcon className='sidebar__xIcon'/>

            <SidebarOption active Icon={CastleIcon} text='Home'/>
            <SidebarOption Icon={SearchIcon} text='Explore'/>
            <SidebarOption Icon={NotificationsNoneIcon} text='Notifications'/>
            <SidebarOption Icon={MailOutlineIcon} text='Message'/>
            <SidebarOption Icon={BookmarkBorderIcon} text='Bookmarks'/>
            <SidebarOption Icon={ListAltIcon} text='Lists'/>
            <SidebarOption Icon={PermIdentityIcon} text='Profile'/>
            <SidebarOption Icon={MoreHorizIcon} text='More'/>

           {/* button -> tweet*/}

            <Button variant='outlined' className='sidebar__tweet' fullWidth>Tweet</Button>


    </div>
  )
}

export default Sidebar