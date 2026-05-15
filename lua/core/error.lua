-- LuciferQuotes SDK error

local LuciferQuotesError = {}
LuciferQuotesError.__index = LuciferQuotesError


function LuciferQuotesError.new(code, msg, ctx)
  local self = setmetatable({}, LuciferQuotesError)
  self.is_sdk_error = true
  self.sdk = "LuciferQuotes"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function LuciferQuotesError:error()
  return self.msg
end


function LuciferQuotesError:__tostring()
  return self.msg
end


return LuciferQuotesError
