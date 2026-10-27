import type { Metadata } from "next";
import { ViewTransition } from "react";
import { PageTransition } from "@/components/shared/page-transition";

export const metadata: Metadata = {
  title: "CV",
  description: "CV for Hao Yang. The page is waiting for the real text.",
};

export default function CvPage() {
  return (
    <PageTransition>
      <main className="cv-page">
        <ViewTransition name="person-name" share="text-morph" default="none">
          <h1 className="person-name">Hao Yang</h1>
        </ViewTransition>
        <p className="cv-empty">
          This page is the CV. It is empty until the real text is written here.
        </p>
      </main>
    </PageTransition>
  );
}
