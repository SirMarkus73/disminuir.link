import parseLink from '@/lib/parseLink'
import { Card, CardBody, CardHeader, Snippet } from '@nextui-org/react'
import { cookies, headers } from 'next/headers'
import DashboardForm from './dashboardForm'

function Dashboard() {
  const lastLink = parseLink(cookies().get('lastLink')?.value as string)

  return (
    <main className="flex flex-col justify-center items-center gap-3 p-3">
      <Card className="md:w-3/4 w-full p-3">
        <CardHeader>Acortar enlace</CardHeader>
        <CardBody>
          <DashboardForm />
        </CardBody>
      </Card>
      <Card className="w-full md:w-3/4 p-3">
        <CardHeader>Ultimo enlace acortado</CardHeader>
        <CardBody>
          {lastLink ? (
            <Snippet variant="shadow" color="primary">
              <a href={lastLink.path}>{lastLink.shortedLink} </a>
            </Snippet>
          ) : (
            <p>Aun no has acortado ningún enlace, ¿a que esperas?</p>
          )}
        </CardBody>
      </Card>
    </main>
  )
}

export default Dashboard
