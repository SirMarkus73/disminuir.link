import LastLinkGenerated from '@/components/lastLinkGenerated'
import { Card, CardBody, CardHeader } from '@nextui-org/react'
import DashboardForm from './dashboardForm'

function Dashboard() {
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
          <LastLinkGenerated />
        </CardBody>
      </Card>
    </main>
  )
}

export default Dashboard
