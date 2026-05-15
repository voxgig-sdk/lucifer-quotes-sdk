# LuciferQuotes SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module LuciferQuotesFeatures
  def self.make_feature(name)
    case name
    when "base"
      LuciferQuotesBaseFeature.new
    when "test"
      LuciferQuotesTestFeature.new
    else
      LuciferQuotesBaseFeature.new
    end
  end
end
