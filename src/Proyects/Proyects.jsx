import { Card } from "../Card/Card";

const ProyectContent = [
  {
    id:1,
    imgUrl: "/magicmarket.png",
    title: "Magic market",
    description:
      "Sitio web responsivo orientado al comercio electronico de productos tecnologicos.",
    deployUrl: "https://magicmarket.netlify.app/",
    githubUrl: "https://github.com/MaxiCejasDev/Ecommerce-React",
  },
  {
    id:2,
    imgUrl: "/flexfit.png",
    title: "Flex fit",
    description:
      "Sitio web responsivo orientado al comercio electronico de productos tecnologicos.",
    deployUrl: "https://maxicejasdev.github.io/Desarrollo-Web-Coderhouse/",
    githubUrl: "https://github.com/MaxiCejasDev/Desarrollo-Web-Coderhouse",
  },
  {
    id:3,
    imgUrl: "/flexfit.png",
    title: "Flex fit",
    description:
      "Sitio web responsivo orientado al comercio electronico de productos tecnologicos.",
    deployUrl: "https://maxicejasdev.github.io/Desarrollo-Web-Coderhouse/",
    githubUrl: "https://github.com/MaxiCejasDev/Desarrollo-Web-Coderhouse",
  },
];

export const Proyects = () => {
  return (
    <div className="w-[100%] h-screen flex justify-center flex-wrap gap-x-4 gap-y-4 pt-2 px-[80px] mb-2">
      {ProyectContent.map((item, index) => (
        <Card
          key={index}
          className="max-w-[350px] shadow-md py-[30px] px-[15px] hover:scale-105 duration-500 h-[400px] bg-card-color rounded-[26px] border-[1px] border-color-light flex flex-col font-roboto"
        >
          <Card.ProyectBackground
            className={`custom-card${item.id} w-full h-[180px] overflow-hidden rounded-[12px] px-[50px]`}
          >
            <Card.ProyectImage className="h-full object-fit" src={item.imgUrl} />
          </Card.ProyectBackground>
          <Card.Title className="text-base font-semibold text-color-black pt-[40px]">
            {item.title}
          </Card.Title>
          <Card.Description className="text-base font-regular text-color-light pt-[10px]">
            {item.description}
          </Card.Description>
          <div className="flex gap-x-[10px] pt-[10px]">
            <Card.Deploy target="_blank" href={item.deployUrl}>
              <img
                className="h-[26px] w-[26px]"
                src="/deploy.svg"
                alt="Deploy icon"
              />
            </Card.Deploy>
            <Card.Github target="_blank" href={item.githubUrl}>
              <img
                className="h-[26px] w-[26px]"
                src="/github.svg"
                alt="Github icon"
              />
            </Card.Github>
          </div>
        </Card>
      ))}
    </div>
  );
};
