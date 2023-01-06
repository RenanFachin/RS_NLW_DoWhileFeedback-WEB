// Importando o clsx
import { clsx } from 'clsx'

// Importando o radix-react-slot
import { Slot } from '@radix-ui/react-slot'

import { ReactNode } from 'react'

interface TextProps {
    size?: 'sm'  | 'base' | 'md' | 'lg';
    children: ReactNode;
    asChild?: boolean;
    // O className libera poder adicionar novas propriedades ao componente
    className?: string;
}

export function Text({ size = 'md', children, asChild, className }: TextProps) {

    const Component = asChild ? Slot : 'strong'

    return (
        <Component
            className={clsx(
                // Definições padrões
                'leading-7',
                {
                    // Aplicar o texto xs caso o text do component for definido com o sm
                    'text-base': size === 'sm',
                    'text-xl': size === 'base',
                    'text-2xl': size === 'md',
                    'text-4xl': size === 'lg',
                },
                className
            )}
        >
            {children}
        </Component>
    )
}