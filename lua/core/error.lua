-- LuciferQuotes SDK error

local json = require("dkjson")

local LuciferQuotesError = {}
LuciferQuotesError.__index = LuciferQuotesError

-- Reachable for a debugger, absent from the table itself: the context holds
-- the live spec and options, and an error is what gets dumped or encoded.
local CONTEXT = setmetatable({}, { __mode = "k" })


function LuciferQuotesError.new(code, msg, ctx)
  local self = setmetatable({}, LuciferQuotesError)
  self.is_sdk_error = true
  self.sdk = "LuciferQuotes"
  self.code = code or ""
  self.msg = msg or ""
  self.result = nil
  self.spec = nil
  self.status = -1
  CONTEXT[self] = ctx
  return self
end


function LuciferQuotesError:context()
  return CONTEXT[self]
end


function LuciferQuotesError:error()
  return self.msg
end


function LuciferQuotesError:not_found()
  return 404 == self.status
end


-- What make_error attached is already cleaned; the context is not part of
-- the record.
function LuciferQuotesError:to_table()
  return {
    sdk = self.sdk,
    code = self.code,
    msg = self.msg,
    status = self.status,
    result = self.result,
    spec = self.spec,
  }
end


function LuciferQuotesError:to_json()
  return json.encode(self:to_table())
end


function LuciferQuotesError:__tostring()
  return self.msg
end


function LuciferQuotesError.__tojson(self)
  return self:to_json()
end


return LuciferQuotesError
