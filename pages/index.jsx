import Image from "next/image";
import { Inter } from "next/font/google";
import { Sidebar } from "@/src/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex gap-4">
      <Sidebar />
      <h1 className="col-span-6 pl-64">Aqui é a home</h1>
    </div>
  );
}
