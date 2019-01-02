import { Message } from "./send-api";

/**
 * @module typed-messenger-platform
 */

export type Button =
  | BuyButton
  | CallButton
  | GameplayButton
  | LoginButton
  | LogoutButton
  | PostbackButton
  | ShareButton
  | UrlButton;

export interface BuyButton {
  type: "payment";
  title: "buy";
  payload: string;
  payment_summary: PaymentSummary;
}

export interface CallButton {
  type: "phone_number";
  title: string;
  payload: string;
}

export interface GameplayButton {
  type: "game_play";
  title: string;
  payload?: string;
  game_metadat?: GameMetadata;
}

export interface LoginButton {
  type: "account_link";
  url: string;
}

export interface LogoutButton {
  type: "account_unlink";
}

export interface PostbackButton {
  type: "postback";
  title: string;
  payload: string;
}

export interface ShareButton {
  type: "element_share";
  share_contents: {
    attachments: {
      type: "template";
      payload: Message;
    };
  };
}

export interface UrlButton {
  type: "web_url";
  title: string;
  url: string;
  webview_height_ratio?: string;
  messenger_extensions?: boolean;
  fallback_url?: string;
  webview_share_button?: string;
}

export interface PaymentSummary {
  currency: string;
  is_test_payment?: boolean;
  payment_type: "FIXED_AMOUNT" | "FLEXIBLE_AMOUNT";
  merchant_type: string;
  requested_user_info: RequestedUserInfo[];
  price_list: PriceList[];
}

export type RequestedUserInfo =
  | "shipping_address"
  | "contact_name"
  | "contact_phone"
  | "contact_email";

export interface PriceList {
  label: string;
  amount: string;
}

export interface GameMetadata {
  player_id?: string;
  context_id?: string;
}
