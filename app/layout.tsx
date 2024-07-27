import '@/app/ui/global.css';
import { inter } from './ui/fonts';
// cria importacao de tailwind css para o layout do app

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
