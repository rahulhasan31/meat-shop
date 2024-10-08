import type { Metadata } from "next";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Providers } from "./providers";
import NavbarPage from "../components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { ProvidersAntdRegistry } from "./AntdRegistry";
import StoreProvider from "./StoreProvider";
import { AuthProvider } from "@/authService/authContext";
import { loadStripe } from "@stripe/stripe-js";
import StripeElement from "./StipeElement";
export const metadata: Metadata = {
  title: "Meat Shop",
  description: "Meat Shop best Shop beef shop",
};
const stripePromise = loadStripe(
  "pk_test_51M6YTaIOaRhLiCR9IUacPMWr7kIOpNT2oEv4gm3lLOoRyLZ0sQplaW3fiYroKVA63hTjrAq5homSPjhn01lr0z36007McI12l5"
);
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StripeElement>
          <AuthProvider>
            <StoreProvider>
              <ProvidersAntdRegistry>
                <Providers>
                  <NavbarPage></NavbarPage>
                  {children}
                  <SpeedInsights />
                  <Footer />
                </Providers>
              </ProvidersAntdRegistry>
            </StoreProvider>
          </AuthProvider>
        </StripeElement>
      </body>
    </html>
  );
}
