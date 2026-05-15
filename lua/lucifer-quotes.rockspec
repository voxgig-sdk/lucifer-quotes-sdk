package = "voxgig-sdk-lucifer-quotes"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/lucifer-quotes-sdk.git"
}
description = {
  summary = "LuciferQuotes SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["lucifer-quotes_sdk"] = "lucifer-quotes_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
