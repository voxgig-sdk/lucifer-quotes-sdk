
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { LuciferQuotesSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = LuciferQuotesSDK.test()
    equal(testsdk instanceof LuciferQuotesSDK, true,
      'LuciferQuotesSDK.test() must return a client synchronously')
  })

})
