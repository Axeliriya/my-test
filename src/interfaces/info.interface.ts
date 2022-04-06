export interface InfoProduct {
  product: Product;
  owners?: OwnersEntity[] | null;
  button_type: string;
  is_current_user_owner: boolean;
}
export interface Product {
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
  token_id: number;
  rarible_link: string;
  opensea_link: string;
  etherscan_link: string;
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
  public_address: string;
  account_type: string;
  nonce: string;
  display_name: string;
  custom_url: string;
  email: string;
  bio: string;
  twitter: string;
  instagram: string;
  telegram: string;
  image: AdditionalPhotosEntityOrImageOrAvatar;
  signature: string;
  created_at: string;
  updated_at: string;
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
export interface OwnersEntity {
  user_id: number;
  public_address: string;
  display_name: string;
  custom_url: string;
  image: AdditionalPhotosEntityOrImageOrAvatar;
  editions: number;
  on_sale: boolean;
  price: string;
  last_update: string;
}
