import Card from "@/components/Card";
import Image from "next/image";

interface CardContent {
  imgURL: string,
  description: string;
  repositoryURL: string;
  deployURL: string;
  name: string
}

const cardContent: CardContent[] = [
  {
    imgURL: '/images/anashe.jpg',
    description:
      "Pagina web orientada al comercio electronico de productos tecnologicos",
    repositoryURL: "https://github.com/MaxiCejasDev/Ecommerce-React",
    deployURL: "https://magicmarket.netlify.app//",
    name: 'Magic market'
  },
  {
    imgURL: '/images/anashe.jpg',
    description:
      "Organizador de tareas por titulo",
    repositoryURL: "https://github.com/MaxiCejasDev/TaskFlow",
    deployURL: "/",
    name: 'Taskflow'
  },
  {
    imgURL: '/images/proyects/tefi-yoga.png',
    description:"Landing page para una cliente realizada con un equipo de diseñadoras UX/UI y otro desarrollador frontend",
    repositoryURL: "https://github.com/Lucasinsa/TefiYoga",
    deployURL: "https://tefiyoga.netlify.app/",
    name: 'TefiYoga'
  },
  {
    imgURL: '/images/proyects/flex-fit.png',
    description:
      "Pagina web orientada a la venta de planes de entrenamiento",
    repositoryURL: "https://github.com/MaxiCejasDev/Desarrollo-Web-Coderhouse",
    deployURL: "https://maxicejasdev.github.io/Desarrollo-Web-Coderhouse/",
    name: 'Flex Fit'
  },
  {
    imgURL: '/images/proyects/flex-fitwear.png',
    description:
      "Ecommerce básico  de ropa deportiva",
    repositoryURL: "https://github.com/MaxiCejasDev/Javascript-Coderhouse",
    deployURL: "https://maxicejasdev.github.io/Javascript-Coderhouse/",
    name: 'Flex Fitwear'
  },

];

export default function Home() {
  return (
    <main className="flex flex-col w-full justify-center items-center between h-fit px-2 sm:px-0 gap-y-6">
      {cardContent.map(({imgURL,description, repositoryURL, deployURL,name})=>(
        <Card className='bg-hover-black sm:bg-button flex flex-col-reverse gap-y-6 sm:gap-y-0 sm:grid sm:hover:bg-hover-black duration-300 sm:grid-cols-2 sm:grid-rows-1 w-full h-[500px] sm:h-[300px] rounded-[12px] overflow-hidden p-[16px] sm:p-[30px]' key={repositoryURL}>

          <div className="flex flex-col justify-between gap-y-6 sm:gap-y-0">
            <div className="pr-4">
            <Card.Title className='text-white font-bold text-xl'>{name}</Card.Title>
            <Card.Description className='text-light font-regular text-base pt-2'>{description}</Card.Description>
            </div>
          
          <div className="flex flex-col gap-y-2 sm:gap-y-0 sm:flex-row sm:gap-x-2"> 
          <Card.Repository target={'_BLANK'} className=' font-sans font-semibold gap-x-2 sm:gap-x-1 font-regular text-lg sm:text-sm flex justify-center sm:justify-normal hover:bg-[#d2d2d2] text-[#222222] bg-[#F0F0F0] rounded-[12px] items-center py-2 sm:px-4' href={repositoryURL}>
            <Image className="card-icon sm:h-[16px] h-[24px] w-[24px] sm:-w-[16px]" src={'/images/icons/github-card.svg'} width={16} height={16} alt="Github icon"/>
            Repositorio</Card.Repository>
          <Card.Deploy target={'_BLANK'}  className='font-sans font-semibold gap-x-2 sm:gap-x-1 font-regular text-lg sm:text-sm flex justify-center sm:justify-normal hover:bg-[#d2d2d2] text-[#222222]  bg-[#F0F0F0]  rounded-[12px] items-center py-2 sm:px-4' href={deployURL}>
            <Image className="card-icon sm:h-[16px] h-[24px] w-[24px] sm:-w-[16px]" src={'/images/icons/deploy-card.svg'} width={16} height={16} alt="Deploy icon"/>
            Ver Pagina</Card.Deploy>
          </div>
          </div>

          <div className="h-full w-full rounded-xl bg-black relative overflow-hidden">
            <Card.Presentation className="h-full w-full" src={imgURL} alt={name} fill></Card.Presentation>
          </div>
        </Card>
      ))}
    </main>
  );
}

