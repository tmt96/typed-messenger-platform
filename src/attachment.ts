/**
 * @module typed-messenger-platform
 */

import { Template as TemplatePayload } from "./template";

export type Attachment =
  | ImageAttachment
  | VideoAttachment
  | AudioAttachment
  | FileAttachment
  | LocationAttachment
  | FallbackAttachment
  | TemplateAttachment;

export interface ImageAttachment {
  type: "image";
  payload: MultimediaPayload;
}

export interface VideoAttachment {
  type: "video";
  payload: MultimediaPayload;
}

export interface AudioAttachment {
  type: "audio";
  payload: MultimediaPayload;
}

export interface FileAttachment {
  type: "file";
  payload: MultimediaPayload;
}

export interface LocationAttachment {
  type: "location";
  payload: LocationPayload;
}

export interface FallbackAttachment {
  type: "fallback";
  payload: null;
  title: string;
  URL: string;
}

export interface TemplateAttachment {
  type: "template";
  payload: TemplatePayload;
}

export interface MultimediaPayload {
  url?: string;
  is_reusable?: boolean;
  attachment_id?: number;
}

export interface LocationPayload {
  coordinates: {
    lat: number;
    long: number;
  };
}
