import { FetchTagNote } from '@/types/note';
import css from './default.module.css';
import Link from 'next/link';


export default function Sidebar() {
  const tags: FetchTagNote[] = [
    'all',
    'Todo',
    'Work',
    'Personal',
    'Meeting',
    'Shopping',
  ];

  return (
    <ul className={css.menuList}>
      {tags.map((note, index) => (
        <li key={index} className={css.menuItem}>
          <Link href={`/notes/filter/${note}`} className={css.menuLink}>
            {`${note === 'all' ? 'All notes' : note}`}
          </Link>
        </li>
      ))}
    </ul>
  );
}