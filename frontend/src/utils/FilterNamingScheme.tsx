import type { FilterNamingSchemeKeys } from '../types/FilterTypes';

export const filterNamingScheme: FilterNamingSchemeKeys = {
    'categories': {
        'key': 'categories',
        'label': 'Categories',
        'id_column': 'category_id'
    },
    'quiz_styles': {
        'key': 'quiz_styles',
        'label': 'Quiz Styles',
        'id_column': 'quiz_style_id'
    },
    'answer_types': {
        'key': 'answer_types',
        'label': 'Answer Types',
        'id_column': 'answer_type_id'
    },
    'languages': {
        'key': 'languages',
        'label': 'Languages',
        'id_column': 'language_id'
    },
    'publishers': {
        'key': 'publishers',
        'label': 'Publishers',
        'id_column': 'publisher_id'
    }
}