import { describe, test } from 'node:test'
import { SDK } from '..'
import { runDefinitionPoint } from './definition-runner'
import { isControlSkipped } from './utility'


// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN: any[] = [
  {
    "entity": "quote",
    "accessor": "Quote",
    "op": "load",
    "method": "GET",
    "path": "/api/quotes",
    "args": [],
    "select": {
      "number": "v1"
    },
    "headers": [],
    "query": [
      "number"
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "quote": "I'm like walking heroin. Very habit forming. It never ends well.",
      "author": "Lucifer Morningstar",
      "season": "1",
      "episode": "1"
    },
    "idField": "id"
  }
]


describe('definition', () => {
  for (const point of PLAN) {
    test(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
      const control = isControlSkipped('entityOp', point.entity + '.' + point.op, 'definition')
      if (control.skip) {
        t.skip(control.reason || 'skipped via sdk-test-control.json')
        return
      }
      await runDefinitionPoint(SDK, point)
    })
  }
})
