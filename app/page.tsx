import { Metadata } from "next"

export const metadata: Metadata = {
  openGraph: {
    title: "En Su Palabra - Wiswords",
    description: "Cancionero digital en vivo",
    url: "https://esp.wiswords.com",
    siteName: "Wiswords - ESP",
    images: [
      {
        url: "https://wiswords.com/og.jpg",
        width: 1280,
        height: 720,
      },
      {
        url: "https://wiswords.com/og-alt.jpg",
        width: 1280,
        height: 720,
        alt: "En Su Palabra - Wiswords",
      },
    ],
    locale: "es_BO",
    type: "website",
  },
}

import HomeView from "@modules/Home/HomeView"

export default function Page() {
  return <HomeView />
}
