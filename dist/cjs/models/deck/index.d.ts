import { EventEmitter } from "events";
import { CardInterface, DeckInterface } from "../../interfaces";
/**
 * @class `Deck`
 * Represents a deck of 52 playing cards used in poker games.
 * This class extends `EventEmitter` and implements the `DeckInterface` interface.
 *
 * The `Deck` class provides methods to shuffle the deck, draw cards, and emits
 * events for important actions like shuffling and drawing cards.
 *
 * @example
 * const deck = new Deck();
 * deck.on('deck:shuffled', () => console.log('Deck has been shuffled.'));
 * deck.shuffle();
 * const card = deck.draw();
 * console.log(card?.toString()); // "A of Spades"
 */
declare class Deck extends EventEmitter implements DeckInterface {
    /******************* PROPERTIES *******************/
    /**
     * @property {CardInterface[]} cards
     * @private
     * Holds the array of 52 playing cards in the deck.
     * @default []
     */
    private cards;
    /**
     * @method constructor
     * @public
     * Creates an instance of a Deck with 52 cards.
     * Automatically initializes the deck with all combinations of ranks and suits.
     *
     * @example
     * const deck = new Deck();
     */
    constructor();
    /**
     * @method `init`
     * @private
     * Initializes the deck with 52 unique cards.
     * This method is called automatically inside the constructor during deck creation.
     * @emits `deck:initialized` : Emits a `deck:initialized` event when the deck is created.
     * @returns {void}
     */
    private init;
    /**
     * @method `shuffle`
     * @public
     * Shuffles the deck of cards using the Fisher-Yates algorithm.
     * @emits `deck:shuffled` Emits a `deck:shuffled` event after the deck is shuffled.
     * @returns {void}
     *
     * @example
     * const deck = new Deck();
     * deck.shuffle();
     */
    shuffle(): void;
    /**
     * @method `draw`
     * @public
     * Draws a card from the top of the deck.
     * Removes and returns the top card from the deck, or `undefined` if the deck is empty.
     * @emits `deck:drawn` : Emits a `deck:drawn` event when a card is drawn.
     * @returns {CardInterface | undefined} Returns the drawn card or `undefined` if no cards remain.
     *
     * @example
     * const deck = new Deck();
     * const drawnCard = deck.draw();
     * console.log(drawnCard?.toString()); // "A of Spades"
     */
    draw(): CardInterface | undefined;
    /**
     * @method `getCards`
     * @public
     * Returns the current state of the deck.
     * @returns {CardInterface[]} The array of cards in the deck.
     *
     * @example
     * const cards = deck.getCards();
     * console.log(cards.length); // 52 (before shuffling or drawing)
     */
    getCards(): CardInterface[];
}
export { Deck };