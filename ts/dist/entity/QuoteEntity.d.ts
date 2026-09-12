import { LuciferQuotesEntityBase } from '../LuciferQuotesEntityBase';
import type { LuciferQuotesSDK } from '../LuciferQuotesSDK';
import type { Control } from '../types';
import type { Quote, QuoteLoadMatch } from '../LuciferQuotesTypes';
declare class QuoteEntity extends LuciferQuotesEntityBase<Quote> {
    constructor(client: LuciferQuotesSDK, entopts: any);
    make(this: QuoteEntity): QuoteEntity;
    load(this: any, reqmatch?: QuoteLoadMatch, ctrl?: Control): Promise<QuoteEntity>;
}
export { QuoteEntity };
