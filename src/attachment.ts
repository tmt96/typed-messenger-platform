/**
 * @module typed-messenger-platform
 */

import { Template as TemplatePayload } from "./template";

export type Attachment =
  | ImageAttachment
  | VideoAttachment
  | AudioAttachment
  | FileAttachment
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

export interface TemplateAttachment {
  type: "template";
  payload: TemplatePayload;
}

export interface MultimediaPayload {
  url?: string;
  is_reusable?: boolean;
}
