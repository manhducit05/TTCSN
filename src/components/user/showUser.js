import { useState } from 'react';
import Modal from 'react-modal';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import './listUser.css'
import './form.css'

function ShowUser(props){
  
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',                  
        },
      };
      const {item} = props;
      const [isOpen, setIsOpen] = useState(false)
      const [newUser, setNewUser] = useState(item);
      function openModal() {
        setIsOpen(true);
      }
      function closeModal() {
        setIsOpen(false);
      }
      function handleChange(e){
        const name = e.target.name;
        const value = e.target.value;
        setNewUser({
          ...newUser,
          [name]:value       
        })
        console.log(newUser)
      }
      function handleSubmit(e){
        e.preventDefault();
        fetch(`https://hnnrcz-8080.csb.app/user/${item.id}`,{
          method: "PATCH",
          headers:{
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(newUser)         
        })
        .then(res=>res.json())
        .then(data=>{
          if(data){
            closeModal();
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Chỉnh sửa thông tin khách hàng thành công!',
              showConfirmButton: false,
              timer: 1500
            })
          }
        })
        
      }
    return(
        <>
            <div>
      <button className='orangeBtn' onClick={openModal}>Xem chi tiết</button>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        appElement={document.getElementById('root')}
      >

        <form id='form' onSubmit={handleSubmit}>
            <table>
                <thead><tr><td><h2>THÔNG TIN KHÁCH HÀNG</h2></td></tr></thead>
                <tbody>
                <tr><img src = {item.thumbnail} title='avatar' /></tr>
                <tr>
                    <td>Họ tên: </td>
                    <td><input type='text' name='name' value={item.name}></input></td>         
                </tr>
                <tr>
                  <td>Giới tính</td>
                  <td><input type='text' name='gender' value={item.gender}></input></td>       
                </tr>
                <tr>
                  <td>Năm sinh: </td>
                  <td><input type='text' name='birth' value={item.birth}></input></td>       
                </tr>
                <tr>
                  <td>Số điện thoại: </td>
                  <td><input type='text' name='phone' value={item.phone}></input></td>       
                </tr>
                <tr>
                  <td>Email: </td>
                  <td><input type='text' name='gender' value={item.email}></input></td>       
                </tr>
                <tr>
                    <td>Nghề nghiệp</td>
                    <td><input type='text' name='job'value={item.job}></input></td>
                </tr>
                <tr>
                    <td>Xếp hạng</td>
                    <td><input type='text' name='job'value={item.type}></input></td>

                </tr>
                <tr>
                    <td>
                      <input type='button' value='Thoát' onClick={closeModal}></input>
                    </td>
                </tr>
                </tbody>
            </table>
        </form>
      </Modal>
    </div>
        </>
        
        
    )
}
export default ShowUser;
