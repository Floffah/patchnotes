import styled from "styled-components";
import { shift } from "../../lib/theme/resolve";

export const NoteListContainer = styled.div`
    padding: 5px 10px;
    width: 600px;
    margin: auto;
    box-sizing: content-box;

    @media screen and (max-width: 600px) {
        width: 100%;
        margin: 0;
    }
`;

export const NotesListInnerScroll = styled.div`
    overflow-y: auto;

    ::-webkit-scrollbar {
        width: 5px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: ${(props) =>
            shift(props.theme.shiftfront, 0.1, props.theme.back)};
        border-radius: 5px;
    }
`;
