import { Cormorant_Garamond } from "next/font/google";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: "400",
});

export const fonts = {
  title: cormorantGaramond,
};
