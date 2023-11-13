import type { Entry } from "contentful";
import type { TypeCardFields } from "./TypeCard";

export interface TypeCardsFields {
    cards?: Entry<TypeCardFields>[];
}

export type TypeCards = Entry<TypeCardsFields>;
