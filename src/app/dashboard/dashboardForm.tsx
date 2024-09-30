'use client'

import { dateZone } from '@/lib/constants'
import { today } from '@internationalized/date'
import { Button, DatePicker, Input } from '@nextui-org/react'
import { useFormState } from 'react-dom'
import { handleForm } from './actions'

function DashboardForm() {
  const [state, formAction] = useFormState(handleForm, null)
  return (
    <form className="w-full grid gap-2" action={formAction}>
      <h1>Comienza a acortar enlaces</h1>
      <Input
        label="Enlace"
        type="url"
        name="url"
        id="url"
        isRequired
        validationBehavior="native"
        isInvalid={state?.some((error) => error.path === 'url')}
        errorMessage={state?.find((error) => error.path === 'url')?.message}
      />
      <DatePicker
        label="Fecha maxima"
        validationBehavior="native"
        isRequired
        minValue={today(dateZone)}
        maxValue={today(dateZone).add({ months: 6 })}
        visibleMonths={2}
        name="date"
        isInvalid={state?.some((error) => error.path === 'date')}
        errorMessage={state?.find((error) => error.path === 'date')?.message}
      />
      <Button type="submit" fullWidth>
        disminuir
      </Button>
    </form>
  )
}

export default DashboardForm
