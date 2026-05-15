# LuciferQuotes SDK utility: make_context
require_relative '../core/context'
module LuciferQuotesUtilities
  MakeContext = ->(ctxmap, basectx) {
    LuciferQuotesContext.new(ctxmap, basectx)
  }
end
