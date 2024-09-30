// app/components/ThemeSwitcher.tsx
'use client'

import {
  Select,
  SelectItem,
  Skeleton,
  type SharedSelection,
} from '@nextui-org/react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const themes = ['dark', 'light']

function ThemeSwitcherSkeleton() {
  return <Skeleton className="w-40 h-14 rounded-md" />
}

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return <ThemeSwitcherSkeleton />

  const handleThemeChange = (keys: SharedSelection) => {
    setTheme(keys.currentKey || themes[0])
  }

  return (
    <Select
      label="tema"
      onSelectionChange={handleThemeChange}
      className="w-40 h-14"
      defaultSelectedKeys={[theme || themes[0]]}
    >
      {themes.map((theme) => (
        <SelectItem key={theme}>{theme}</SelectItem>
      ))}
    </Select>
  )
}
