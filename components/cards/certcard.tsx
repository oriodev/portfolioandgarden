import Image from "next/image";

import { Certificate } from "@/types/types";

interface Props {
  cert: Certificate
}

export default function CertCard({ cert }: Props) {
  return (
    <div  className="bg-white rounded-lg p-5 flex flex-col gap-2 justify-between">
    <div>
      <Image
        src={cert.image}
        alt={cert.title}
        height={700}
        width={700}
        className="rounded-lg"
      />
    </div>

    <div className="flex flex-col gap-2">
      <h3 className="text-2xl font-bold text-cyan-700">{cert.title}</h3>
      <p className="text-lg">{cert.description}</p>
    </div>
  </div>
  )
}