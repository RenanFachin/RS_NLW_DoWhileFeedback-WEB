import logoImg from '../assets/logo.svg'

export function MessageList() {
    return (
        <section className='flex flex-col justify-between items-start'>
            <img
                className='h-7 my-8'
                src={logoImg}
                alt="DoWhile 2021"
            />

            <ul className='flex flex-col gap-10 flex-1 justify-center'>
                {/* Mensagem 01 */}
                <li className='max-w-[440px]'>
                    <p className='text-xl leading-7'>
                        Não vejo a hora de começar esse evento, com certeza vai ser o melhor de todos os tempos, vamooo pra cima! 🔥🔥
                    </p>
                    <div className='mt-4 flex items-center'>
                        <div className='p-[2px] bg-nlw-gradient rounded-[50%] leading-none'>
                            <img
                                className='w-8 h-8 rounded-[50%] border-4 border-solid border-black-700'
                                src="https://github.com/RenanFachin.png"
                                alt=""
                            />
                        </div>

                        <span className='text-base ml-3'>
                            Renan Fachin
                        </span>
                    </div>
                </li>

                {/* Mensagem 02 */}
                <li className='max-w-[440px] ml-20'>
                    <p className='text-xl leading-7'>
                        Não vejo a hora de começar esse evento, com certeza vai ser o melhor de todos os tempos, vamooo pra cima! 🔥🔥
                    </p>
                    <div className='mt-4 flex items-center'>
                        <div className='p-[2px] bg-nlw-gradient rounded-[50%] leading-none'>
                            <img
                                className='w-8 h-8 rounded-[50%] border-4 border-solid border-black-700'
                                src="https://github.com/RenanFachin.png"
                                alt=""
                            />
                        </div>

                        <span className='text-base ml-3'>
                            Renan Fachin
                        </span>
                    </div>
                </li>

                {/* Mensagem 03 */}
                <li className='max-w-[440px]'>
                    <p className='text-xl leading-7'>
                        Não vejo a hora de começar esse evento, com certeza vai ser o melhor de todos os tempos, vamooo pra cima! 🔥🔥
                    </p>
                    <div className='mt-4 flex items-center'>
                        <div className='p-[2px] bg-nlw-gradient rounded-[50%] leading-none'>
                            <img
                                className='w-8 h-8 rounded-[50%] border-4 border-solid border-black-700'
                                src="https://github.com/RenanFachin.png"
                                alt=""
                            />
                        </div>

                        <span className='text-base ml-3'>
                            Renan Fachin
                        </span>
                    </div>
                </li>
            </ul>
        </section>
    )
}