# LuciferQuotes SDK utility: feature_add
module LuciferQuotesUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
