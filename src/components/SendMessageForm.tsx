import { useContext, useState, FormEvent } from 'react'
import { AuthContext } from "../contexts/auth";

import { SignOut } from './Buttons/SignOut';

import { VscGithubInverted } from "react-icons/vsc";
import { api } from '../services/api';

export function SendMessageForm() {
    const { user, signOut } = useContext(AuthContext)
    const [message, setMessage] = useState('')

    async function handleSendMessage(e: FormEvent){
        e.preventDefault()

        if(!message.trim()){
            return;
        }

        // Fazendo o post na API
        await api.post('/messages', {
            message
        })

        // Limpando o textarea após o envio
        setMessage('')
    }

    return (
        <section className="bg-black-300 p-6 self-center flex flex-col items-center text-center relative">

            <SignOut onClick={signOut} />

            <header className="flex flex-col items-center">
                <div className="p-1 bg-nlw-gradient rounded-[50%] leading-none">
                    <img
                        className='w-32 h-32 rounded-[50%] border-2 border-solid border-black-700'
                        src={user?.avatar_url}
                        alt={user?.name}
                    />
                </div>

                <strong
                    className='text-2xl leading-7 mt-4'
                >
                    {user?.name}
                </strong>

                <span className='flex items-center mt-2 text-gray-100'>
                    <VscGithubInverted
                        className='mr-2'
                        size={20}
                    />
                    {user?.login}
                </span>
            </header>

            <form 
                className='flex flex-col self-stretch mt-12 bg-black-400' 
                onSubmit={handleSendMessage}
            >
                <label htmlFor="message" className='p-5 text-xl bg-black-100 font-bold text-left'>
                    Mensagem
                </label>

                <textarea
                    className='bg-transparent border-none p-6 resize-none h-40 text-gray-200 text-base leading-6 focus:outline-none placeholder:text-gray-400'
                    name='message'
                    id='message'
                    placeholder='Qual sua expectativa para o evento?'
                    onChange={event => setMessage(event.target.value)}
                    value={message}
                />

                <button type='submit' className='bg-pink-500 m-6 px-8 h-10 self-end cursor-pointer text-white text-sm font-bold border-none uppercase flex justify-center items-center hover:filter hover:brightness-90 transition'>
                    Enviar mensagem
                </button>
            </form>
        </section>
    )
}