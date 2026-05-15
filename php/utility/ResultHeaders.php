<?php
declare(strict_types=1);

// LuciferQuotes SDK utility: result_headers

class LuciferQuotesResultHeaders
{
    public static function call(LuciferQuotesContext $ctx): ?LuciferQuotesResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
