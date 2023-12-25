import {Link,Outlet} from'react-router-dom'
import './layout.css'
import { getCookie } from '../components/helper/cookie'
import { useSelector } from 'react-redux'
function Layout(){
    const token = getCookie("token");
    const isLogin = useSelector(state => state.loginReducer);

    return(
        <>
        <div className='layout'>
            <div className='inner-header'>
                <div className='inner-logo'>Nhóm 11</div>
                <div className='inner-list'>
                    <ul>
                        <li>
                            <Link to='/'>Trang chủ</Link>
                        </li>
                        {
                            (isLogin&&token)&&(
                                <>
                        <li>
                            <Link to='/user'>Quản lý thông tin khách hàng</Link>
                        </li>
                        <li>
                            <Link to='/qna'>Q&A</Link>
                       </li>
                                </>
                            )
                        }
                        <li>
                            {isLogin?(<Link to='/logout'>Đăng xuất</Link>):(<Link to='/login'>Đăng nhập</Link>)}
                        </li>
                    </ul>
                </div>
            </div>
            <div className='inner-main'>
                <Outlet />
            </div>
            <div className='inner-footer'>Copryright @2023 by Group11</div>
        </div>
        </>
    )
}
export default Layout