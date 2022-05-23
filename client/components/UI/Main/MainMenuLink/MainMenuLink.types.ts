import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface MainMenuLinkProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    text: string,
    icon: string,
    color?: 'b' | 'v',
    className?: string,
    href: string,
}