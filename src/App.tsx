import  AppLayout  from "./layout/app-layout"
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect, useState } from "react"
import { HashLoader } from "react-spinners";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000)
  }, [])

  useEffect(() => {
    Aos.init({
      once: false
    })
    const handleScroll = () => {
      Aos.refresh();
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
    <div className="h-[100vh] flex flex-col">
    {loading ? (
      <div className="w-[100%] h-[100%] flex items-center justify-center">
        <HashLoader color="#333333"
         size={88}
        />
      </div>
    ) : (
      <AppLayout />
    )}
    </div>
    </>
  )
}

export default App