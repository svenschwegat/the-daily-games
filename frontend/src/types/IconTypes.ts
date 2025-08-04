import { FilterKey } from "./FilterTypes";

export type SvgIconProps = {
    width?: number;
    height?: number;
    color?: string;
};

export interface FilterIconProps extends SvgIconProps {
    type: FilterKey;
}