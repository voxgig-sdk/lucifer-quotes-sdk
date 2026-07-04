// Typed models for the LuciferQuotes SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Quote {
  author?: string
  episode?: string
  quote?: string
  season?: string
}

export type QuoteLoadMatch = Partial<Quote>

