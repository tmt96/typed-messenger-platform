import { Button, UrlButton } from "./button";

/**
 * @module typed-messenger-platform
 */

export type Template =
  | ButtonTemplate
  | GenericTemplate
  | ListTemplate
  | MediaTemplate
  | OpenGraphTemplate
  | ReceiptTemplate
  | AirlineBoardingPassTemplate
  | AirlineCheckinTemplate
  | AirlineItineraryTemplate
  | AirlineFlightUpdateTemplate;

export interface ButtonTemplate {
  template_type: "payload";
  text: string;
  buttons: Button[];
  sharable?: boolean;
}

export interface GenericTemplate {
  template_type: "generic";
  sharable?: boolean;
  image_aspect_ratio?: string;
  elements: PayloadElement[];
}

export interface ListTemplate {
  template_type: "list";
  top_element_style?: "compact" | "large";
  buttons?: Button[];
  elements: PayloadElement[];
  shareable?: boolean;
}

export interface MediaTemplate {
  template_type: "media";
  elements: MediaElement[];
  sharable?: boolean;
}

export interface OpenGraphTemplate {
  template_type: "open_graph";
  elements: OpenGraphElement[];
}

export interface ReceiptTemplate {
  template_type: "receipt";
  sharable?: boolean;
  recipient_name: string;
  merchant_name?: string;
  order_number: string;
  currency: string;
  payment_method: string;
  timestamp?: string;
  elements: ReceiptElement[];
  address?: Address;
  summary: ReceiptSummary;
  adjustments: ReceiptAdjustment[];
}

export interface AirlineBoardingPassTemplate {
  template_type: "airline_boarding_pass";
  intro_message: string;
  locale: string;
  theme_color?: string;
  boarding_pass: BoardingPass[];
}

export interface AirlineCheckinTemplate {
  template_time: "airline_checkin";
  intro_message: string;
  locale: string;
  pnr_number?: string;
  checkin_url: string;
  flight_info: FlightInfo[];
}

export interface AirlineItineraryTemplate {
  template_time: "airline_itinerary";
  intro_message: string;
  locale: string;
  theme_color?: string;
  pnr_number: string;
  passenger_info: PassengerInfo[];
  flight_info: ItineraryFlightInfo[];
  passenger_segment_info: PassengerSegmentInfo[];
  price_info?: PriceInfo[];
  base_price?: number;
  tax?: number;
  total_price?: number;
  currency: string;
}

export interface AirlineFlightUpdateTemplate {
  template_type: "airline_update";
  intro_message: string;
  theme_color?: string;
  update_type: "delay" | "gate_change" | "cancellation";
  locale: string;
  pnr_number?: string;
  update_flight_info: FlightInfo;
}

export interface PayloadElement {
  title: string;
  subtitle?: string;
  image_url?: string;
  default_action?: Omit<UrlButton, "title">;
  buttons: Button[];
}

export interface MediaElement {
  media_type: "image" | "video";
  buttons: Button[];
}

export interface MediaElementWithId extends MediaElement {
  attachment_id: string;
}

export interface MediaElementWithUrl extends MediaElement {
  url: string;
}

export interface OpenGraphElement {
  url: string;
  buttons: Button[];
}

export interface Address {
  id?: string;
  street_1: string;
  street_2?: string;
  city: string;
  postal_code: string;
  state: string;
  country: string;
}

export interface ReceiptSummary {
  subtotal?: number;
  shipping_cost?: number;
  total_tax?: number;
  total_cost: number;
}

export interface ReceiptAdjustment {
  name: string;
  amount: string;
}

export interface ReceiptElement {
  title: string;
  subtitle?: string;
  quatity?: number;
  price: number;
  currency?: string;
  image_url?: string;
}

export interface BoardingPass {
  passenger_name: string;
  pnr_number: string;
  travel_class?: string;
  auxiliary_fields: BoardingPassField[];
  secondary_fields: BoardingPassField[];
  logo_iage_url: string;
  header_image_url?: string;
  header_text_field?: BoardingPassField;
  qr_code?: string;
  barcode_image_url?: string;
  above_bar_code_image_url: string;
  flight_info: FlightInfo;
}

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export interface BoardingPassField {
  label: string;
  value: string;
}

export interface FlightInfo {
  flight_number: string;
  departure_airport: Airport;
  arrival_airport: Airport;
  flight_schedule: FlightSchedule;
}

export interface Airport {
  airport_code: string;
  city: string;
  terminal?: string;
  gate?: string;
}

export interface DepartureAirport extends Airport {
  terminal: string;
  gate: string;
}

export interface FlightSchedule {
  boarding_time: string;
  departure_time: string;
  arrival_time: string;
}

export interface PassengerInfo {
  passenger_id: string;
  ticket_number?: string;
  name: string;
}

export interface ItineraryFlightInfo extends FlightInfo {
  connection_id: string;
  segment_id: string;
  aircraft_type?: string;
  travel_class: "economy" | "business" | "first_class";
}

export interface PassengerSegmentInfo {
  segment_id: string;
  passenger_id: string;
  seat: string;
  seat_type: string;
  product_info?: string;
}

export interface PriceInfo {
  title: string;
  amount: number;
  currency?: string;
}
