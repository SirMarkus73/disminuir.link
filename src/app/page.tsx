import { Button } from '@nextui-org/button'
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card'
import { Link } from '@nextui-org/react'
import { ArrowUpWideNarrow, Gauge, Terminal } from 'lucide-react'

export default function Home() {
  return (
    <main className="p-3 grid gap-3 place-content-center min-h-screen">
      <section className="prose text-foreground">
        <h1 className="text-primary">disminuir.link</h1>
        <p>Comienza a acortar tus enlaces de manera fácil y rápida.</p>
      </section>
      <Button as={Link} href="/dashboard">
        Ir al panel de control
      </Button>
      <section className="flex flex-wrap gap-3 *:basis-64 *:flex-grow">
        <Card>
          <CardHeader>
            <h3>Fácil de usar</h3>
          </CardHeader>
          <CardBody>
            <p>Puedes acortar tus enlaces con solo un click</p>
          </CardBody>
          <CardFooter className="justify-end">
            <ArrowUpWideNarrow />
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <h3>Acorta todo lo que quieras!</h3>
          </CardHeader>
          <CardBody>
            <p>Sin limite de enlaces generados</p>
          </CardBody>
          <CardFooter className="justify-end">
            <Gauge />
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <h3>Api para desarrolladores</h3>
          </CardHeader>
          <CardBody>
            <p>Genera enlaces usando nuestra API</p>
          </CardBody>
          <CardFooter className="justify-end">
            <Terminal />
          </CardFooter>
        </Card>
      </section>
    </main>
  )
}
