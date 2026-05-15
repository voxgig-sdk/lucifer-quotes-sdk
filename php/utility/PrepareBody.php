<?php
declare(strict_types=1);

// LuciferQuotes SDK utility: prepare_body

class LuciferQuotesPrepareBody
{
    public static function call(LuciferQuotesContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
