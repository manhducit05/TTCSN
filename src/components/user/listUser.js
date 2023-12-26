import {useState, useEffect} from 'react'
import EditUser from './editUser';
import DeleteUser from './deleteUser'
import './listUser.css'
import ShowUser from './showUser';

function ListUser(props){
    // trang dùng để vẽ danh sách khách hàng
    const {reload} = props
    const {onReload} = props
    const [data, setData] = useState([]);
    const [loading,setLoading] = useState(true);
    useEffect(()=>{
        const fetchApi = ()=>{
            fetch(`https://hnnrcz-8080.csb.app/user`)
            .then(res=>res.json())
            .then(data=>{
                setData(data);
                setLoading(false);  

            })
        }
      
        setTimeout(fetchApi,1500);

    },[reload])
    return (
    <>
    {
        loading?(<>Đang tải dữ liệu...</>):(<>
        <div className='listUser'>
            {
                data.map((item,_)=>(
                    <div className='user' key={item.id}>
                        <div className='user__img'><img src={item.thumbnail}></img></div>
                        <div className='user__name'>Tên khách hàng: {item.name}</div>
                        <div className='user__job'>Nghề nhiệp: {item.job}</div>
                        <div className='user__type'>Xếp hạng: {item.type}</div>
                        <DeleteUser item={item} onReload={onReload}/>
                        <EditUser item={item} onReload={onReload}/>
                        <ShowUser item={item}/>
                    </div>                  
                )                 
                )
            }
        </div>
        </>)
    }
    </>
    );
}
export default ListUser;
