import styled, { ThemeProps } from "styled-components";
import { shift } from "../../lib/theme/resolve";
import { Theme } from "../../lib/theme/theme";

export const EmbedContainer = styled.div<ThemeProps<Theme>>`
    padding: 10px;
    border: 1px solid
        ${(props) => shift(props.theme.shiftback, 0.1, props.theme.back)};
    background-color: ${(props) =>
        shift(props.theme.shiftfront, 0.05, props.theme.back)};
    position: relative;
    display: block;
    border-radius: 5px;
    margin: 10px 0 10px 0;
`;
