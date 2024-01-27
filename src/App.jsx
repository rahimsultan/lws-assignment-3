import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import TaskContainer from "./components/TaskContainer";

function App() {
  return (
    <div className="bg-[#191D26] font-[Inter] text-white">
      <Navbar />
      <Hero />
      <TaskContainer />
      <Footer />
    </div>
  );
}

export default App;
