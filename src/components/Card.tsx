import Image from "next/image"
import React, {ReactNode} from "react"


interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
}


export const Card = ({children,...props} : CardProps)=>{
    return(
        <div {...props}>{children}</div>
    )
}
const Title = ({children,...props})=>{return <h3 {...props}>{children}</h3>}
const Description = ({children,...props})=> {return <p {...props}>{children}</p>}
const Repository = ({children,...props})=> {return <a {...props}>{children}</a>}
const Deploy = ({children,...props})=> {return <a {...props}>{children}</a>}
const Presentation = ({...props})=> {return <Image {...props}/>} 
Card.Title = Title;
Card.Description = Description;
Card.Repository = Repository;
Card.Deploy = Deploy;
Card.Presentation = Presentation
export default Card;