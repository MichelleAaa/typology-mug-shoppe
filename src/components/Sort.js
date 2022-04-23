import React, { useState } from 'react';
// import { AiFillRightSquare } from 'react-icons/ai';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { BsArrowDownCircleFill, BsFillArrowUpCircleFill } from 'react-icons/bs';
import { FcAlphabeticalSortingAz, FcAlphabeticalSortingZa } from 'react-icons/fc';

const Sort = () => {
    const [dropdownOpen1, setDropdownOpen1] = useState(false);
    const toggle1 = () => setDropdownOpen1(prevState => !prevState);

    const [dropdownOpen2, setDropdownOpen2] = useState(false);
    const toggle2 = () => setDropdownOpen2(prevState => !prevState);

    const [dropdownOpen3, setDropdownOpen3] = useState(false);
    const toggle3 = () => setDropdownOpen3(prevState => !prevState);

    const [dropdownOpen4, setDropdownOpen4] = useState(false);
    const toggle4 = () => setDropdownOpen4(prevState => !prevState);

    return (
        <div className="container-fluid mt-1 pt-4 pb-5">
            <div className='row d-none d-sm-flex justify-content-center mx-5'>
                <div className="col-12 d-flex justify-content-end sort-wrapper">

                    <Dropdown direction='left' isOpen={dropdownOpen1} toggle={toggle1} className="d-none d-sm-block">
                        <DropdownToggle caret className='dropdown-filter' >
                            Personality Type
                        </DropdownToggle>
                        <DropdownMenu className='drop-menu'>
                            <DropdownItem>ENFJ</DropdownItem>
                            <DropdownItem>ENFP</DropdownItem>
                            <DropdownItem>ENTJ</DropdownItem>
                            <DropdownItem>ENTP</DropdownItem>
                            <DropdownItem>ESFJ</DropdownItem>
                            <DropdownItem>ESFP</DropdownItem>
                            <DropdownItem>ESTJ</DropdownItem>
                            <DropdownItem>ESTP</DropdownItem>
                            <DropdownItem>INFJ</DropdownItem>
                            <DropdownItem>INFP</DropdownItem>
                            <DropdownItem>INTJ</DropdownItem>
                            <DropdownItem>INTP</DropdownItem>
                            <DropdownItem>ISFJ</DropdownItem>
                            <DropdownItem>ISFP</DropdownItem>
                            <DropdownItem>ISTP</DropdownItem>
                            <DropdownItem>ISTJ</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                {/* </div>
                <div className="col-4 text-center"> */}
                    <Dropdown direction='left' isOpen={dropdownOpen2} toggle={toggle2} className="d-none d-sm-block">
                        <DropdownToggle caret className='dropdown-filter'>
                            Cup Type
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem>Classic</DropdownItem>
                            <DropdownItem>Tall</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                {/* </div>
                <div className="col-4 text-right"> */}
                    <Dropdown direction='left' isOpen={dropdownOpen3} toggle={toggle3} className="d-none d-sm-block">
                        <DropdownToggle caret className='dropdown-filter'>
                            Sort By
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem>Price: <BsArrowDownCircleFill/></DropdownItem>
                            <DropdownItem>Price: <BsFillArrowUpCircleFill/></DropdownItem>
                            <DropdownItem>Name: <FcAlphabeticalSortingAz/></DropdownItem>
                            <DropdownItem>Name: <FcAlphabeticalSortingZa/></DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
            </div>
            
            <div className="row d-flex d-sm-none justify-content-center">
                <div className="col-10">
                    <Dropdown isOpen={dropdownOpen4} toggle={toggle4} className="">
                        <DropdownToggle caret className='dropdown-filter'>
                            Filter
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem header>Sort By</DropdownItem>
                            <DropdownItem>Price: <BsArrowDownCircleFill/></DropdownItem>
                            <DropdownItem>Price: <BsFillArrowUpCircleFill/></DropdownItem>
                            <DropdownItem>Name: <FcAlphabeticalSortingAz/></DropdownItem>
                            <DropdownItem>Name: <FcAlphabeticalSortingZa/></DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem header>Cup Type</DropdownItem>
                            <DropdownItem>Classic</DropdownItem>
                            <DropdownItem>Tall</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
            </div>

            <div className='row d-none d-sm-flex justify-content-center mx-5'>
                <div className="col-12 pt-2 px-3">
                    <hr/>
                </div>
            </div>
        </div>
    );
}

export default Sort;