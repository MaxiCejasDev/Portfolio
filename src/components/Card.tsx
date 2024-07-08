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
const Presentation = ({...props})=> {return <Image {...props}/>} 
const Description = ({children,...props})=> {return <p {...props}>{children}</p>}
const Repository = ({children,...props})=> {return <a {...props}>{children}</a>}
const Deploy = ({children,...props})=> {return <a {...props}>{children}</a>}

Card.Presentation = Presentation
Card.Description = Description;
Card.Repository = Repository;
Card.Deploy = Deploy;

export default Card;