// eslint-disable-next-line no-shadow
export enum MessageType {
  // Message type used for dispatch events
  // from the Proxy Stores to background
  DISPATCH = 'chromex.dispatch',

  // Message type for fetching current state from
  // background to Proxy Stores
  FETCH_STATE = 'chromex.fetch_state',

  // Message type for state update events from
  // background to Proxy Stores
  STATE = 'chromex.state',

  // Message type for state patch events from
  // background to Proxy Stores
  PATCH_STATE = 'chromex.patch_state',
}
