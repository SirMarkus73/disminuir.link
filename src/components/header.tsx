'use client'

import {
  Divider,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@nextui-org/react'
import { Suspense, useState } from 'react'
import ActiveLink from './activeLink'
import ThemeSwitcher from './themeSwitcher'

const menuItems = [
  { name: 'Inicio', href: '/' },
  { name: 'Panel de control', href: '/dashboard' },
]

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden"
        />
        <NavbarBrand>
          <p className="font-bold text-inherit">disminuir.link</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item) => (
          <NavbarItem key={item.name}>
            <ActiveLink href={item.href}>{item.name}</ActiveLink>
          </NavbarItem>
        ))}
        <Divider orientation="vertical" className="h-14" />
        <NavbarMenuItem>
          <ThemeSwitcher />
        </NavbarMenuItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item) => (
          <NavbarMenuItem key={`${item.name}`}>
            <ActiveLink href={item.href} className="w-full" size="lg">
              {item.name}
            </ActiveLink>
          </NavbarMenuItem>
        ))}
        <Divider />
        <NavbarMenuItem className="w-40">
          <ThemeSwitcher />
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  )
}
