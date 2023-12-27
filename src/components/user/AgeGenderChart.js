import React, { useState, useEffect } from 'react';
import BarChart from './BarChart2';
import data from '../../db.json';
import Modal from 'react-modal';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import './listUser.css'

const AgeGenderChart = (props) => {
  const [ageGroupData, setAgeGroupData] = useState([]);
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

    // Tính số lượng khách hàng theo nhóm tuổi và giới tính
    const ageGroupCounts = {
      under20: { male: 0, female: 0 },
      from20to30: { male: 0, female: 0 },
      above30: { male: 0, female: 0 },
    };

    dataFromJson.forEach((user) => {
      var birthDate = user.birthDate
      const agecalc = (birthDate) => {
        const parts = birthDate.split('/');
        const b = 2023
        const a = parseInt(parts[2], 10); 
        const c = b - a
        return c
      };
      const age = agecalc(birthDate)
      
      let gender = user.gender === 'Nam' ? 'male' : 'female';

      if (age < 20) {
        ageGroupCounts.under20[gender] = ageGroupCounts.under20[gender] + 1;
      } else if (age >= 20 && age <= 30) {
        ageGroupCounts.from20to30[gender] = ageGroupCounts.from20to30[gender] +1;
      } else {
        ageGroupCounts.above30[gender] = ageGroupCounts.above30[gender] +1;
      }
    });

    const formattedData = [
      { ageGroup: 'Dưới 20', male: ageGroupCounts.under20.male, female: ageGroupCounts.under20.female },
      { ageGroup: '20 - 30', male: ageGroupCounts.from20to30.male, female: ageGroupCounts.from20to30.female },
      { ageGroup: 'Trên 30', male: ageGroupCounts.above30.male, female: ageGroupCounts.above30.female },
    ];
    console.log(ageGroupData)

    setAgeGroupData(formattedData);
  }, []);

  return (
    // <div>
    //   <h2>Biểu đồ số lượng khách hàng theo nhóm tuổi và giới tính</h2>
    //   <BarChart data={ageGroupData} />
    // </div>

    <div>
    <button className='addBtn'  onClick={openModal}>Biểu đồ tuổi - giới tính</button>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        appElement={document.getElementById('root')}
      >
      <h2>Biểu đồ số lượng khách hàng theo nhóm tuổi và giới tính</h2>
      <BarChart data={ageGroupData} />
      </Modal>
    </div>
  );
};

export default AgeGenderChart;
