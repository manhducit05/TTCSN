import React, { useState, useEffect } from 'react';
import BarChart from './BarChart';
import Modal from 'react-modal';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import './listUser.css'
import data from '../../db.json';
const CustomerTypeChart = (props) => {
  const [customerData, setCustomerData] = useState([]);
  const { reload } = props;
  const { onReload } = props;
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',    
      width: '60%'              
    },
  };
  const [isOpen, setIsOpen] = useState(false)
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  useEffect(() => {

    const dataFromJson = data.user;

    // Đếm số lượng theo loại
    const typeCounts = {};
    dataFromJson.forEach((user) => {
      const userType = user.type;
      typeCounts[userType] = (typeCounts[userType] || 0) + 1;
    });

    // Sắp xếp theo thứ tự 
    const orderedTypes = ['Khách hàng mới', 'Khách hàng bạc', 'Khách hàng vàng', 'Khách hàng kim cương', 'Khách hàng Titanium'];
    const newData = orderedTypes.map((type) => ({
      type,
      count: typeCounts[type] || 0,
    }));

    setCustomerData(newData);
  }, [reload]);

  return (
    
    <div>
    <button className='addBtn'  onClick={openModal}>Biểu đồ</button>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        appElement={document.getElementById('root')}
      >
      <h2>Biểu đồ cột loại khách hàng</h2>
      <BarChart data={customerData} />
      </Modal>
    </div>
  );
};

export default CustomerTypeChart;
