import type {ReactNode} from 'react'
import {Header} from './header'

type RootLayoutProps = {
  children: ReactNode
}

export default function Layout({children}: RootLayoutProps) {
  return (
    <div className="min-h-100vh">
      <Header />
      <div>{children}</div>
    </div>
  )
}
