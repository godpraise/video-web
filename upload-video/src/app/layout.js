import './globals.css'; // 글로벌 스타일을 여기에 import

export const metadata = {
  title: 'Wetube',
  description: 'Upload and watch videos easily!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}