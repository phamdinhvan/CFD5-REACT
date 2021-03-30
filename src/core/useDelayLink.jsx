import { useContext } from "react"
import { AContext, Context } from "./AppProvider"

export default function useDelayLink() {
    let { delayLink } = useContext(AContext)
    return delayLink
}