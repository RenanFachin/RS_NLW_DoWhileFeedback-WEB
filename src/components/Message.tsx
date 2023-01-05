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
            <p className='text-xl leading-7'>
                {text}
            </p>
            <div className='mt-4 flex items-center'>
                <div className='p-[2px] bg-nlw-gradient rounded-[50%] leading-none'>
                    <img
                        className='w-8 h-8 rounded-[50%] border-4 border-solid border-black-700'
                        src={user.avatar_url}
                        alt={`Imagem de perfil de ${user.name}`}
                    />
                </div>

                <span className='text-base ml-3'>
                    {user.name}
                </span>
            </div>
        </li>
    )
}