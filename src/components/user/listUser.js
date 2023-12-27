import React, { useState, useEffect } from 'react';
import EditUser from './editUser';
import DeleteUser from './deleteUser';
import ShowUser from './showUser';
import './listUser.css';

function ListUser(props) {
    const { reload } = props;
    const { onReload } = props;
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(24); // Số lượng mục trên mỗi trang

    useEffect(() => {
        const fetchApi = () => {
            fetch(`https://jqy9tn-8080.csb.app/user`)
                .then(res => res.json())
                .then(data => {
                    setData(data);
                    setLoading(false);
                });
        };

        setTimeout(fetchApi, 1500);
    }, [reload]);

    // Tính toán index của mục đầu tiên và mục cuối cùng trên trang hiện tại
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    // Hàm chuyển trang
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
            {loading ? (
                <>Đang tải dữ liệu...</>
            ) : (
                <>
                    <div className='listUser'>
                        {currentItems.map((item, _) => (
                            <div className='user' key={item.id}>
                                <div className='user__img'>
                                    <img src={item.thumbnail} alt={item.name} />
                                </div>
                                <div className='user__name'>Tên khách hàng: {item.name}</div>
                                <div className='user__job'>Nghề nhiệp: {item.job}</div>
                                <div className='user__type'>Xếp hạng: {item.type}</div>
                                <DeleteUser item={item} onReload={onReload} />
                                <EditUser item={item} onReload={onReload} />
                                <ShowUser item={item} />
                            </div>
                        ))}
                    </div>

                    {/* Phân trang */}
                    <div className='pagination'>
                        {Array.from({ length: Math.ceil(data.length / itemsPerPage) }, (_, index) => (
                            <button key={index + 1} onClick={() => paginate(index + 1)}>
                                {index + 1}
                            </button>
                        ))}
                    </div>
                </>
            )}
        </>
    );
}

export default ListUser;
