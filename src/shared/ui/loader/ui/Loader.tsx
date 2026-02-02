import { cn } from "@/lib/utils";
import styles from "./Loader.module.css";
import type { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {}

export const Loader = ({className}: Props) => {
    return(
        <div className={cn(styles.loader, className)}></div>
    )
}