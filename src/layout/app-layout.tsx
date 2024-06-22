import {Header} from './header'
import {Footer} from './footer'
import { Hero } from "../sections/hero";
import { About } from "../sections/about";
import { Clients } from '../sections/clients';
import { TeamCard } from '../sections/team';
import { memo } from 'react';



 const AppLayout = () => {
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
            </main>
        <footer className='bg-whiteBg'>
            <Footer />
        </footer>
        </div>
        </>
    )
}

export default memo(AppLayout)