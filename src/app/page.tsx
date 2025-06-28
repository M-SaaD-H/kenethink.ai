import Chat from "@/components/Chat";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="max-w-4xl w-full mx-auto h-screen">
      <Navbar />
      <Chat />
    </div>
  )
}
