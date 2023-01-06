import { api } from '../services/api'

import logoImg from '../assets/logo.svg'
import { useEffect, useState } from 'react'
import { io } from 'socket.io-client';

import { Message } from './Message';

type MessageProps = {
    id: string;
    text: string;
    user: {
        name: string;
        avatar_url: string;
    }
}

// Criando uma fila de mensagem
const messagesQueue: MessageProps[] = []

const socket = io('http://localhost:4000')

socket.on('new_message', newMessage => {
    messagesQueue.push(newMessage)
})

export function MessageList() {
    const [messages, setMessages] = useState<MessageProps[]>([])

    useEffect(() => {
        // Chamada para API
        api.get<MessageProps[]>('/messages/last3').then(response => {
            setMessages(response.data)
        })
    },[])

    useEffect(() => {
        // Executando a cada 3 segundos
        setInterval(() => {
            if(messagesQueue.length > 0) {
                // Criando um novo array de mensagens porém com informações já contidas nele. Será necessário colocar uma função para isto (prevState =>)
                setMessages(prevState => [
                    messagesQueue[0],
                    prevState[0],
                    prevState[1]
                ].filter(Boolean))

                // Removendo o item mais antigo da fila
                messagesQueue.shift()
            }
        },3000)
    },[])

    return (
        <section className='flex flex-col justify-between items-start'>
            <img
                className='h-7 my-8'
                src={logoImg}
                alt="DoWhile 2021"
            />

            <ul className='flex flex-col gap-10 flex-1 justify-center w-full'>

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