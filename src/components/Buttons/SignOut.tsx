import { ButtonHTMLAttributes } from "react";
import { VscSignOut } from "react-icons/vsc";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{}

export function SignOut({...rest}: ButtonProps) {


    return (
        <button 
        className="bg-transparent border-none text-gray-100 absolute left-6 top-6 cursor-pointer hover:brightness-90 transition"
        {...rest}
        >
            <VscSignOut size={32} />
        </button>
    )
}