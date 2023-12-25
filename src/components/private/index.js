import { Outlet, Navigate} from "react-router-dom";
function Private(){
    const login = true;
    return(
        
        <>
        {
            login?(<Outlet />):(<Navigate to='/login'/>)
        }
        </>
    )
    }
    export default Private;