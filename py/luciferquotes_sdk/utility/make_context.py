# LuciferQuotes SDK utility: make_context

from luciferquotes_sdk.core.context import LuciferQuotesContext


def make_context_util(ctxmap, basectx):
    return LuciferQuotesContext(ctxmap, basectx)
