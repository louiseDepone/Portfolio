import Tag from "./Tag";
type skills = {
  backend: string[];
  frontend: string[];
  database: string[];
  language: string[];
};
export default function Skills({
  backend,
  frontend,
  database,
  language,
}: skills) {
  return (
    <div>
      <p className="font-bold text-2xl pb-5">SKILLS</p>

      <div className="flex flex-col gap-3">
        <div className="">
          <p className="font-bold text-lg">Language</p>
          <div className="flex flex-wrap gap-1 pt-2">
            {language.map((skill, index) => (
              <Tag key={index} skill={skill} type="language" />
            ))}
          </div>
        </div>
        <div className="">
          <p className="font-bold text-lg">Frontend</p>
          <div className="flex flex-wrap gap-1 pt-2">
            {frontend.map((skill, index) => (
              <Tag key={index} skill={skill} type="frontend" />
            ))}
          </div>
        </div>

        <div className="">
          <p className="font-bold text-lg">Backend</p>
          <div className="flex flex-wrap gap-1 pt-2">
            {backend.map((skill, index) => (
              <Tag key={index} skill={skill} type="backend" />
            ))}
          </div>
        </div>

        <div className="">
          <p className="font-bold text-lg">Database</p>
          <div className="flex flex-wrap gap-1 pt-2">
            {database.map((skill, index) => (
              <Tag key={index} skill={skill} type="database" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
