"use client"

import AnimacaoBasica from "@/components/Animacao";
import AnimacaoButton from "@/components/AnimacaoButton";
import AnimacaoItem from "@/components/AnimacaoItem";
import AnimacaoScroll from "@/components/AnimacaoScroll";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="bg-blue-500 p-4 md:bg-green-500 lg:bg-red-500">
        Background muda de cor consoante ao tamanho do ecran
      </div>

      <div className="flex justify-between items-center h-16 bg-gray-800 text-white p-4">
        <span>Esquerda</span>
        <span>Centro</span>
        <span>Direita</span>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-blue-300 p-4">
          <div className="grid grid-template-columns-[500px_1fr] bg-blue-700">
            <div>1</div>
            <div>2</div>
          </div>
        </div>
        <div className="bg-blue-400 p-4">2</div>
        <div className="bg-blue-500 p-4">3</div>

      </div>

      <div className="flex flex-col gap-4 p-4 ">
        <div className="bg-red-500 p-4 w-full">Coluna 1</div>
        <div className="bg-green-500 p-4 w-full">Coluna 2</div>
        <div className="bg-blue-500 p-4 w-full">Coluna 3</div>
      </div>

      <div className="flex flex-col justify-center items-center gap-8">
        <AnimacaoBasica />
        <AnimacaoButton />
        <AnimacaoScroll />
        <AnimacaoItem />
      </div>
      

    </div>
  );
}
