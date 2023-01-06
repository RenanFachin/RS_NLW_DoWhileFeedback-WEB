import { VscGithubInverted } from "react-icons/vsc";
import { AnchorHTMLAttributes } from "react";

export interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    title: string;
}


export function SignIn({title, ...props}: ButtonProps) {
    return (
        <a
            className="bg-yellow-500 mt-8 px-10 h-14 text-black-900 text-sm font-bold uppercase flex justify-center items-center hover:filter hover:brightness-90 transition cursor-pointer"
            {...props}
        >
            <VscGithubInverted 
                size={24} 
                className="mr-4" 
            />
            
            {title}
        </a>
    )
}