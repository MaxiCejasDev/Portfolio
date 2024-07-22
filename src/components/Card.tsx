import Image from "next/image"
import React from "react"


interface Props{
    children: React.ReactNode
    [key:string]: any;
}

export const Card = ({children,...props} : Props)=>{
    return(
        <div {...props}>{children}</div>
    )
}
const Title = ({children,...props}:Props)=>{return <h3 {...props}>{children}</h3>}
const Description = ({children,...props}:Props)=> {return <p {...props}>{children}</p>}
const Repository = ({children,...props}:Props)=> {return <a {...props}>{children}</a>}
const Deploy = ({children,...props}:Props)=> {return <a {...props}>{children}</a>}
const Presentation = ({ src, alt, ...props }: { src: string; alt: string; [key: string]: any })=> {
    return <Image  src={src}
    alt={alt}
    fill
    {...props}
    priority
    loading="eager"/>} 
    
Card.Title = Title;
Card.Description = Description;
Card.Repository = Repository;
Card.Deploy = Deploy;
Card.Presentation = Presentation
export default Card;
