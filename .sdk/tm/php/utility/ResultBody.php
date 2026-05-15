<?php
declare(strict_types=1);

// LuciferQuotes SDK utility: result_body

class LuciferQuotesResultBody
{
    public static function call(LuciferQuotesContext $ctx): ?LuciferQuotesResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
