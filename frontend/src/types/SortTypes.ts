export type SortKey = 'recommended' | 'alphabet-a-z' | 'alphabet-z-a';

export type SortNamingScheme = {
    key: SortKey;
    label: string;
    short_label: string;
}

export type SortNamingSchemeKeys = {
    [key in SortKey]: SortNamingScheme;
}

export type SortDropdownProps = {
    sortOrder: Set<SortKey>;
    setSortOrder: (key: Set<SortKey>) => void;
}