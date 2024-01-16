import "./App.css";
import Navbar from "./Navbar/Navbar.jsx";
import Content from "./Content/Content.jsx";
import Faq from "./FAQ/Faq.jsx";
function App() {
  return (
    <main className="flex justify-center gap-4 flex-col min-h-screen">
     <Navbar />
     <Content />
     <Faq />
    </main>
  );
}

export default App;
