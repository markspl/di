import type { Asset, Entry, EntryFields } from "contentful";

export interface TypeCardFields {
    title: EntryFields.Symbol;
    image?: Asset;
    description?: EntryFields.Text;
    width?: EntryFields.Integer;
    showTitle: EntryFields.Boolean;
}

export type TypeCard = Entry<TypeCardFields>;
