import type { Asset, Entry, EntryFields } from "contentful";

export interface TypeHeaderFields {
    title: EntryFields.Symbol;
    description?: EntryFields.Text;
    image: Asset;
}

export type TypeHeader = Entry<TypeHeaderFields>;
