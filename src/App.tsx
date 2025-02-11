import "./App.css";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Side from "./components/Side";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <div className="w-full bg-[#111111] text-white   min-h-screen lg:flex  ">
        <aside className="lg:w-1/3 py-10  px-17 lg:pl-26">
          <Side />
        </aside>
        <main className="flex-1 lg:h-screen  border-[#1E1E1E] border-l ">
          <div className="overflow-y-auto h-full py-10 px-17 flex flex-col gap-10">
            {/* <Message /> */}
            <div>
              <p className="text-2xl font-extrabold ">Hello There!</p>
              <p className="text- pt-2">

                I am a Full Stack Developer with a passion for creating
                innovative software solutions. I am currently based in the
                Philippines. I am 4th year student taking up Bachelor of Computer Science at Naga College Foundation Inc.

              </p>
            </div>
            <Skills 
              frontend={
                ["JavaScript", "React",  "Angular", "Blazor", "Tailwind"]
              }
              backend={
                ["Node", "Express", "ASP.NET", "NestJS"]
              }
              language={
                ["C#","Python",  "JavaScript", "TypeScript"]
              }
              database={
                ["MySQL", "Postgresql"]
              }
            />
            <Education  />
            <Projects/>
          </div>

        </main>
      </div>
    </>
  );
}

export default App;
