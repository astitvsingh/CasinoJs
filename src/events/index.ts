//@collapse

// import * as BaseEventModule from "./_base";
// import { BaseEvent } from "./_base";
// import * as PokerSeatEventModule from "./pokerSeat";
// import { PokerSeatEvent } from "./pokerSeat";
// const Events = { BaseEvent, BaseEvents };

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
export * as BaseEventModule from "./_base";
export * from "./_base";
export * as PokerSeatEventModule from "./pokerSeat";
export * from "./pokerSeat";
