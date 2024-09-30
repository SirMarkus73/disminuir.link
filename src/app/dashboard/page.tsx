import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Input,
  Snippet,
} from '@nextui-org/react'
import { headers } from 'next/headers'
import { handleSubmit } from './actions'

function Dashboard() {
  const headersList = headers()
  const hostname = headersList.get('x-forwarded-host')

  return (
    <main className="flex flex-col justify-center items-center gap-3 p-3">
      <form action={handleSubmit} className="w-full md:w-3/4 grid gap-2">
        <h1>Comienza a acortar enlaces</h1>
        <Input
          label="Enlace"
          type="url"
          name="url"
          id="url"
          isRequired
          validationBehavior="native"
        />
        <Button type="submit" fullWidth>
          disminuir
        </Button>
      </form>
      <Card className="w-full md:w-3/4">
        <CardHeader>Ultimo enlace acortado</CardHeader>
        <CardBody>
          <Snippet variant="shadow" color="primary">
            <a href="/dashboard">{`${hostname}/A4`} </a>
          </Snippet>
        </CardBody>
      </Card>
    </main>
  )
}

export default Dashboard
