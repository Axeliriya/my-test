export interface ProductModel {
  product_id: number;
  name: string;
  description: string;
  quantity: number;
  initial_price: number;
  type: string;
  avatar: AdditionalPhotosEntityOrImageOrAvatar;
  other_file: OtherFile;
  additional_photos?: AdditionalPhotosEntityOrImageOrAvatar[] | null;
  created_by: CreatedBy;
  json_nft_data: JsonNftData;
  json_nft_link: string;
  tx_status: string;
  created_at: string;
  updated_at: string;
  quantity_nfts_created: number;
  on_main_page: boolean;
  is_wearable: boolean;
  latest_price: string;
  quantity_available: number;
}
export interface AdditionalPhotosEntityOrImageOrAvatar {
  original: string;
  compressed: string;
}
export interface OtherFile {
  original: string;
}
export interface CreatedBy {
  user_id: number;
  display_name: string;
  public_address: string;
  custom_url: string;
  image: AdditionalPhotosEntityOrImageOrAvatar;
}
export interface JsonNftData {
  name: string;
  image: string;
  attributes?: AttributesEntity[] | null;
  description: string;
  external_url: string;
}
export interface AttributesEntity {
  value: string;
  trait_type: string;
}
