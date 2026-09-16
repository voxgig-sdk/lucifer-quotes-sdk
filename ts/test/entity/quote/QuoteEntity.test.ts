

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { LuciferQuotesSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('QuoteEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when LUCIFER_QUOTES_TEST_LIVE=TRUE.
  afterEach(liveDelay('LUCIFER_QUOTES_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = LuciferQuotesSDK.test()
    const ent = testsdk.Quote()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.LUCIFER_QUOTES_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'quote.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"author","req":false,"type":"`$STRING`","index$":0},{"active":true,"name":"episode","req":false,"type":"`$STRING`","index$":1},{"active":true,"name":"quote","req":false,"type":"`$STRING`","index$":2},{"active":true,"name":"season","req":false,"type":"`$STRING`","index$":3}],"name":"quote","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"query":[{"active":true,"example":1,"kind":"query","name":"number","orig":"number","reqd":false,"type":"`$INTEGER`","index$":0}]},"contract":{"id":"GET /api/quotes","json":"{\"operationId\":\"getQuotes\",\"parameters\":[{\"description\":\"The number of random quotes to retrieve\",\"in\":\"query\",\"name\":\"number\",\"required\":false,\"schema\":{\"default\":1,\"minimum\":1,\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"examples\":{\"multipleQuotes\":{\"summary\":\"Multiple quotes response\",\"value\":[{\"author\":\"Lucifer Morningstar\",\"episode\":\"1\",\"quote\":\"I'm like walking heroin. Very habit forming. It never ends well.\",\"season\":\"1\"},{\"author\":\"Lucifer Morningstar\",\"episode\":\"2\",\"quote\":\"Detective! What a lovely surprise.\",\"season\":\"1\"}]},\"singleQuote\":{\"summary\":\"Single quote response\",\"value\":{\"author\":\"Lucifer Morningstar\",\"episode\":\"1\",\"quote\":\"I'm like walking heroin. Very habit forming. It never ends well.\",\"season\":\"1\"}}},\"schema\":{\"oneOf\":[{\"allOf\":[{\"properties\":{\"author\":{\"description\":\"The character who said the quote\",\"type\":\"string\"},\"episode\":{\"description\":\"The episode number where the quote appears\",\"type\":\"string\"},\"quote\":{\"description\":\"The quote text\",\"type\":\"string\"},\"season\":{\"description\":\"The season number where the quote appears\",\"type\":\"string\"}},\"required\":[\"quote\",\"author\"],\"type\":\"object\"}]},{\"items\":{\"properties\":{\"author\":{\"description\":\"The character who said the quote\",\"type\":\"string\"},\"episode\":{\"description\":\"The episode number where the quote appears\",\"type\":\"string\"},\"quote\":{\"description\":\"The quote text\",\"type\":\"string\"},\"season\":{\"description\":\"The season number where the quote appears\",\"type\":\"string\"}},\"required\":[\"quote\",\"author\"],\"type\":\"object\"},\"type\":\"array\"}]}}},\"description\":\"Successful response with quote(s)\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"type\":\"string\"},\"message\":{\"description\":\"Detailed error description\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Bad request - invalid parameters\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"type\":\"string\"},\"message\":{\"description\":\"Detailed error description\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/api/quotes","segments":[{"lit":"api"},{"lit":"quotes"}],"select":{"exist":["number"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"quote","name__orig":"quote","Name":"Quote","name_":"quote","name-":"quote","NAME":"QUOTE","index$":0}, {"active":true,"entity":"quote","key$":"BasicQuoteFlow","kind":"basic","name":"BasicQuoteFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"quote_ref01","srcdatavar":"quote_ref01_data","suffix":"_dt0"},"match":{},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-quote_ref01"}}],"index$":0}]}, 'Quote')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let quote_ref01_data = Object.values(setup.data.existing.quote)[0] as any

    // LOAD
    const quote_ref01_ent = client.Quote()
    const quote_ref01_match_dt0: any = {}
    const quote_ref01_data_dt0 = (await quote_ref01_ent.load(quote_ref01_match_dt0)).data()
    assert(null != quote_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/quote/QuoteTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = LuciferQuotesSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['quote01','quote02','quote03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'LUCIFER_QUOTES_TEST_QUOTE_ENTID': idmap,
    'LUCIFER_QUOTES_TEST_LIVE': 'FALSE',
    'LUCIFER_QUOTES_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['LUCIFER_QUOTES_TEST_QUOTE_ENTID']

  const live = 'TRUE' === env.LUCIFER_QUOTES_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['LUCIFER_QUOTES_TEST_QUOTE_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new LuciferQuotesSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.LUCIFER_QUOTES_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
