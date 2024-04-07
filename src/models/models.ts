//Jacky

export interface ProductInfo {
  productId: string;
  description: string;
  price: number;
  review: string[];
  average_review_rate: number;
  image_link: string;
}

//Ming

export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  message: "success" | "fail";
  token: string | null;
}

export interface SignUpRequest {
  username: string;
  password: string;
  address: string;
  account_type: "admin" | "normal";
  profile_image_link: string;
}

export interface SignUpResponse {
  message: "success" | "fail";
  token: string | null;
}

export interface AnalyticsCategory {
  "01/01/2024": number;
  "01/02/2024": number;

  "01/03/2024": number;

  "01/04/2024": number;

  "01/05/2024": number;

  "01/06/2024": number;

  "01/07/2024": number;

  "01/08/2024": number;

  "01/09/2024": number;

  "01/10/2024": number;
  "01/11/2024": number;
  "01/12/2024": number;
}

export interface Analytics {
  tshirts: AnalyticsCategory;
  bracelets: AnalyticsCategory;

  gadgets: AnalyticsCategory;
}

//Brune

export interface PostAProduct {
  description: string;
  price: number;
  image_link: string;
  category: string;
}

export interface User {
  username: string;
  email: string;
  password: string;
  address: string;
  account_type: "admin" | "normal";
  profile_image_link: string;
  products: ProductInfo[];
}