import React from 'react'
import s from './FriendMessage.module.css'
import avatar2 from '../avatar2.png'
import {MessageType} from '../HW1';
import iconsSprite2 from '../friend-message/Rectangle2.svg';

// создать тип вместо any и отобразить приходящие данные
export type FriendMessagePropsType = {
    message: MessageType
}
const FriendMessage = (props: FriendMessagePropsType) => {
    return (
        <div
            id={'hw1-friend-message-' + props.message.id}
            className={s.friendMessage}
        >
            <div className={s.friendImageAndText}>
                <img
                    id={'hw1-friend-avatar-' + props.message.id}
                    src={avatar2}
                    alt={props.message.user.avatar}
                />
                <svg width="414" height="60" viewBox="20 16 414 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <use xlinkHref={ `${iconsSprite2}#${'friendMessage'}` } />
                </svg>
                <div className={s.friendText}>
                    <div
                        id={'hw1-friend-name-' + props.message.id}
                        className={s.friendName}
                    >
                        {props.message.user.name}

                        {/**/}
                    </div>
                    <pre
                        id={'hw1-friend-text-' + props.message.id}
                        className={s.friendMessageText}
                    >
                        {props.message.message.text}

                        {/**/}
                    </pre>
                </div>
            </div>
            <div
                id={'hw1-friend-time-' + props.message.id}
                className={s.friendTime}
            >
                <div >
                    {props.message.message.time}
                </div>

                {/**/}
            </div>
        </div>
    )
}

export default FriendMessage
