import type { Metadata } from "next";
import { ViewTransition } from "react";
import { CvDocument } from "@/components/cv/cv-document";
import { PageTransition } from "@/components/shared/page-transition";

export const metadata: Metadata = {
  title: "CV",
  description:
    "CV of Hao Yang, full-stack web developer. Laravel, Filament, WordPress, and a RAG study assistant.",
};

export default function CvPage() {
  return (
    <PageTransition>
      <main className="cv-page">
        <ViewTransition name="person-name" share="text-morph" default="none">
          <h1 className="person-name">Hao Yang</h1>
        </ViewTransition>
        <CvDocument />
      </main>
    </PageTransition>
  );
}
