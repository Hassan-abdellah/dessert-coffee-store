export type prodcutImageType = {
  thumbnail: string;
  mobile: string;
  tablet: string;
  desktop: string;
};

export type productType = {
  image: prodcutImageType;
  name: string;
  category: string;
  price: number;
};
