package core

type LuciferQuotesError struct {
	IsLuciferQuotesError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewLuciferQuotesError(code string, msg string, ctx *Context) *LuciferQuotesError {
	return &LuciferQuotesError{
		IsLuciferQuotesError: true,
		Sdk:              "LuciferQuotes",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *LuciferQuotesError) Error() string {
	return e.Msg
}
