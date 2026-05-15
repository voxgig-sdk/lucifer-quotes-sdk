<?php
declare(strict_types=1);

// LuciferQuotes SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

LuciferQuotesUtility::setRegistrar(function (LuciferQuotesUtility $u): void {
    $u->clean = [LuciferQuotesClean::class, 'call'];
    $u->done = [LuciferQuotesDone::class, 'call'];
    $u->make_error = [LuciferQuotesMakeError::class, 'call'];
    $u->feature_add = [LuciferQuotesFeatureAdd::class, 'call'];
    $u->feature_hook = [LuciferQuotesFeatureHook::class, 'call'];
    $u->feature_init = [LuciferQuotesFeatureInit::class, 'call'];
    $u->fetcher = [LuciferQuotesFetcher::class, 'call'];
    $u->make_fetch_def = [LuciferQuotesMakeFetchDef::class, 'call'];
    $u->make_context = [LuciferQuotesMakeContext::class, 'call'];
    $u->make_options = [LuciferQuotesMakeOptions::class, 'call'];
    $u->make_request = [LuciferQuotesMakeRequest::class, 'call'];
    $u->make_response = [LuciferQuotesMakeResponse::class, 'call'];
    $u->make_result = [LuciferQuotesMakeResult::class, 'call'];
    $u->make_point = [LuciferQuotesMakePoint::class, 'call'];
    $u->make_spec = [LuciferQuotesMakeSpec::class, 'call'];
    $u->make_url = [LuciferQuotesMakeUrl::class, 'call'];
    $u->param = [LuciferQuotesParam::class, 'call'];
    $u->prepare_auth = [LuciferQuotesPrepareAuth::class, 'call'];
    $u->prepare_body = [LuciferQuotesPrepareBody::class, 'call'];
    $u->prepare_headers = [LuciferQuotesPrepareHeaders::class, 'call'];
    $u->prepare_method = [LuciferQuotesPrepareMethod::class, 'call'];
    $u->prepare_params = [LuciferQuotesPrepareParams::class, 'call'];
    $u->prepare_path = [LuciferQuotesPreparePath::class, 'call'];
    $u->prepare_query = [LuciferQuotesPrepareQuery::class, 'call'];
    $u->result_basic = [LuciferQuotesResultBasic::class, 'call'];
    $u->result_body = [LuciferQuotesResultBody::class, 'call'];
    $u->result_headers = [LuciferQuotesResultHeaders::class, 'call'];
    $u->transform_request = [LuciferQuotesTransformRequest::class, 'call'];
    $u->transform_response = [LuciferQuotesTransformResponse::class, 'call'];
});
