import Icon from "@mdi/react";
import styled, { ThemeProps } from "styled-components";
import { Theme } from "../../lib/theme/theme";
import { IconProps } from "@mdi/react/dist/IconProps";
import { HTMLProps } from "react";

export const StyledIcon = styled(Icon)<
    ThemeProps<Theme> & IconProps & HTMLProps<any>
>`
    width: 20px;
    height: 20px;
    color: ${(props) => props.theme.front};
`;
