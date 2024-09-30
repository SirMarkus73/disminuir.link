export function validateDate(date: string): boolean {
  const givenDate = new Date(date)
  const currentDate = new Date()
  currentDate.setHours(0, 0, 0, 0)

  if (givenDate < currentDate) {
    return false
  }

  return true
}
