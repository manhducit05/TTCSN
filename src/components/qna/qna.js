import {useState, useEffect} from 'react'
import './qna.css'
function QnA (){
    const [data, setData] = useState([]);
    const [loading,setLoading] = useState(true);
    useEffect(()=>{
        const fetchApi = ()=>{
            fetch(`https://jqy9tn-8080.csb.app/qna`)
            .then(res=>res.json())
            .then(data=>{
                setData(data);
                setLoading(false);  

            })
        }
      
        setTimeout(fetchApi,500);

    },[])
    return(
        loading?(<>Đang tải dữ liệu...</>):(
            <div className='listQna'>
                {
                    data.map((item,_)=>(
                        <div className='item' key={item.id}>
                            <div className='user__img'><img src={item.thumbnail}></img></div>
                            <div className='main'>
                                <div className='user__name'>Tên khách hàng: {item.name}</div>
                                <div className='question'>
                                    Phương thức: {item.type}
                                    <br></br>
                                    Câu hỏi: {item.question}</div>
                                {
                                    item.answer?(
                                        <div className='answer'>Trả lời:{item.answer}</div>
                                    ):(<div className='answer'>Chưa có câu trả lời!</div>)
                                }

                            </div>
                        </div>                  
                    )                 
                    )
                }
            </div>
    )
)
}

export default QnA
