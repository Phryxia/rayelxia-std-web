import type { ReactElement } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { hello } from '@rayelxia/shared' // use shared package using this way

export const Route = createFileRoute('/')({
  component: Index,
})

function Index(): ReactElement {
  return <article>{hello()}</article>
}
