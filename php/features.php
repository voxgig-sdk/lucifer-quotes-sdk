<?php
declare(strict_types=1);

// LuciferQuotes SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class LuciferQuotesFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new LuciferQuotesBaseFeature();
            case "test":
                return new LuciferQuotesTestFeature();
            default:
                return new LuciferQuotesBaseFeature();
        }
    }
}
