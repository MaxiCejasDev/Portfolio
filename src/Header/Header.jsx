export const Header = () => {
  return (
    <header className="h-[200px] px-[40px] w-full flex flex-col justify-center items-center">
      <div>
          <h1 className="text-color-black font-bold font-roboto text-2xl">
            Hola! Soy Maxi. Desarrollador Frontend React.
          </h1>
        <div className="flex gap-x-2 items-center pt-4">
          <button className="bg-white-light hover:bg-neutral-200 font-roboto font-semibold text-base py-[10px] px-[17px] text-color-light rounded-[12px]">
            Curriculum
          </button>
          <button className="bg-white-light hover:bg-neutral-200 font-roboto font-semibold text-base py-[10px] px-[17px] text-color-light rounded-[12px]">
            Email
          </button>
          <a target="_blank" href="https://www.linkedin.com/in/maximiliano-cejas/"><img
            className="h-[32px] w-[32px]"
            src="/linkedin.svg"
            alt="Linkedin icon"
          /></a>
          <a target="_blank" href="https://github.com/MaxiCejasDev"><img
            className="h-[32px] w-[32px]"
            src="/github.svg"
            alt="Github icon"
          /></a>
          
          <a target="_blank" href=""><img
            className="h-[32px] w-[32px]"
            src="/behance.svg"
            alt="Behance icon"
          /></a>
        </div>
      </div>
    </header>
  );
};
