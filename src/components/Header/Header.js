import React from 'react';
import logo from '../../assets/image/navbar/logo.svg' 

function Header() {
    return ( 
        <header id='header'>
            <div className='navbar'>
                <div className='navbar_logo'><img src={logo} alt="" /></div>
                <div className='navbar_link'>
                    <ul>
                        <li><a className='navbar_link-item' href="/find">Tìm công việc</a></li>
                        <li><a className='navbar_link-item' href="/find">Cuộc thi</a></li>
                        <li><a className='navbar_link-item' href="/find">Bảng xếp hạng</a></li>
                        <li><a className='navbar_link-item' href="/find">Doanh nghiệp</a></li>
                    </ul>
                </div>
                <div className='navbar_button'>
                    <a className='btn btn-secondary' href="/login">Đăng nhập</a>
                    <a className='btn btn-primary' href="/signup">Bắt đầu</a>
                </div>
            </div>
        </header>
     );
}

export default Header;