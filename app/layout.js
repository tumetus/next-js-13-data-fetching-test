export default function RootLayout({ children }) {
  return (
    <html>
      <head></head>

      <body>
        <h1>Dashboard</h1>

        <div>{children}</div>
      </body>
    </html>
  );
}
