import { useState } from "react";
import AddUser from "./addUser";
import ListUser from "./listUser"
function User(){
    const [reload, setReload] = useState(true);
    const handleReload = ()=>{
        setReload(!reload);
    }
    return (
        <>
        {
           (<>
            <AddUser onReload={handleReload}/>
            <ListUser reload = {reload} onReload={handleReload} />
            </>)
        }
        </>
    )


}
 export default User;