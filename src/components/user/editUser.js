import { useState } from 'react';
import Modal from 'react-modal';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import './listUser.css'


function EditUser(props){
  
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
      const {onReload} = props;
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
            onReload(); //reload để update data
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
      <button className='orangeBtn' onClick={openModal}>Chỉnh sửa</button>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        appElement={document.getElementById('root')}
      >

        <form id='form' onSubmit={handleSubmit}>
            <table>
                <thead><tr><td><h2>THÊM MỚI KHÁCH HÀNG</h2></td></tr></thead>
                <tbody>
                <tr>
                    <td>Họ tên: </td>
                    <td><input type='text' name='name' onChange={handleChange} required defaultValue={item.name}></input></td>         
                </tr>
                <tr>
                    <td>Giới tính</td>
                    <td><input type='text' name='gender' onChange={handleChange} required defaultValue={item.gender}></input></td>
                </tr>
                <tr>
                    <td>Năm sinh: </td>
                    <td><input type='text' name='birth' onChange={handleChange} required defaultValue={item.birth}></input></td>
                </tr>
                <tr>
                    <td>Số điện thoại: </td>
                    <td><input type='text' name='phone' onChange={handleChange} required defaultValue={item.phone}></input></td>
                </tr>
                <tr>
                    <td>Email: </td>
                    <td><input type='text' name='email' onChange={handleChange} required defaultValue={item.email}></input></td>
                </tr>
                <tr>
                    <td>Nghề nghiệp</td>
                    <td><input type='text' name='job' onChange={handleChange} required defaultValue={item.job}></input></td>
                </tr>
                <tr>
                    <td>Xếp hạng</td>
                    <td>
                      <select onChange={handleChange} name="type" defaultValue={item.type}>
                        <option value="Khách hàng mới"> Khách hàng mới </option>
                        <option value="Khách hàng bạc"> Khách hàng bạc </option>
                        <option value="Khách hàng vàng"> Khách hàng vàng </option>
                        <option value="Khách hàng kim cương"> Khách hàng kim cương </option>
                      </select>
                    </td>
                </tr>
                <tr>
                    <td>Đường dẫn hình ảnh: </td>
                    <td><input type='text' name='thumbnail' onChange={handleChange} required defaultValue={item.thumbnail}></input></td>
                </tr>
                <tr>
                    <td>
                      <input type='button' value='Huỷ' onClick={closeModal}></input>
                      <input type='submit' value='Sửa'></input>     
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
export default EditUser;
