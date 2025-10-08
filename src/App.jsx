import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Works, StarsCanvas, Footer, Education } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 min-h-screen w-full' style={{ backgroundColor: '#050816' }}>
        <Navbar />

        {/* Global Stars Background */}
        <div className='fixed inset-0 z-0' style={{ backgroundColor: '#050816' }}>
          <StarsCanvas />
        </div>

        <div className='relative z-10 pl-0 md:pl-24 lg:pl-32 min-h-screen' style={{ backgroundColor: '#050816' }}>
          <Hero />
          <About />
          <Experience />
          <Works />
          <Education />
          <Feedbacks />
          <Contact />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
