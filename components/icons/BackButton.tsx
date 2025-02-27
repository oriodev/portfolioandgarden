"use client"

import { useRouter } from "next/navigation";
import { ChevronsLeft } from '@/components/icons/ChevronsLeft';

export default function BackButton () {
  const router = useRouter();

  return (
    <ChevronsLeft
      onClick={() => router.push('/digital-garden')}
    />

  )
}