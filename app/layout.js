import "./globals.css";

export const metadata = {
  title: "Sustainable Mind - Student Life Skills Curriculum",
  description:
    "Helping students aged 7 to 15 understand their mind, manage emotions, and build resilience. Rooted in timeless wisdom, taught through stories.",
  keywords: ["life skills", "student curriculum", "emotional intelligence", "school program"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght,SOFT@0,9..144,400..700,30..100;1,9..144,400..700,30..100&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
