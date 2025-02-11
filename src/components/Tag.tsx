import  { useEffect, useState } from "react";
type TagProps = {
  skill: string;
  type: string;
};
export default function Tag({ skill="ss", type = "language" }: TagProps) {
  const [color, setColor] = useState<string>("");

  useEffect(() => {
    switch (type) {
      case "language":
        setColor("bg-[#1E3356] text-[#6FB6FF]");
        break;
      case "frontend":
        setColor("bg-[#164728] text-[#22C55E]");
        break;
      case "backend":
        setColor("bg-[#542121] text-[#D13E34]");
        break;
      case "database":
        setColor("bg-[#53420E] text-[#D2A30B]");
    }
  }, [type]);
  return (
    <div
      className={color + " rounded-full text-center flex items-center justify-center p-1 px-4 text-xs w-fit"} 
    >
      {skill}
    </div>
  );
}
