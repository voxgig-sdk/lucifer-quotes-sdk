# LuciferQuotes SDK feature factory

from feature.base_feature import LuciferQuotesBaseFeature
from feature.test_feature import LuciferQuotesTestFeature


def _make_feature(name):
    features = {
        "base": lambda: LuciferQuotesBaseFeature(),
        "test": lambda: LuciferQuotesTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
