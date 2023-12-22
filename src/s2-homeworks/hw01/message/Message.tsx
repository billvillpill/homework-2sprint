import React from 'react'
import s from './Message.module.css'
import {MessageType} from '../HW1';
import avatar from '../avatar.png'
import iconsSprite from './Rectangle3.svg'

// нужно создать правильный тип вместо any
export type MessagePropsType = {
    message: MessageType
}

// нужно отобразить приходящие данные
const Message = (props: MessagePropsType) => {
    return (
        <div id={'hw1-message-' + props.message.id} className={s.message}>
            <div className={s.imageAndText}>
                <img
                    id={'hw1-avatar-' + props.message.id}
                    src={avatar}
                    alt={props.message.user.avatar}

                />
                <svg width="527" height="60" viewBox="19 16 527 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <use xlinkHref={ `${iconsSprite}#${'message'}` } />
                </svg>
                <div className={s.text}>
                    <div id={'hw1-name-' + props.message.id} className={s.name}>
                        {/*создаёт студент*/}
                        {props.message.user.name}

                        {/*имя пользователя*/}
                    </div>
                    <pre id={'hw1-text-' + props.message.id} className={s.messageText}>
                        {props.message.message.text}

                        {/* большой текст*/}
                    </pre>
                </div>
            </div>
            <div id={'hw1-time-' + props.message.id} className={s.time}>
                <div>
                    {props.message.message.time}
                </div>
                {/*тут время*/}
            </div>
        </div>
    )
}

export default Message
