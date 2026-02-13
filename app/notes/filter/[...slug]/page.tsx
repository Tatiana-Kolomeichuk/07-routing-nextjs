import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

import css from "./page.module.css";
import { fetchNotes } from "@/lib/api";
import NotesClient from "./Notes.client";
import { FetchTagNote } from "@/types/note";

interface NotesPageProps {
  params: Promise<{ slug: string[] }>;
}
export default async function NotesPage({ params }: NotesPageProps) {
  const { slug } = await params;
  const tag = (slug?.[0] ?? "all") as FetchTagNote;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["notes", 1, tag],
    queryFn: async () => {
      return fetchNotes({ page: 1, search: tag });
    },
  });
  return (
    <main className={css.main}>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <NotesClient  tag={tag}/>
      </HydrationBoundary>
    </main>
  );
}
