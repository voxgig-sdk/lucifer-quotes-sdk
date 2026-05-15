package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewQuoteEntityFunc func(client *LuciferQuotesSDK, entopts map[string]any) LuciferQuotesEntity

