import { Text } from "./Text";

interface MessageProps {
    text: string;
    user: {
        name: string;
        avatar_url: string;
    }
}

export function Message({ text, user, ...rest }: MessageProps) {
    return (
        <li className='max-w-[440px] [&:nth-child(2)]:ml-20' {...rest}>
            <Text size="base" asChild>
                <p>{text}</p>
            </Text>

            <div className='mt-4 flex items-center'>
                <div className='p-[2px] bg-nlw-gradient rounded-[50%] leading-none'>
                    <img
                        className='w-8 h-8 rounded-[50%] border-4 border-solid border-black-700'
                        src={user.avatar_url}
                        alt={`Imagem de perfil de ${user.name}`}
                    />
                </div>

                <Text size="sm" className='ml-3' asChild>
                    <span>
                        {user.name}
                    </span>
                </Text>

            </div>
        </li>
    )
}