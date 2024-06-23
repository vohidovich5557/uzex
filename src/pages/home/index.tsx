import { Footer } from "../../layout/footer"
import { Header } from "../../layout/header"
import { About } from "../../sections/about"
import { Clients } from "../../sections/clients"
import { Hero } from "../../sections/hero"
import { Location } from "../../sections/location"
import { TeamCard } from "../../sections/team"


export const HomePage = () => {
    return (
        <>
        <div className='flex flex-col bg-whiteBg h-[100%]'>
        <header>
            <Header />
        </header>
            <main className='bg-whiteBg'>
                <section>
                    <Hero />
                </section>
                <section>
                    <About />
                </section>
                <section>
                    <Clients />
                </section>
                <section>
                    <TeamCard />
                </section>
                <section>
                    <Location />
                </section>
            </main>
        <footer className='bg-whiteBg'>
            <Footer />
        </footer>
        </div>
        </>
    )
}