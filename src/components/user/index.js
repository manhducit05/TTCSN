import { useState } from "react";
import AddUser from "./addUser";
import ListUser from "./listUser"
import CustomerTypeChart from "./CustomerTypeChart";
import AgeGenderChart from "./AgeGenderChart";

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
            <CustomerTypeChart onReload={handleReload}/>
            <AgeGenderChart onReload={handleReload}/>
            <ListUser reload = {reload} onReload={handleReload} />
            </>)
        }
        </>
    )


}
 export default User;