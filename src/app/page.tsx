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
    deployURL: "https://magicmarket.netlify.app//",
    imgALT: 'Magic market'
  },
  {
    imgURL: '/images/anashe.jpg',
    description:
      "Organizador de tareas por titulo",
    repositoryURL: "https://github.com/MaxiCejasDev/TaskFlow",
    deployURL: "https://magicmarket.netlify.app//",
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
    <main className="flex flex-wrap w-full justify-between h-fit gap-y-4 gap-x-2 pb-4">
      {cardContent.map(({imgURL,description, repositoryURL, deployURL,imgALT})=>(
        <Card className='bg-card flex flex-col w-[380px] h-[350px] rounded-[12px] overflow-hidden px-4  py-4' key={repositoryURL}>
          <div className="h-[50%] w-full">
            <Card.Presentation className='h-full w-full' src={imgURL} alt={imgALT} height={80} width={100} objectFit='contain'></Card.Presentation>
          </div>
          
          <Card.Description className='text-white font-light text-base pt-4'>{description}</Card.Description>
          <div className="flex gap-x-2 pt-4"> 
          <Card.Repository target={'_BLANK'} className='text-grey gap-x-1 font-regular text-sm flex bg-button rounded-[12px] items-center py-2 px-4' href={repositoryURL}>
            <Image src={'/images/icons/github.svg'} width={16} height={16} alt="Github icon"/>
            Repositorio</Card.Repository>
          <Card.Deploy target={'_BLANK'}  className='text-grey gap-x-1 font-regular text-sm flex bg-button rounded-[12px] items-center py-2 px-4' href={deployURL}>
            <Image src={'/images/icons/deploy.svg'} width={16} height={16} alt="Deploy icon"/>
            Ver Pagina</Card.Deploy>
          </div>

        </Card>
      ))}
    </main>
  );
}
