/**
 * @module typed-messenger-platform
 */

import { Attachment } from "./attachment";

export type Request = SenderActionRequest | MessageRequest;

export interface Response {
  recipient_id: string;
  message_id: string;
}

export interface Error {
  message: string;
  type: string;
  code: number;
  error_subcode: number;
  fbtrace_id: string;
}

export interface SenderActionRequest {
  recipient: Recipient;
  sender_action: SenderAction;
}

// Message Request
export interface MessageRequest {
  // The messaging type of the message being sent.
  messaging_type: MessagingType;
  recipient: Recipient;
  message: Message;
  // Push notification type
  // REGULAR: sound/vibration
  // SILENT_PUSH: on-screen notification only
  // NO_PUSH: no notification
  notification_type?: NotificationType;
  // The message tag string
  tag?: string;
}

export type SenderAction = "typing_on" | "typing_off" | "mark_seen";

export type MessagingType = "RESPONSE" | "UPDATE" | "MESSAGE_TAG";

export type NotificationType = "REGULAR" | "SILENT_PUSH" | "NO_PUSH";

// Description of the message recipient. All requests must include one of id, phone_number, or user_ref.
export interface Recipient {
  id: string;
  phone_number?: string;
  user_ref?: string;
  name?: RecipientName;
}

export interface RecipientName {
  first_name: string;
  last_name: string;
}

export interface Message {
  text?: string;
  attachment?: Attachment;
  quick_replies?: QuickReply;
  metadata?: string;
}

export interface QuickReply {
  content_type: QuickReplyContentType;
  title?: string;
  payload?: string | number;
  image_url?: string;
}

export type QuickReplyContentType =
  | "text"
  | "location"
  | "user_phone_number"
  | "user_email";
