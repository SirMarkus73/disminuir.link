'use client'
import { Button, type ButtonProps } from '@nextui-org/react'
import { useFormStatus } from 'react-dom'

interface LoaderButtonProps extends ButtonProps {
  children: React.ReactNode
}

function LoaderButton({ children, ...props }: LoaderButtonProps) {
  const { pending } = useFormStatus()
  return (
    <Button type="submit" fullWidth isLoading={pending} {...props}>
      {children}
    </Button>
  )
}

export default LoaderButton
