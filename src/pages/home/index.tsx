import { Suspense, lazy } from "react"
import { HashLoader } from "react-spinners";


const LazyHeader = lazy(() => import('../../layout/header'));
const LazyAbout = lazy(() => import('../../sections/about'));
const LazyFooter =  lazy(() => import('../../layout/footer'));
const LazyClients = lazy(() => import('../../sections/clients'));
const LazyHero = lazy(() => import('../../sections/hero'));
const LazyLocation = lazy(() => import('../../sections/location'));
const LazyTeamCard = lazy(() => import('../../sections/team'));


export const HomePage = () => {
    return (
        <>
        <Suspense fallback={<div className="w-[100%] h-[100%] flex items-center justify-center">
            <HashLoader color="#333333" size={88} />
        </div>}>
            <div className='flex flex-col bg-whiteBg h-[100%]'>
        <header>
            <LazyHeader />
        </header>
            <main className='bg-whiteBg'>
                <section>
                    <LazyHero />
                </section>
                <section>
                    <LazyAbout />
                </section>
                <section>
                    <LazyClients />
                </section>
                <section>
                    <LazyTeamCard />
                </section>
                <section>
                    <LazyLocation />
                </section>
            </main>
        <footer className='bg-whiteBg'>
            <LazyFooter />
        </footer>
        </div>
        </Suspense>
        </>
    )
}