'use client'

import { dateZone } from '@/lib/constants'
import { today } from '@internationalized/date'
import { DatePicker } from '@nextui-org/react'

function DashboardDatePicker() {
  return (
    <DatePicker
      label="Fecha maxima"
      validationBehavior="native"
      isRequired
      minValue={today(dateZone)}
      maxValue={today(dateZone).add({ months: 6 })}
      visibleMonths={2}
      name="date"
    />
  )
}

export default DashboardDatePicker
