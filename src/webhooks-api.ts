import { Attachment } from "./attachment";
import { Address } from "./template";

/**
 * @module typed-messenger-platform
 */

export interface WebhookEvent {
  object: "page";
  entry: WebhookMessagingEntry[];
}

export interface WebhookEntry {
  id: string;
  time: number;
}

export interface WebhookMessagingEntry extends WebhookEntry {
  messaging: WebhookMessagingEvent[];
}

export interface WebhookStandbyEntry extends WebhookEntry {
  messaging: WebhookStandbyEvent[];
}

export interface WebhookMessagingEvent {
  sender?: ConversationParticipant;
  receiver: ConversationParticipant;
  timestamp: number;
}

export interface WebhookStandbyEvent extends WebhookMessagingEvent {}

export interface MessageReceivedEvent extends WebhookStandbyEvent {
  message: {
    mid: string;
    text?: string;
    attachments?: Attachment[];
    quick_reply?: QuickReply;
  };
}

export interface AccountLinkingEvent extends WebhookMessagingEvent {
  account_linking: {
    status: "linked" | "unlinked";
    authorization_code?: string;
  };
}

export interface DeliveryEvent extends WebhookStandbyEvent {
  delivery: {
    mids: string[];
    watermark: number;
    seq: number;
  };
}

export interface MessageEchoEvent extends WebhookMessagingEvent {
  message: {
    is_echo: boolean;
    app_id: string;
    metadata: string;
    mid: string;
    text?: string;
    attachments?: Attachment[];
  };
}

export interface MessageReadEvent extends WebhookStandbyEvent {
  read: {
    watermark: number;
    seq: number;
  };
}

export interface CheckoutUpdateEvent extends WebhookMessagingEvent {
  checkout_update: {
    payload: string;
    shipping_address: Address;
  };
}

export interface GamePlayEvent extends WebhookMessagingEvent {
  game_play: {
    game_id: string;
    player_id: string;
    context_type: "SOLO" | "THREAD" | "GROUP";
    context_id: string;
    score: number;
    payload: string;
  };
}

export interface PassThreadControlEvent extends WebhookMessagingEvent {
  pass_thread_control: {
    new_owner_app_id: string;
    metadata: string;
  };
}

export interface TakeThreadControlEvent extends WebhookMessagingEvent {
  take_thread_control: {
    previous_owner_app_id: string;
    metadata: string;
  };
}

export interface RequestThreadControlEvent extends WebhookMessagingEvent {
  request_thread_control: {
    requested_owner_app_id: string;
    metadata: string;
  };
}

export interface AppRolesEvent extends WebhookMessagingEvent {
  app_roles: {};
}

export interface OptInEvent extends WebhookMessagingEvent {
  optin: {
    ref: string;
    user_ref?: string;
  };
}

export interface PaymentEvent extends WebhookMessagingEvent {
  payload: string;
  requested_user_info: UserInfo;
  payment_credential: PaymentCredential;
  transaction_amount: TransactionAmount;
}

export interface PolicyEnforcementEvent extends WebhookMessagingEvent {
  policy_enforcement: {
    action: "warning" | "block" | "unblock";
    reason?: string;
  };
}

export interface PostbackEvent extends WebhookStandbyEvent {
  title: string;
  payload: string;
  referral?: Referral;
}

export interface ReferralEvent extends WebhookMessagingEvent {
  referral: Referral;
}

export interface Referral {
  source:
    | "MESSENGER_CODE"
    | "DISCOVER_TAB"
    | "ADS"
    | "SHORTLINK"
    | "CUSTOMER_CHAT_PLUGIN";
  type: "OPEN_THREAD";
  ref?: string;
  referrer_uri?: string;
  ad_id?: string;
}

export interface ConversationParticipant {
  id: string;
}

export interface QuickReply {
  payload: string;
}

export interface UserInfo {
  shipping_address: Address;
  contact_name: string;
  contact_email: string;
  contact_phone: string;
}

export interface PaymentCredential {
  provider_type: string;
  charge_id: string;
  tokenized_card: string;
  tokenized_cvv: string;
  token_expiry_month: string;
  token_expiry_year: string;
  fb_payment_id: string;
}

export interface TransactionAmount {
  currency: string;
  amount: string;
}
