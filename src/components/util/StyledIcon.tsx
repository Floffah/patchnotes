import Icon from "@mdi/react";
import styled, { ThemeProps } from "styled-components";
import { Theme } from "../../lib/theme/theme";

export const StyledIcon = styled(Icon)<ThemeProps<Theme>>`
    width: 20px;
    height: 20px;
    color: ${(props) => props.theme.front};
`;
