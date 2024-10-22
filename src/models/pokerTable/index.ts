import { EventEmitter } from "events";
import {
  PokerPlayerInterface,
  PokerSeatConfig,
  PokerSeatInterface,
  PokerTableConfig,
  PokerTableInterface,
} from "../../interfaces";
import { PokerSeat } from "../pokerSeat";

/**
 * @interface `PokerTable`
 * Represents a PokerTable within a PokerRoom.
 * The PokerTable manages player seats, tracks the dealer, small blind, and big blind positions,
 * and handles the start and stop of the PokerGame.
 *
 * @extends EventEmitter
 */
class PokerTable extends EventEmitter implements PokerTableInterface {
  /**
   * @property {string} _id
   * A unique identifier for the PokerTable.
   */
  private _id: string;

  /**
   * @property {number} _size
   * The maximum number of players that can be seated at the PokerTable.
   */
  private _size: number;

  /**
   * @property {PokerSeatInterface[]} _seats
   * An array of players currently seated at the PokerTable.
   */
  private _seats: PokerSeatInterface[];

  /**
   * @property {boolean} gameInProgress
   * A boolean indicating whether a PokerGame is currently in progress at the table.
   */
  private _gameInProgress: boolean;

  /**
   * @method constructor
   * @public
   * Creates an instance of a Deck with 52 cards.
   * Automatically initializes the deck with all combinations of ranks and suits.
   *
   * @example
   * const deck = new Deck();
   */
  constructor(config: PokerTableConfig) {
    super();
    this._id = config.id ? config.id : ``;
    this._size = config.size ? config.size : 8;
    this._seats = config.seats ? config.seats : [];
    this._gameInProgress = false;
    this.init();
  }

  /**
   * @method `init`
   * @private
   * Initializes the deck with 52 unique cards.
   * This method is called automatically inside the constructor during deck creation.
   * @emits `deck:initialized` : Emits a `deck:initialized` event when the deck is created.
   * @returns {void}
   */
  private init(): void {
    for (let i = 0; i < this._size; i++) {
      const seat = new PokerSeat({id:``, position:i, isDealer: false, isBigBlind: false, isSmallBlind: false, player:undefined});
      this._seats?.push(seat);
    }
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
   * @method `setId`
   * @public
   * Returns the poker table's `id`.
   * @returns {string} The poker table's `id`.
   *
   * @example
   * const rank = card.getRank();
   * console.log(rank); // "A"
   */
  private setId(id: string): string {
    this._id = id;
    return this._id;
  }

  /**
   * @method `getSize`
   * Starts a new PokerGame if there are at least two active players at the PokerTable.
   * This method initiates the game flow, including assigning blinds and starting the rounds.
   * @returns {number}
   */
  public getSize(): number {
    return this._size;
  }

  /**
   * @method `setSize`
   * @public
   * Returns the poker table's `id`.
   * @returns {number} The poker table's `id`.
   *
   * @example
   * const rank = card.getRank();
   * console.log(rank); // "A"
   */
  private setSize(size: number): number {
    this._size = size;
    return this._size;
  }

  /**
   * @method `getSeats`
   * Starts a new PokerGame if there are at least two active players at the PokerTable.
   * This method initiates the game flow, including assigning blinds and starting the rounds.
   * @returns {number}
   */
  public getSeats(): PokerSeatInterface[] {
    return this._seats;
  }

  /**
   * @method `setSeats`
   * @public
   * Returns the poker table's `id`.
   * @returns {number} The poker table's `id`.
   *
   * @example
   * const rank = card.getRank();
   * console.log(rank); // "A"
   */
  private setSeats(
    seats: PokerSeatInterface[] 
  ): PokerSeatInterface[]  {
    this._seats = seats;
    return this._seats;
  }

  private occupySeat(position:number,player:PokerPlayerInterface): boolean {
    for (let i = 0; i < this.getSeats().length; i++) {
      let seat = this.getSeats()[i]; 
      let seatPosition = seat.getPosition();
      if (seatPosition === position) {
        if (!seat.isOccupied()) {
          seat.setPlayer(player);
          console.log("Seat has been assigned");
          return true;
        }
      }
    }
    return false;
  }
}

export { PokerTable };