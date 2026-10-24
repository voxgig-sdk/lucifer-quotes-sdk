# LuciferQuotes SDK utility: prepare_body
require_relative 'media'
module LuciferQuotesUtilities
  PrepareBody = ->(ctx) {
    return nil unless ctx.op.input == "data"
    return LuciferQuotesUtilities.raw_body(ctx.reqdata) if LuciferQuotesUtilities.raw_request?(ctx.point)
    ctx.utility.transform_request.call(ctx)
  }
end
