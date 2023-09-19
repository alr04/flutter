import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";

import Layout from "@/Components/Layout";
import LoginModal from "@/Components/modals/LoginModal";
import RegisterModal from "@/Components/modals/RegisterModal";
import "@/styles/globals.css";
import EditModal from "@/Components/modals/EditModal";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Toaster />
      <RegisterModal />
      <LoginModal />
      <EditModal />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}
