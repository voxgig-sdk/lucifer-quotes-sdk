# LuciferQuotes SDK exists test

require "minitest/autorun"
require_relative "../LuciferQuotes_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = LuciferQuotesSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
