import { Inter, Lusitana } from 'next/font/google';

// Cria estilo e classe de fonte passando
// preferencias e pode ser usado por todo o codigo
export const inter = Inter({ subsets: ['latin'] });

export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});
