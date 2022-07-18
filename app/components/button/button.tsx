import clsx from 'clsx'
import type {ReactNode} from 'react'

type ButtonProps = {
  color?: 'gold' | 'grren'
  children: ReactNode
}

export default function Button({color = 'gold', children}: ButtonProps) {
  return (
    <a
      className={clsx(
        'xxl:px-10 flex h-[36px] w-full cursor-pointer items-center justify-center rounded-[0.25rem] px-6 text-sm font-bold text-dark-300 shadow-sm',
        {
          'bg-primary-gold  shadow-primary-gold-dark hover:bg-primary-gold-light':
            color === 'gold',
          'bg-primary-green  shadow-primary-green-dark hover:bg-primary-green-light':
            color === 'grren',
        }
      )}
    >
      {children}
    </a>
  )
}
