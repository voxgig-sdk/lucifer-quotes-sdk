# frozen_string_literal: true

# Typed models for the LuciferQuotes SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Quote entity data model.
#
# @!attribute [rw] author
#   @return [String, nil]
#
# @!attribute [rw] episode
#   @return [String, nil]
#
# @!attribute [rw] quote
#   @return [String, nil]
#
# @!attribute [rw] season
#   @return [String, nil]
Quote = Struct.new(
  :author,
  :episode,
  :quote,
  :season,
  keyword_init: true
)

# Match filter for Quote#load (any subset of Quote fields).
#
# @!attribute [rw] author
#   @return [String, nil]
#
# @!attribute [rw] episode
#   @return [String, nil]
#
# @!attribute [rw] quote
#   @return [String, nil]
#
# @!attribute [rw] season
#   @return [String, nil]
QuoteLoadMatch = Struct.new(
  :author,
  :episode,
  :quote,
  :season,
  keyword_init: true
)

