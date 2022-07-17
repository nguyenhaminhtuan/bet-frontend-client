import type {ReactNode} from 'react'
import Header from './header'
import Logo from './logo'

type RootLayoutProps = {
  children: ReactNode
}

export default function RootLayout({children}: RootLayoutProps) {
  return (
    <div className="min-h-100vh">
      <div className="flex bg-dark-100">
        <div className="flex w-full max-w-[var(--sidebar-width)] items-center justify-center">
          <Logo className="max-w-[12.75rem]" />
        </div>
        <div className="flex-1">
          <div className="flex h-[var(--header-sub-height)] w-full items-center bg-dark-500 px-4">
            <div>Route</div>
          </div>
          <div className="flex h-[var(--header-main-height)] w-full items-center px-4">
            <div>Route</div>
          </div>
        </div>
      </div>
      <div>{children}</div>
    </div>
  )
}
