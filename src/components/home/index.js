import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRectangleList, faFileCircleQuestion,  faNetworkWired} from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

function Home (){
    const navigate = useNavigate();
    const handleLogin = ()=>{
        navigate("/login")
    }
    return(
        <>
                <div className='banner'>
                    <div className='main'>
                        <div className='title'>TOP ĐẦU TRONG LĨNH VỰC CRM</div>
                        <div className='desc'>Chào mừng bạn đến với trang chủ của chúng tôi - nơi tập trung các giải pháp CRM hiệu quả để đáp ứng mọi nhu cầu của doanh nghiệp của bạn. Chúng tôi tận tâm cung cấp các công cụ và dịch vụ giúp bạn ghi nhận thông tin khách hàng, theo dõi yêu cầu hỗ trợ và quản lý mối quan hệ tương tác với khách hàng một cách thông minh và hiệu quả.</div>
                        <button onClick={handleLogin}>Đăng nhập ngay!</button>
                    </div>
                </div>
            
            <div className='list'>
                    <div className='box'>
                        <div className='icon'><FontAwesomeIcon icon={faRectangleList} /></div>
                        <div className='main'>
                            <div className='title'>Ghi Nhận Thông Tin Khách Hàng</div>
                            <div className='desc'>Chúng tôi hiểu rằng thông tin khách hàng là một nguồn tài nguyên quý báu. Hệ thống CRM của chúng tôi giúp bạn tổ chức và lưu trữ mọi chi tiết về khách hàng một cách thuận tiện, từ thông tin liên lạc đến lịch sử mua hàng. Điều này giúp bạn xây dựng một cái nhìn toàn diện về khách hàng và tăng cường khả năng phục vụ.</div>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='icon'><FontAwesomeIcon icon={faFileCircleQuestion} /></div>
                        <div className='main'>
                            <div className='title'>Theo Dõi Yêu Cầu Hỗ Trợ</div>
                            <div className='desc'>Với tính năng theo dõi yêu cầu hỗ trợ, chúng tôi đảm bảo mỗi yêu cầu từ khách hàng đều được ghi chép và xử lý một cách nhanh chóng. Hệ thống ticketing của chúng tôi giúp theo dõi mọi yêu cầu từ khi nó được đưa ra cho đến khi nó được giải quyết, đảm bảo sự minh bạch và hiệu quả trong quá trình hỗ trợ.</div>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='icon'><FontAwesomeIcon icon={faNetworkWired} /></div>
                        <div className='main'>
                            <div className='title'>Quản Lý Tương Tác Khách Hàng</div>
                            <div className='desc'>Mối quan hệ không chỉ là về việc bán hàng, mà còn về cách chúng ta tương tác với khách hàng. Chúng tôi cung cấp các công cụ giúp bạn ghi lại mọi cuộc gọi, email, cuộc họp và gặp gỡ, tạo nên một lịch sử tương tác chi tiết. Điều này giúp doanh nghiệp xây dựng một mối quan hệ vững chắc và tăng cường lòng trung thành từ phía khách hàng.</div>
                        </div>
                    </div>
                </div>
        </>
    )
}
export default Home;