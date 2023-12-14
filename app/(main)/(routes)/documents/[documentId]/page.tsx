"use client";

import Cover from "@/components/Cover";
import Toolbar from "@/components/Toolbar";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useQuery } from "convex/react";

interface DocumentIdPageProps {
  params: {
    documentId: Id<"documents">;
  };
}

function DocumentPage({ params: { documentId } }: DocumentIdPageProps) {
  const document = useQuery(api.documents.getById, {
    documentId,
  });

  if (document === undefined) {
    return <p>Loading...</p>;
  }

  if (document === null) {
    return <div>Page not found</div>;
  }

  return (
    <div className="pb-40">
      <Cover url={document.coverImage} />
      <div className="md:max-w-3xl lg:max-w-4xl mx-auto">
        <Toolbar initialData={document} />
      </div>
    </div>
  );
}

export default DocumentPage;
