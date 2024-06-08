

export const Card = ({children,...props})=>{
    return(
        <div {...props}>
            {children}
        </div>
    )
}

const ProyectBackground = ({children,...props})=>{return <div {...props}>{children}</div>}
const ProyectImage = ({...props})=>{return <img {...props}/>}
const Title = ({children,...props})=>{return <h2 {...props}>{children}</h2>}
const Description = ({children,...props})=>{return <p {...props}>{children}</p>}
const Deploy = ({children,...props})=>{return <a {...props}>{children}</a>}
const Github = ({children,...props})=>{return <a {...props}>{children}</a>}

Card.ProyectBackground = ProyectBackground
Card.ProyectImage = ProyectImage
Card.Title = Title
Card.Description = Description
Card.Deploy = Deploy
Card.Github = Github

