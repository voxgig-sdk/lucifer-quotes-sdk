# LuciferQuotes SDK feature factory

from luciferquotes_sdk.feature.base_feature import LuciferQuotesBaseFeature
from luciferquotes_sdk.feature.ratelimit_feature import LuciferQuotesRatelimitFeature
from luciferquotes_sdk.feature.retry_feature import LuciferQuotesRetryFeature
from luciferquotes_sdk.feature.test_feature import LuciferQuotesTestFeature
from luciferquotes_sdk.feature.timeout_feature import LuciferQuotesTimeoutFeature


_FEATURES = {
    "base": lambda: LuciferQuotesBaseFeature(),
    "ratelimit": lambda: LuciferQuotesRatelimitFeature(),
    "retry": lambda: LuciferQuotesRetryFeature(),
    "test": lambda: LuciferQuotesTestFeature(),
    "timeout": lambda: LuciferQuotesTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
