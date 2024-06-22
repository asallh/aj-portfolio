import VerticalTimelineComponent from "./Components/VerticalTimelineComponent";
import { WavyBackground } from "./Components/ui/wavy-background";

function App() {
  return (
    <>
      <WavyBackground className="max-w-4xl mx-auto pb-40">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>{" "}
      </WavyBackground>
      <VerticalTimelineComponent />
    </>
  );
}

export default App;
