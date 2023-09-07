import { ThemeProvider } from "@/theme/src/provider";

export const metadata = {
  title: "~/gabby",
  description: "gabby's homepage on the world wide web",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
