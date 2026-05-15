
import { Context } from './Context'


class LuciferQuotesError extends Error {

  isLuciferQuotesError = true

  sdk = 'LuciferQuotes'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  LuciferQuotesError
}

