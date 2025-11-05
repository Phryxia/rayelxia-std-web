import type { LifeEvent, LifeLineEvent } from '@shared/types/LifeEvent'
import { rejectIfNotOk } from '@shared/utils/rejectIfNotOk'

export const LifeEventsApi = {
  inactive: {
    path: '/inactive-events',
    getCacheKey(): any[] {
      return [this.path]
    },
    fetch(host: string): Promise<LifeEvent[]> {
      return fetch(`${host}${this.path}`).then((res) => res.json())
    },
  },
  point: {
    path: '/point-event',
    getCacheKey(): any[] {
      return [this.path]
    },
    post(host: string, payload: Omit<LifeEvent, 'id'>): Promise<LifeEvent> {
      return fetch(`${host}${this.path}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      }).then(rejectIfNotOk<LifeEvent>)
    },
  },
  lines: {
    path: '/line-events',
    getCacheKey(): any[] {
      return [this.path]
    },
    fetch(host: string): Promise<LifeLineEvent[]> {
      return fetch(`${host}${this.path}`).then((res) => res.json())
    },
  },
  startLine: {
    path: '/start-line-event',
    post(host: string, payload: Omit<LifeLineEvent, 'id'>): Promise<LifeLineEvent> {
      return fetch(`${host}${this.path}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      }).then(rejectIfNotOk<LifeLineEvent>)
    },
  },
  endLine: {
    path: '/end-line-event/:id',
    getCacheKey(id: string): any[] {
      return [this.path, id]
    },
    post(host: string, id: string, end: Date): Promise<LifeLineEvent> {
      const path = this.path.replace(':id', id)
      return fetch(`${host}${path}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ end: end.toISOString() }),
      }).then(rejectIfNotOk<LifeLineEvent>)
    },
  },
  active: {
    path: '/active-events',
    getCacheKey(): any[] {
      return [this.path]
    },
    fetch(host: string): Promise<LifeEvent[]> {
      return fetch(`${host}${this.path}`).then((res) => res.json())
    },
  },
}
