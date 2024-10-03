// app/components/ThemeSwitcher.tsx
'use client'

import {
  Select,
  SelectItem,
  type SharedSelection,
  Skeleton,
} from '@nextui-org/react'
import { useTheme } from 'next-themes'

const themes = ['dark', 'light']

export function ThemeSwitcherSkeleton() {
  return <Skeleton className="w-40 h-14 rounded-md" />
}

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()

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
