import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Chat',
}

export default function Home() {
    return (
      <main className="bg-blue-500 p-10">
        <h1>Chat</h1>
      </main>
    )
  }
