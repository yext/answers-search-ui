/**
 * Defines a status of a system, including entry and exit behaviors and
 * any related data and actions during this state.
 */
export class State {
  constructor (id) {
    this.id = id;
  }

  canEnter (context) { return true; }
  onEnter (prevState) {}
  onExit (nextState) {}
}

/**
 * Finite state machine model that tracks current behavior status and performs state transitions.
 */
export class StateMachine {
  constructor (initialState, transitions) {
    /**
     * @type {State} initial state where the execution of the machine starts
     */
    this._state = initialState;

    /**
     * @type {Object<string, Object<string, State>>}  state-transition map that defines
     * what states that machine can move to based on current state and event
     */
    this.transitions = transitions;
  }

  /**
   * Change current state to new state if the given event is associated
   * with one of the possible transitions from the current state
   *
   * @param {string} event an event to trigger a state transition
   * @param {*} context event context and/or data to pass to the possible next state
   * @returns {State} updated state
   */
  updateState (event, context) {
    const nextState = this.transitions[this._state.id][event];
    if (nextState && nextState !== this._state && nextState.canEnter(context)) {
      this._state.onExit(nextState);
      nextState.onEnter(this._state);
      this._state = nextState;
    }
    return this._state;
  }
}
