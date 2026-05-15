# ProjectName SDK exists test

import pytest
from luciferquotes_sdk import LuciferQuotesSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = LuciferQuotesSDK.test(None, None)
        assert testsdk is not None
