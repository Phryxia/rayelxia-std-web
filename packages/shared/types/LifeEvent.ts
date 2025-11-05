import type { Entity } from './Entity'

export interface LifeEventBase extends Entity {
  poi?: GeolocationCoordinates | null
  /** iso date */
  start: string
  isPoint: boolean
}

export interface LifePointEvent extends LifeEventBase {
  end?: null
  isPoint: true
}

export interface LifeLineEvent extends LifeEventBase {
  /** iso date */
  end?: string | null
  /** Exist if and only if some event is paused then resumed */
  prevEventId?: string | null
  /** Exist if and only if some event is paused then resumed */
  nextEventId?: string | null
  isPoint: false
}

export type LifeEvent = LifePointEvent | LifeLineEvent
