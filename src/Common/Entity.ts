export type Name =
  | { readonly name: string }
  | {
      readonly originalName: string
      readonly remasteredName: string
    }

export type ID = Name & {
  readonly id: string
}

export type Entity = ID
