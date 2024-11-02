//@collapse

/**
 * @module `Events`
 * Centralized export for all poker-related enums.
 * This module gathers and exports enums for `Rank` and `Suit`,
 * which represent the ranks and suits of playing cards in poker.
 *
 * By centralizing these enums, other modules can import them easily
 * for consistent use across the library.
 *
 * @example
 * // Import all enums from the centralized module
 * import { CasinoEventName, CasinoEventNameEvents, PokerPhaseName, PokerPhaseNameEvents, Rank, RankEvents, Suit, SuitEvents } from './enums';
 */
export * as _BaseEvents from "./_baseEvent";
export * from "./_baseEvent";
export * as PokerSeatEvents from "./pokerSeatEvents";
export * from "./pokerSeatEvents";
