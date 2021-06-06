import React, { FC } from "react";
import Embed from "./Embed";
import { LPNIcons, LPNTitle, LPNVersion } from "./ListedPatchNote.styles";
import { StyledIcon } from "../util/StyledIcon";
import { mdiArrowRight, mdiChevronDown } from "@mdi/js";
import { useRouter } from "next/router";

export interface ListedPatchNoteProps {
    title?: string;
    version?: string;
    id: number;
}

const ListedPatchNote: FC<ListedPatchNoteProps> = (p) => {
    const router = useRouter();

    return (
        <Embed>
            <LPNVersion>{p.version}</LPNVersion>
            <LPNTitle>{p.title}</LPNTitle>
            <LPNIcons>
                <StyledIcon path={mdiChevronDown} />
                <StyledIcon
                    path={mdiArrowRight}
                    onClick={() => {
                        router.push("/note/[id]", "/note/" + p.id);
                    }}
                />
            </LPNIcons>
        </Embed>
    );
};

export default ListedPatchNote;
