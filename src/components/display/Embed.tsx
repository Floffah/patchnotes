import React, { FC } from "react";
import { EmbedContainer } from "./Embed.styles";

const Embed: FC = (p) => {
    return <EmbedContainer>{p.children}</EmbedContainer>;
};

export default Embed;
