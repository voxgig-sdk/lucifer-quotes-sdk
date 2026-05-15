<?php
declare(strict_types=1);

// LuciferQuotes SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class LuciferQuotesMakeContext
{
    public static function call(array $ctxmap, ?LuciferQuotesContext $basectx): LuciferQuotesContext
    {
        return new LuciferQuotesContext($ctxmap, $basectx);
    }
}
