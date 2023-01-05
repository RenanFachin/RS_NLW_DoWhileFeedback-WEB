import { api } from '../services/api'

import logoImg from '../assets/logo.svg'
import { useEffect, useState } from 'react'

import { Message } from './Message';

interface MessageProps {
    id: string;
    text: string;
    user: {
        name: string;
        avatar_url: string;
    }
}

export function MessageList() {
    const [messages, setMessages] = useState<MessageProps[]>([])

    useEffect(() => {
        // Chamada para API
        api.get<MessageProps[]>('/messages/last3').then(response => {
            setMessages(response.data)
        })
    },[])

    return (
        <section className='flex flex-col justify-between items-start'>
            <img
                className='h-7 my-8'
                src={logoImg}
                alt="DoWhile 2021"
            />

            <ul className='flex flex-col gap-10 flex-1 justify-center'>

                {messages.map(message => {
                    return(
                        <Message
                            key={message.id}
                            text={message.text}
                            user={message.user}
                        />
                    )
                })}


            </ul>
        </section>
    )
}