import {Header} from './header'
import {Footer} from './footer'
import { Hero } from "../sections/hero";
import { About } from "../sections/about";
import { Clients } from '../sections/clients';
import { TeamCard } from '../sections/team';
import { memo } from 'react';
import { Outlet } from 'react-router-dom';



 const AppLayout = () => {
    return (
        <>
        <Outlet />
        </>
    )
}

export default memo(AppLayout)