# LuciferQuotes SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

LuciferQuotesUtility.registrar = ->(u) {
  u.clean = LuciferQuotesUtilities::Clean
  u.done = LuciferQuotesUtilities::Done
  u.make_error = LuciferQuotesUtilities::MakeError
  u.feature_add = LuciferQuotesUtilities::FeatureAdd
  u.feature_hook = LuciferQuotesUtilities::FeatureHook
  u.feature_init = LuciferQuotesUtilities::FeatureInit
  u.fetcher = LuciferQuotesUtilities::Fetcher
  u.make_fetch_def = LuciferQuotesUtilities::MakeFetchDef
  u.make_context = LuciferQuotesUtilities::MakeContext
  u.make_options = LuciferQuotesUtilities::MakeOptions
  u.make_request = LuciferQuotesUtilities::MakeRequest
  u.make_response = LuciferQuotesUtilities::MakeResponse
  u.make_result = LuciferQuotesUtilities::MakeResult
  u.make_point = LuciferQuotesUtilities::MakePoint
  u.make_spec = LuciferQuotesUtilities::MakeSpec
  u.make_url = LuciferQuotesUtilities::MakeUrl
  u.param = LuciferQuotesUtilities::Param
  u.prepare_auth = LuciferQuotesUtilities::PrepareAuth
  u.prepare_body = LuciferQuotesUtilities::PrepareBody
  u.prepare_headers = LuciferQuotesUtilities::PrepareHeaders
  u.prepare_method = LuciferQuotesUtilities::PrepareMethod
  u.prepare_params = LuciferQuotesUtilities::PrepareParams
  u.prepare_path = LuciferQuotesUtilities::PreparePath
  u.prepare_query = LuciferQuotesUtilities::PrepareQuery
  u.result_basic = LuciferQuotesUtilities::ResultBasic
  u.result_body = LuciferQuotesUtilities::ResultBody
  u.result_headers = LuciferQuotesUtilities::ResultHeaders
  u.transform_request = LuciferQuotesUtilities::TransformRequest
  u.transform_response = LuciferQuotesUtilities::TransformResponse
}
