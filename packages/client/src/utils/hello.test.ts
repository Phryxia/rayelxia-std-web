import { test, expect } from 'vitest'
import { hello } from '@rayelxia/shared' // you can also refer shared package in test codes

test('client package test', () => {
  expect(hello()).toBeTruthy()
})
