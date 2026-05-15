<?php
declare(strict_types=1);

// LuciferQuotes SDK utility: feature_add

class LuciferQuotesFeatureAdd
{
    public static function call(LuciferQuotesContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
