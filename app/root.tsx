import type {LinksFunction, MetaFunction} from '@remix-run/node'
import {Outlet} from '@remix-run/react'
import Document from './document'
import styles from '~/styles/app.css'
import fonts from '~/styles/fonts.css'
import RootLayout from '~/components/root-layout'

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'New Remix App',
  viewport: 'width=device-width,initial-scale=1',
})

export const links: LinksFunction = () => [
  {rel: 'stylesheet', href: styles},
  {rel: 'stylesheet', href: fonts},
]

export default function App() {
  return (
    <Document>
      <RootLayout>
        <Outlet />
      </RootLayout>
    </Document>
  )
}
