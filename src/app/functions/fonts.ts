import { Spectral } from "next/font/google";

export const type_second = Spectral({
  weight: ['700'], // Corrigido colchete extra na string
  subsets: ['latin'], // Corrigida a palavra "subserts" para "subsets"
  variable: '--type-second-spectral',
  display: 'swap',
});