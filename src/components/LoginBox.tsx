import { useContext } from 'react'
import { AuthContext } from '../contexts/auth'

import { SignIn } from './Buttons/SignIn'
import { Text } from './Text'

export function LoginBox(){
    const { signInUrl } = useContext(AuthContext)


    
    return(
        <section className="h-screen w-full bg-black-500 bg-banner bg-no-repeat pt-[440px] px-20 text-center flex flex-col justify-center items-center">
            <Text className='leading-snug'size='md'>
                Entre e compartilhe sua mensagem
            </Text>

            <SignIn 
                title='Entrar com Github'
                href={signInUrl}
            />
        </section>
    )
}