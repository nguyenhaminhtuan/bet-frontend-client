import {Button} from '../button'
import Logo from '../logo'
import HeaderNavLink from './header-nav-link'

export default function DesktopHeader() {
  return (
    <div className="hidden lg:flex">
      <div className="flex w-full max-w-[var(--sidebar-width)] items-center justify-center">
        <Logo className="max-w-[12.75rem]" />
      </div>
      <div className="flex-1">
        <ul className="flex h-[var(--header-sub-height)] w-full items-center bg-dark-500 px-4">
          <li className="px-3">
            <HeaderNavLink to="/as" size="xs">
              Fairness
            </HeaderNavLink>
          </li>
          <li className="px-3">
            <HeaderNavLink to="/as" size="xs">
              Bouns Cases
            </HeaderNavLink>
          </li>
          <li className="px-3">
            <HeaderNavLink to="/as" size="xs">
              Free Case
            </HeaderNavLink>
          </li>
          <li className="px-3">
            <HeaderNavLink to="/as" size="xs">
              Referrals
            </HeaderNavLink>
          </li>
          <li className="px-3">
            <HeaderNavLink to="/as" size="xs">
              About
            </HeaderNavLink>
          </li>
        </ul>
        <div className="flex h-[var(--header-main-height)] items-center justify-between">
          <ul className="flex">
            <li className="px-4">
              <HeaderNavLink to="/" size="sm" uppercase>
                Roulette
              </HeaderNavLink>
            </li>
            <li className="px-4">
              <HeaderNavLink to="/" uppercase>
                Match bettings
              </HeaderNavLink>
            </li>
            <li className="px-4">
              <HeaderNavLink to="/" uppercase>
                Coin flip
              </HeaderNavLink>
            </li>
          </ul>
          <div className="flex items-center">
            <div className="mr-6">
              <HeaderNavLink to="/">Withdraw</HeaderNavLink>
            </div>
            <div className="mr-2">
              <Button color="gold">Deposit</Button>
            </div>
            <div className="mr-2">
              <Button color="grren">Sign In</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
