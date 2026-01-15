import { cn } from "@/lib/utils"
import type { HTMLAttributes } from "react"
import type { ParameterProps } from "../model/types"
import { Parameter } from "./Parameter";

interface Props extends HTMLAttributes<HTMLDivElement> {
    list?: ParameterProps[];
}

export const Parameters = ({className, list = []}: Props) => {
    return(
        <div className={cn('flex flex-col', className)}>
            {list.map((element, index) => (
                <Parameter key={index} icon={element.icon} name={element.name} valueText={element.valueText} />
            ))}
        </div>
    )
}