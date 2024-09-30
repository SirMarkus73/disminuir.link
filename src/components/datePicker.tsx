import { dateZone } from '@/lib/constants'
import { today } from '@internationalized/date'
import {
    DatePicker as NextDatePicker,
    type DatePickerProps as NextDatePickerProps,
} from '@nextui-org/react'

interface DatePickerProps extends NextDatePickerProps {
  maxMonths?: number
}

function DatePicker({ maxMonths, ...props }: DatePickerProps) {
  return (
    <NextDatePicker
      validationBehavior="native"
      minValue={today(dateZone)}
      maxValue={today(dateZone).add({ months: maxMonths })}
      ...props
    />
  )
}

export default DatePicker
