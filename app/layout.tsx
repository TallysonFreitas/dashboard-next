import '@/app/ui/global.css';
// cria importacao de tailwind css para o layout do app

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
