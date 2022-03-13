export interface PingMessage {
  message: string;
}

export interface Event {
  ping?: PingMessage;
  pong?: PingMessage;
  tabId?: number;
}
