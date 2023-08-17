import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Sidebar from "~/component/Sidebar";
import {NextUIProvider} from "@nextui-org/react";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <ClerkProvider>
    <NextUIProvider>
      <Component {...pageProps} />
      </NextUIProvider>
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
