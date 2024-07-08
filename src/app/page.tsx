import Card from "@/components/Card";
import Image from "next/image";

interface CardContent {
  imgURL: string,
  description: string;
  repositoryURL: string;
  deployURL: string;
  imgALT: string
}

const cardContent: CardContent[] = [
  {
    imgURL: '/images/anashe.jpg',
    description:
      "Pagina web orientada al comercio electronico de productos tecnologicos",
    repositoryURL: "https://github.com/MaxiCejasDev/Ecommerce-React",
    deployURL: "magicmarket.netlify.app//",
    imgALT: 'Magic market'
  },
  {
    imgURL: '/images/anashe.jpg',
    description:
      "Organizador de tareas por titulo",
    repositoryURL: "https://github.com/MaxiCejasDev/TaskFlow",
    deployURL: "magicmarket.netlify.app//",
    imgALT: 'Taskflow'
  },
  {
    imgURL: '/images/anashe.jpg',
    description:
      "Pagina de aterrizaje para Clases de yoga",
    repositoryURL: "https://github.com/Lucasinsa/TefiYoga",
    deployURL: "https://tefiyoga.netlify.app/",
    imgALT: 'TefiYoga'
  },
  {
    imgURL: '/images/anashe.jpg',
    description:
      "Pagina de planes de entrenamiento",
    repositoryURL: "https://github.com/MaxiCejasDev/Desarrollo-Web-Coderhouse",
    deployURL: "https://maxicejasdev.github.io/Desarrollo-Web-Coderhouse/",
    imgALT: 'Flex Fit'
  },

];

export default function Home() {
  return (
    <main className="flex gap-x-8 flex-wrap flex-1">
      {cardContent.map(({imgURL,description, repositoryURL, deployURL,imgALT})=>(
        <Card className='bg-card flex flex-col' key={repositoryURL}>
          <div className="h-[80px] w-[100px}">
            <Card.Presentation src={imgURL} alt={imgALT} height={80} width={100} objectFit='contain'></Card.Presentation>
          </div>
          
          <Card.Description className='text-white font-regular text-base'>{description}</Card.Description>
          <div className="flex gap-x-2"> 
          <Card.Repository className='text-grey font-regular text-sm flex bg-button rounded-[12px] items-center py-2 px-4' href={repositoryURL}>
            <Image src={'/images/icons/github.svg'} width={16} height={16} alt="Github icon"/>
            Repositorio</Card.Repository>
          <Card.Deploy className='text-grey font-regular text-sm flex bg-button rounded-[12px] items-center py-2 px-4' href={deployURL}>
            <Image src={'/images/icons/deploy.svg'} width={16} height={16} alt="Deploy icon"/>
            Ver Pagina</Card.Deploy>
          </div>

        </Card>
      ))}
    </main>
  );
}
