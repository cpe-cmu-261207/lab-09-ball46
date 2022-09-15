import Mainlayout from "../layout/Mainlayout";
import Intro from "../components/intro";
import Skill from "../components/Skill";

export default function Home() {
  return (
    <div>
      <Mainlayout>
        <Intro />
        <Skill />
      </Mainlayout>
    </div>
  );
}
