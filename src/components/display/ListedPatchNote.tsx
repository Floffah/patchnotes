import React, { FC } from "react";
import Embed from "./Embed";
import { LPNIcons, LPNTitle, LPNVersion } from "./ListedPatchNote.styles";
import { StyledIcon } from "../util/StyledIcon";
import { mdiArrowDown, mdiArrowRight, mdiChevronDown } from "@mdi/js";

export interface ListedPatchNoteProps {
    title: string;
    version: string;
}

const ListedPatchNote: FC<ListedPatchNoteProps> = (p) => {
    return (
        <Embed>
            <LPNVersion>{p.version}</LPNVersion>
            <LPNTitle>{p.title}</LPNTitle>
            <LPNIcons>
                <StyledIcon path={mdiChevronDown} />
                <StyledIcon path={mdiArrowRight} />
            </LPNIcons>
        </Embed>
    );
};

export default ListedPatchNote;
