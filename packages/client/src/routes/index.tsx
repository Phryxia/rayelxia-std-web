import type { ReactElement } from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index(): ReactElement {
  return <article>random page</article>
}
