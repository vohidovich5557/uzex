import { Header } from "./header"
import { Footer } from "./footer"
import { Hero } from "../sections/hero"
import { About } from "../sections/about"

export const AppLayout = () => {
    return (
        <>
         <div className="flex flex-col justify-between h-[100%]">
         <div className="flex flex-col ">
         <header>
            <Header />
         </header>
         <main className="flex flex-col">
            <section>
                <Hero />
            </section>
            <section>
                <About />
            </section>
         </main>
         </div>
         <footer>
            <Footer />
         </footer>
         </div>
        </>
    )
}