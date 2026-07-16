<?php
declare(strict_types=1);

// LuciferQuotes SDK base feature

class LuciferQuotesBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(LuciferQuotesContext $ctx, array $options): void {}
    public function PostConstruct(LuciferQuotesContext $ctx): void {}
    public function PostConstructEntity(LuciferQuotesContext $ctx): void {}
    public function SetData(LuciferQuotesContext $ctx): void {}
    public function GetData(LuciferQuotesContext $ctx): void {}
    public function GetMatch(LuciferQuotesContext $ctx): void {}
    public function SetMatch(LuciferQuotesContext $ctx): void {}
    public function PrePoint(LuciferQuotesContext $ctx): void {}
    public function PreSpec(LuciferQuotesContext $ctx): void {}
    public function PreRequest(LuciferQuotesContext $ctx): void {}
    public function PreResponse(LuciferQuotesContext $ctx): void {}
    public function PreResult(LuciferQuotesContext $ctx): void {}
    public function PreDone(LuciferQuotesContext $ctx): void {}
    public function PreUnexpected(LuciferQuotesContext $ctx): void {}
}
