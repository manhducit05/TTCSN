import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import './listUser.css'

function DeleteUser(props){
    const {item} = props; 
    const {onReload} = props;
    const handleDelete = ()=>{
        Swal.fire({
            title: 'Bạn có chắc chắn xoá khách hàng trên?',
            text: "Thao tác không thể hoàn thành sau khi thực hiện!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'OK',
            cancelButtonText:'Hủy'
          }).then((result) => {
            if (result.isConfirmed) {
            fetch(`https://hnnrcz-8080.csb.app/user/${item.id}`,{method:'DELETE'})
            .then(res=>res.json())
            .then(()=>{  
                onReload()             
                Swal.fire(
                    'Đã xoá!',
                    'Thông tin của khách hàng đã được xoá thành công!',
                    'success'
                  )    
            })
              
            }
          })
        console.log(item.id);
        // onReload();
    }
    return(
        <button className='orangeBtn'  onClick={handleDelete}>Xoá</button>
    )
}
export default DeleteUser
