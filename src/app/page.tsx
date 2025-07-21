import { Suspense } from "react";

import HomePage from "@/components/HomePage";

export default function Home() {
  return (
    <main>
      <Suspense fallback={<div className="text-center py-10">Loading feed...</div>}>
        <HomePage />
      </Suspense>
    </main>
  );
}
