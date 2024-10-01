'use client'

import {
  Link,
  type LinkProps,
} from '@nextui-org/react'
import { usePathname } from 'next/navigation'

interface ActiveLinkProps extends LinkProps {
  children: React.ReactNode
}

function ActiveLink({ href, children, className, ...props }: ActiveLinkProps) {
  const path = usePathname()

  return (
    <Link
      href={href}
      className={`${className} ${path === href ? 'text-primary' : 'text-foreground'}`}
      {...props}
    >
      {children}
    </Link>
  )
}

export default ActiveLink
