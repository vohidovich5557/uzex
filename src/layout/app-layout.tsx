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