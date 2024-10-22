import { EventEmitter } from "events";
import { CardInterface } from "../card";

/**
 * @interface `PokerPlayerConfig`
 * Represents a PokerPlayer Config.
 */
interface PokerPlayerConfig {
  /**
   * @property {string | undefined} id
   * The maximum number of players that can be seated at the PokerTable[2-14].
   */
  id: string | undefined;

  /**
   * @property {string | undefined} name
   * The maximum number of players that can be seated at the PokerTable[2-14].
   */
  name: string | undefined;

  /**
   * @property {number} chips
   * @private
   * The number of chips the player currently has.
   */
  chips: number;

  /**
   * @property {CardInterface[]} hand
   * @private
   * The player's hole cards (the two cards dealt to the player at the start of the game).
   */
  hand: CardInterface[];

  /**
   * @property {boolean} isFolded
   * @private
   * Indicates whether the player is still active in the current round or has folded.
   */
  isFolded: boolean;
}

/**
 * @interface `PokerPlayerInterface`
 * Represents a player seated at the PokerTable.
 * The player can place bets, fold, and manage their chip stack during the game.
 *
 * @extends NodeJS.EventEmitter
 */
interface PokerPlayerInterface extends NodeJS.EventEmitter {
}

export { PokerPlayerConfig, PokerPlayerInterface };