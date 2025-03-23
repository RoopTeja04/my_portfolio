import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <>
      <h1 className="relative text-4xl bottom-12 font-semibold tracking-wider">Technical Skills</h1>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {
          technologies.map((technology) => (
            <div className="w-28 h-28" key={technology.name}>
              <BallCanvas icon={technology.icon} />
            </div>
          ))
        }
      </div>
      <div className="mt-24">
        <h1 className="relative text-4xl bottom-12 font-semibold tracking-wider">Non-Technical Skills</h1>
        <div className="flex flex-col ml-8 space-y-4">
          <li className="text-base tracking-wider">Communication</li>
          <li className="text-base tracking-wider">Problem-Solving & Critical Thinking</li>
          <li className="text-base tracking-wider">Teamwork & Collaboration</li>
          <li className="text-base tracking-wider">Time Management & Organization</li>
        </div>
      </div>
    </>
  )
}

export default SectionWrapper(Tech, "");