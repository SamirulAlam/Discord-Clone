import React from 'react';
import "./Chat.css";
import AddCircleIcon from '@material-ui/icons/AddCircle'
import CradGiftcardIcon from '@material-ui/icons/CardGiftcard'
import GifIcon from '@material-ui/icons/Gif'
import EmojiEmoticonsIcon from '@material-ui/icons/EmojiEmotions'
import ChatHeader from './ChatHeader';
import Message from './Message';

function Chat() {
    return (
        <div className="chat">
            <ChatHeader />
            <div className="chat__messages">
                <Message />
            </div>
            <div className="chat__input">
                <AddCircleIcon fontSize="large" />
                <form action="">
                    <input type="text" placeholder={`Message #MERN Bros`}/>
                    <button className="chat__inputButton" type="submit">Send</button>
                </form>
                <div className="chat__inputIcons">
                    <CradGiftcardIcon fontSize="large" />
                    <GifIcon fontSize="large" />
                    <EmojiEmoticonsIcon fontSize="large" />
                </div>
            </div>
        </div>
    )
}

export default Chat
