# LuciferQuotes SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module LuciferQuotesFeatures
  def self.make_feature(name)
    case name
    when "base"
      LuciferQuotesBaseFeature.new
    when "ratelimit"
      LuciferQuotesRatelimitFeature.new
    when "retry"
      LuciferQuotesRetryFeature.new
    when "test"
      LuciferQuotesTestFeature.new
    when "timeout"
      LuciferQuotesTimeoutFeature.new
    else
      LuciferQuotesBaseFeature.new
    end
  end
end
