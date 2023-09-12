import { sprinkles } from "@/theme"
import { Avatar } from "../components/Avatar"
import clsx from "clsx"

export const IndexPage = () => {
  return (
    <>
       <Avatar /> 
      <span className={clsx(sprinkles({ }))}>hello, world!</span>
    </>
  )
}