# LuciferQuotes SDK utility: make_context

from core.context import LuciferQuotesContext


def make_context_util(ctxmap, basectx):
    return LuciferQuotesContext(ctxmap, basectx)
