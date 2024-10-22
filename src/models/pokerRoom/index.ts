import { EventEmitter } from "events";
import {
  PokerPlayerInterface,
  PokerRoomInterface,
  PokerTableInterface,
} from "../../interfaces";
import { PokerTable } from "../pokerTable";

/**
 * @class `PokerRoom`
 * Represents a PokerRoom within a Casino that holds a single PokerTable. The PokerRoom manages the player queue, automatically assigning players to the PokerTable as seats become available.
 * This class extends `EventEmitter` and implements the `PokerRoomInterface` interface.
 */
class PokerRoom extends EventEmitter implements PokerRoomInterface {
  /**
   * @property {string} _id
   * @private
   * A unique identifier for the PokerRoom.
   */
  private _id: string;

  /**
   * @property {string} _name
   * @private
   * The name of the PokerRoom.
   */
  private _name: string;

  /**
   * @property {PokerPlayerInterface[]} _queue
   * @private
   * An array of players who are waiting for a seat at the PokerTable.
   * Every player who enters the PokerRoom is automatically added to this queue.
   */
  private _queue: PokerPlayerInterface[];

  /**
   * @property {PokerTableInterface} _table
   * @private
   * The PokerTable that is contained within the PokerRoom.
   */


  /** To check whether seats are occupied or not and seats array are being taken from pokertable class */
  private _table: PokerTableInterface;

  /**
   * @method constructor
   * @public
   * Creates an instance of a Deck with 52 cards.
   * Automatically initializes the deck with all combinations of ranks and suits.
   *
   * @example
   * const deck = new Deck();
   */
  constructor(id: string | undefined, name: string | undefined, options: {}) {
    super();
    this._id = id || ``;
    this._name = name || ``;
    this._queue = [];
    this._table = new PokerTable({id:"", size:2, seats:undefined});
  }

  /**
   * @method `getId`
   * @public
   * Returns the poker table's `id`.
   * @returns {string} The poker table's `id`.
   *
   * @example
   * const rank = card.getRank();
   * console.log(rank); // "A"
   */
  public getId(): string {
    return this._id;
  }

  /**
   * @method `getName`
   * @public
   * Returns the poker room's `name`.
   * @returns {string} The poker room's `name`.
   *
   * @example
   * const rank = card.getName();
   * console.log(rank); // "A"
   */
  public getName(): string {
    return this._name;
  }

  /**
   * @method `getQueue`
   * @public
   * Returns the poker room's `name`.
   * @returns {PokerPlayerInterface[]} The poker room's `name`.
   *
   * @example
   * const rank = card.getName();
   * console.log(rank); // "A"
   */
  public getQueue(): PokerPlayerInterface[] {
    return this._queue;
  }

  /**
   * @method `getTable`
   * @public
   * Returns the poker room's `name`.
   * @returns {PokerTableInterface} The poker room's `name`.
   *
   * @example
   * const rank = card.getName();
   * console.log(rank); // "A"
   */
  public getTable(): PokerTableInterface {
    return this._table;
  }

  /**
   * @method `setId`
   * @private
   * Returns the poker table's `id`.
   * @returns {string} The poker table's `id`.
   *
   * @example
   * const rank = card.setRank();
   * console.log(rank); // "A"
   */
  private setId(id: string): string {
    this._id = id;
    return this._id;
  }

  /**
   * @method `setName`
   * @private
   * Returns the poker room's `name`.
   * @returns {string} The poker room's `name`.
   *
   * @example
   * const rank = card.setName();
   * console.log(rank); // "A"
   */
  public setName(name: string): string {
    this._name = name;
    return this._name;
  }

  /**
   * @method `setQueue`
   * @private
   * Returns the poker room's `name`.
   * @returns {PokerPlayerInterface[]} The poker room's `name`.
   *
   * @example
   * const rank = card.setName();
   * console.log(rank); // "A"
   */
  private setQueue(queue: PokerPlayerInterface[]): PokerPlayerInterface[] {
    this._queue = queue;
    return this._queue;
  }

  /**
   * @method `setTable`
   * @private
   * Returns the poker room's `name`.
   * @returns {PokerTableInterface} The poker room's `name`.
   *
   * @example
   * const rank = card.setName();
   * console.log(rank); // "A"
   */
  private setTable(table: PokerTableInterface): PokerTableInterface {
    this._table = table;
    return this._table;
  }
}

export { PokerRoom };
