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

export interface BuyButton {}

export interface CallButton {}

export interface GameplayButton {}

export interface LoginButton {}

export interface LogoutButton {}

export interface PostbackButton {}

export interface ShareButton {}

export interface UrlButton {
  type: "web_url";
  title: string;
  url: string;
  webview_height_ratio?: string;
  messenger_extensions?: boolean;
  fallback_url?: string;
  webview_share_button?: string;
}
