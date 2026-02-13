NoteHub (Next.js)

Застосунок перенесено зі SPA на багатосторінкову структуру Next.js App Router з маршрутизацією:

/ — головна сторінка з описом застосунку.

/notes — сторінка зі списком нотаток: відображення всіх нотаток, пошук за ключовим словом, створення нової нотатки.

/notes/[id] — сторінка деталей нотатки (динамічний маршрут), показ повної інформації за id.

Спільний Layout

Усі сторінки мають спільні компоненти:

Header з навігацією (Home / Notes) через next/link

Footer з контактною інформацією розробника

Дані та API

API-логіку перенесено в lib/api.ts (із попереднього noteService.ts)

додано fetchNoteById для отримання деталей нотатки

використовується env-змінна NEXT_PUBLIC_NOTEHUB_TOKEN (process.env.NEXT_PUBLIC_NOTEHUB_TOKEN)

типи винесені в types/note.ts

TanStack Query + SSR

Сторінки /notes та /notes/[id] реалізовані як SSR-компоненти з prefetch даних через TanStack Query і гідратацією кешу.
Клієнтська логіка винесена в:

app/notes/Notes.client.tsx

app/notes/NoteDetails.client.tsx (отримання id через useParams())

Глобально підключено QueryClientProvider через TanStackProvider у app/layout.tsx.

Loading / Error

глобальний loading.tsx: Loading, please wait...

error.tsx для /notes: Could not fetch the list of notes. {error.message}

error.tsx для /notes/[id]: Could not fetch note details. {error.message}
