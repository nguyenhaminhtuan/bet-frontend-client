import {NavLink} from '@remix-run/react'
import clsx from 'clsx'
import type {ReactNode} from 'react'

type HeaderNavLinkProps = {
  to: string
  size?: 'xs' | 'sm'
  uppercase?: boolean
  children: ReactNode
}

export default function HeaderNavLink({
  to,
  size = 'sm',
  uppercase = false,
  children,
}: HeaderNavLinkProps) {
  return (
    <NavLink
      className={clsx(
        'active:text-primary font-semibold text-gray hover:text-primary-gold',
        {
          'text-xxs': size === 'xs',
          'text-xs': size === 'sm',
          uppercase: uppercase,
        }
      )}
      to={to}
    >
      {children}
    </NavLink>
  )
}
