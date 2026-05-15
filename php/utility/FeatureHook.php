<?php
declare(strict_types=1);

// LuciferQuotes SDK utility: feature_hook

class LuciferQuotesFeatureHook
{
    public static function call(LuciferQuotesContext $ctx, string $name): void
    {
        if (!$ctx->client) {
            return;
        }
        $features = $ctx->client->features ?? null;
        if (!$features) {
            return;
        }
        foreach ($features as $f) {
            if (method_exists($f, $name)) {
                $f->$name($ctx);
            }
        }
    }
}
