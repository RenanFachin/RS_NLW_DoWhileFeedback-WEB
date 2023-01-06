import { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
}

export function SendMessageButton({ title, ...props }: ButtonProps) {
    return (
        <button
            className='bg-pink-500 m-6 px-8 h-10 self-end cursor-pointer text-white text-sm font-bold border-none uppercase flex justify-center items-center hover:filter hover:brightness-90 transition'
            {...props}
        >
            {title}
        </button>
    )
}