import Image from "next/image";

export default function About() {
  return (
    <main className="font-light text-white text-xl">
      <div>
        <p className="mt-4">
          Soy un desarrollador frontend con conocimientos en diseño UX/UI de
          Argentina, mi principal enfoque es construir interfaces intuitivas y
          atractivas colocándome en la perspectiva de los usuarios.
        </p>
        <p className="mt-4">
          Me mantengo en constante formación y dedicación para mantenerme
          actualizado con las ultimas tendencias tecnológicas, creando sitios
          web responsivos y amigables a la vista.
        </p>
        <p className="mt-4">
          Soy una persona entusiasta y amante de los desafíos. Me encanta
          aprender siempre algo nuevo, de igual manera, me aseguro siempre de
          dar los mejores resultados posibles.
        </p>
      </div>
      <div className="mt-8 pb-8">
        <div>
          <h2 className="flex items-center font-semibold text-2xl gap-x-2">
            <Image
              src={"/images/icons/code.svg"}
              height={25}
              width={25}
              alt="Code icon"
            />
            Tecnologías
          </h2>
          <div className="flex bg-card h-[80px] items-center gap-x-2 px-4 mt-2">
            <Image
              src={"/images/icons/info.svg"}
              height={25}
              width={25}
              alt="Information icon"
            />
            <p className="font-regular text-xl">
              Next.js, React, Typescript,TailwindCSS, CSS.
            </p>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="flex items-center font-semibold text-2xl gap-x-2">
            <Image
              src={"/images/icons/knowledge.svg"}
              height={25}
              width={25}
              alt="Knowledge icon"
            />
            Conocimiento
          </h2>
          <div className="flex bg-card h-[80px] items-center gap-x-2 px-4 mt-2">
            <Image
              src={"/images/icons/info.svg"}
              height={25}
              width={25}
              alt="Information icon"
            />
            <p className="font-regular text-xl">
              UX/UI, Testing, CSS Modules, GSAP, Bootstrap, Sass.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}