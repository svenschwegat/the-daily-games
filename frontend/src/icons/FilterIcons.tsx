import type { FilterIconProps, SvgIconProps } from '../types/IconTypes';

export const FilterIcon = ({ type, width = 50, height = 50, color = "#ffffff" }: FilterIconProps): React.ReactNode => {
    // https://www.svgrepo.com/collection/dazzle-line-icons/
    switch(type){
        case 'answer_types':
            return icon_answer_types({ width, height, color });
        case 'categories':
            return icon_categories({ width, height, color });
        case 'languages':
            return icon_languages({ width, height, color });
        case 'publishers':
            return icon_publishers({ width, height, color });
        case 'quiz_styles':
            return icon_quiz_styles({ width, height, color });
        default:
            throw new Error(`Unknown filter type: ${type}`);
    }
}

const icon_answer_types = ({ width = 50, height = 50, color = "#ffffff" }: SvgIconProps): React.ReactNode => {
    return (
        <svg width={`${width}px`} height={`${height}px`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.01 20H12M12 14L12.01 4" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    );
};

const icon_categories = ({ width = 50, height = 50, color = "#ffffff" }: SvgIconProps): React.ReactNode => {
    return (
        <svg width={`${width}px`} height={`${height}px`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 6.00008V4.2844C16 3.51587 16 3.13161 15.8387 2.88321C15.6976 2.66587 15.4776 2.5118 15.2252 2.45345C14.9366 2.38677 14.5755 2.51809 13.8532 2.78073L6.57982 5.4256C6.01064 5.63257 5.72605 5.73606 5.51615 5.91845C5.33073 6.07956 5.18772 6.28374 5.09968 6.51304C5 6.77264 5 7.07546 5 7.6811V12.0001M9 17.0001H15M9 13.5001H15M9 10.0001H15M8.2 21.0001H15.8C16.9201 21.0001 17.4802 21.0001 17.908 20.7821C18.2843 20.5903 18.5903 20.2844 18.782 19.9081C19 19.4802 19 18.9202 19 17.8001V9.20008C19 8.07997 19 7.51992 18.782 7.0921C18.5903 6.71577 18.2843 6.40981 17.908 6.21807C17.4802 6.00008 16.9201 6.00008 15.8 6.00008H8.2C7.0799 6.00008 6.51984 6.00008 6.09202 6.21807C5.71569 6.40981 5.40973 6.71577 5.21799 7.0921C5 7.51992 5 8.07997 5 9.20008V17.8001C5 18.9202 5 19.4802 5.21799 19.9081C5.40973 20.2844 5.71569 20.5903 6.09202 20.7821C6.51984 21.0001 7.07989 21.0001 8.2 21.0001Z" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    );
}

const icon_languages = ({ width = 50, height = 50, color = "#ffffff" }: SvgIconProps): React.ReactNode => {
    return (
        <svg width={`${width}px`} height={`${height}px`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 15H19M14 15H19M17 13.5V15M4.85714 8H9.14286M4 11L5.53848 5.61531C5.97492 4.08777 6.19315 3.324 6.53044 3.13222C6.82159 2.96667 7.17841 2.96667 7.46956 3.13222C7.80685 3.324 8.02508 4.08777 8.46152 5.61531L10 11M14 20.9776C16.8033 20.725 19 18.369 19 15.5V15M20 20.9776C18.0763 20.8043 16.4382 19.6404 15.5996 18M14 7C14.9319 7 15.3978 7 15.7654 7.15225C16.2554 7.35523 16.6448 7.74458 16.8478 8.23464C17 8.60218 17 9.06812 17 10M7 15C7 15.9319 7 16.3978 7.15224 16.7654C7.35523 17.2554 7.74458 17.6448 8.23463 17.8478C8.60218 18 9.06812 18 10 18" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    );
}

const icon_publishers = ({ width = 50, height = 50, color = "#ffffff" }: SvgIconProps): React.ReactNode => {
    return (
        <svg width={`${width}px`} height={`${height}px`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.5 21H4C4 17.134 7.13401 14 11 14C11.1681 14 11.3348 14.0059 11.5 14.0176M15 7C15 9.20914 13.2091 11 11 11C8.79086 11 7 9.20914 7 7C7 4.79086 8.79086 3 11 3C13.2091 3 15 4.79086 15 7ZM12.5898 21L14.6148 20.595C14.7914 20.5597 14.8797 20.542 14.962 20.5097C15.0351 20.4811 15.1045 20.4439 15.1689 20.399C15.2414 20.3484 15.3051 20.2848 15.4324 20.1574L19.5898 16C20.1421 15.4477 20.1421 14.5523 19.5898 14C19.0376 13.4477 18.1421 13.4477 17.5898 14L13.4324 18.1574C13.3051 18.2848 13.2414 18.3484 13.1908 18.421C13.1459 18.4853 13.1088 18.5548 13.0801 18.6279C13.0478 18.7102 13.0302 18.7985 12.9948 18.975L12.5898 21Z" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    );
}

const icon_quiz_styles = ({ width = 50, height = 50, color = "#ffffff" }: SvgIconProps): React.ReactNode => {
    return (
        <svg width={`${width}px`} height={`${height}px`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 19H12.01M8.21704 7.69689C8.75753 6.12753 10.2471 5 12 5C14.2091 5 16 6.79086 16 9C16 10.6565 14.9931 12.0778 13.558 12.6852C12.8172 12.9988 12.4468 13.1556 12.3172 13.2767C12.1629 13.4209 12.1336 13.4651 12.061 13.6634C12 13.8299 12 14.0866 12 14.6L12 16" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    );
}