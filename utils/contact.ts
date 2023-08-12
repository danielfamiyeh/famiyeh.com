import { Component } from "react";

import { linkIcons } from "./links";
import { ExternalLink } from "@/models/ExternalLink";

export const contactLinks: (ExternalLink & { Icon: typeof Component })[] = [
  {
    site: "Github",
    url: "https://github.com/danielfamiyeh",
    Icon: linkIcons.github,
  },

  {
    site: "LinkedIn",
    url: "https://www.linkedin.com/in/daniel-k-famiyeh/",
    Icon: linkIcons.linkedin,
  },
];
