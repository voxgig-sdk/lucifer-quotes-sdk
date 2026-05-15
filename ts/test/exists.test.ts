
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { LuciferQuotesSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await LuciferQuotesSDK.test()
    equal(null !== testsdk, true)
  })

})
