"use client";

import { Suspense } from "react";
import AllProjects from "./AllProjects";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AllProjects />
    </Suspense>
  );
}
