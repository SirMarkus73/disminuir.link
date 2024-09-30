import DashboardDatePicker from '@/components/dashboardDatePicker'
import LoaderButton from '@/components/loaderButton'
import { Input } from '@nextui-org/react'
import { handleForm } from './actions'

function DashboardForm() {
  return (
    <form className="w-full grid gap-2" action={handleForm}>
      <h1>Comienza a acortar enlaces</h1>
      <Input
        label="Enlace"
        type="url"
        name="url"
        id="url"
        isRequired
        validationBehavior="native"
      />
      <DashboardDatePicker />
      <LoaderButton type="submit" fullWidth>
        disminuir
      </LoaderButton>
    </form>
  )
}

export default DashboardForm
