import { Attachment } from "./attachment";

/**
 * @module typed-messenger-platform
 */

export interface WebhookEvent {
  object: "page";
  entry: WebhookEventEntry[];
}

export interface WebhookEventEntry {
  id: string;
  time: number;
  messaging: WebhookMessagingEvent[];
}

export interface WebhookMessagingEvent {
  sender: ConversationParticipant;
  receiver: ConversationParticipant;
  timestamp: number;
}

export interface MessageReceivedEvent extends WebhookMessagingEvent {
  message: Message;
}

export interface AccountLinkingEvent extends WebhookMessagingEvent {
  account_linking: AccountLinkingStatus;
}

export interface MessageDeliveryEvent extends WebhookMessagingEvent {
  delivery: MessageDelivery;
}

export interface MessageEchoEvent extends WebhookMessagingEvent {
  message: EchoMessage;
}

export interface MessageReadEvent extends WebhookMessagingEvent {
  read: MessageRead;
}

export interface ConversationParticipant {
  id: string;
}

export interface Message {
  mid: string;
  text?: string;
  attachments?: Attachment[];
  quick_reply?: QuickReply;
}

export interface QuickReply {
  payload: string;
}

export interface AccountLinkingStatus {
  status: "linked" | "unlinked";
  authorization_code?: string;
}

export interface MessageDelivery {
  mids: string[];
  watermark: number;
  seq: number;
}

export interface EchoMessage {
  is_echo: boolean;
  app_id: string;
  metadata: string;
  mid: string;
  text?: string;
  attachments?: Attachment[];
}

export interface MessageRead {
  watermark: number;
  seq: number;
}
