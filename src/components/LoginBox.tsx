import { VscGithubInverted } from 'react-icons/vsc'

export function LoginBox(){
    return(
        <div className="h-screen w-full bg-black-500 bg-banner bg-no-repeat pt-[440px] px-20 text-center flex flex-col justify-center items-center">
            <strong className="text-4xl leading-tight">
                Entre e compartilhe sua mensagem
            </strong>

            <a 
            href="#" 
            className="bg-yellow-500 mt-8 px-10 h-14 text-black-900 text-sm font-bold uppercase flex justify-center items-center hover:filter hover:brightness-110 transition"
            >
                <VscGithubInverted size={24} className="mr-4"/>
                Entrar com Github
            </a>
        </div>
    )
}