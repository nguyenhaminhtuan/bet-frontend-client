import DesktopHeader from './desktop-header'
import MobileHeader from './mobile-header'

export default function Header() {
  return (
    <header className="bg-dark-100">
      <DesktopHeader />
      <MobileHeader />
    </header>
  )
}
