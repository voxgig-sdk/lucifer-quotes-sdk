

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"author":{"a":true,"h":"Author","n":"author","r":false,"t":"`$STRING`","key$":"author","index$":0},"episode":{"a":true,"h":"Episode","n":"episode","r":false,"t":"`$STRING`","key$":"episode","index$":1},"quote":{"a":true,"h":"Quote","n":"quote","r":false,"t":"`$STRING`","key$":"quote","index$":2},"season":{"a":true,"h":"Season","n":"season","r":false,"t":"`$STRING`","key$":"season","index$":3}},"name":"quote","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/quotes","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":1,"k":"query","n":"number","or":"number","r":false,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"GET","o":"/api/quotes","q":{"exist":["number"]},"r":{},"s":[{"lit":"api"},{"lit":"quotes"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"quote","name__orig":"quote","Name":"Quote","name_":"quote","name-":"quote","NAME":"QUOTE","index$":0}, {"active":true,"entity":"quote","key$":"BasicQuoteFlow","kind":"basic","name":"BasicQuoteFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"quote_ref01","srcdatavar":"quote_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-quote_ref01"}}],"index$":0}]}, 'Quote', {"GET /api/quotes":{"protocol":"http","operationId":"getQuotes","responses":{"200":{"description":"Successful response with quote(s)","content":{"application/json":{"schema":{"oneOf":[{"allOf":[{"type":"object","properties":{"quote":{"type":"string","description":"The quote text"},"author":{"type":"string","description":"The character who said the quote"},"season":{"type":"string","description":"The season number where the quote appears"},"episode":{"type":"string","description":"The episode number where the quote appears"}},"required":["quote","author"],"x-ref":"#/components/schemas/Quote"}],"x-ref":"#/components/schemas/SingleQuote"},{"type":"array","items":{"type":"object","properties":{"quote":{"type":"string","description":"The quote text"},"author":{"type":"string","description":"The character who said the quote"},"season":{"type":"string","description":"The season number where the quote appears"},"episode":{"type":"string","description":"The episode number where the quote appears"}},"required":["quote","author"],"x-ref":"#/components/schemas/Quote"},"x-ref":"#/components/schemas/MultipleQuotes"}]},"examples":{"singleQuote":{"summary":"Single quote response","value":{"quote":"I'm like walking heroin. Very habit forming. It never ends well.","author":"Lucifer Morningstar","season":"1","episode":"1"}},"multipleQuotes":{"summary":"Multiple quotes response","value":[{"quote":"I'm like walking heroin. Very habit forming. It never ends well.","author":"Lucifer Morningstar","season":"1","episode":"1"},{"quote":"Detective! What a lovely surprise.","author":"Lucifer Morningstar","season":"1","episode":"2"}]}}}}},"400":{"description":"Bad request - invalid parameters","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string","description":"Error message"},"message":{"type":"string","description":"Detailed error description"}},"x-ref":"#/components/schemas/Error"}}}},"500":{"description":"Internal server error","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string","description":"Error message"},"message":{"type":"string","description":"Detailed error description"}},"x-ref":"#/components/schemas/Error"}}}}},"parameters":[{"name":"number","in":"query","description":"The number of random quotes to retrieve","required":false,"schema":{"type":"integer","minimum":1,"default":1},"index$":0}],"securitySource":"unspecified"}})
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
  
