import React, { useState } from 'react';
// import { AiFillRightSquare } from 'react-icons/ai';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

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
        <div className="container-fluid mt-4 py-5">
            <div className='row d-none d-sm-flex justify-content-between'>
                <div className="col-4 text-right">

                    <Dropdown isOpen={dropdownOpen1} toggle={toggle1} className="d-none d-sm-block">
                        <DropdownToggle caret className='dropdown-filter' >
                            Personality Type
                        </DropdownToggle>
                        <DropdownMenu modifiers={{
                            setMaxHeight: {
                                enabled: true,
                                order: 890,
                                fn: (data) => {
                                return {
                                    ...data,
                                    styles: {
                                    ...data.styles,
                                    overflow: 'auto',
                                    maxHeight: '500px',
                                    },
                                };
                                },
                            },
                            }}>
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
                </div>
                <div className="col-4 text-center">
                    <Dropdown isOpen={dropdownOpen2} toggle={toggle2} className="d-none d-sm-block">
                        <DropdownToggle caret className='dropdown-filter'>
                            Cup Type
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem>Classic</DropdownItem>
                            <DropdownItem>Tall</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
                <div className="col-4 text-left">
                    <Dropdown isOpen={dropdownOpen3} toggle={toggle3} className="d-none d-sm-block">
                        <DropdownToggle caret className='dropdown-filter'>
                            Sort By
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem>Price - Low to High</DropdownItem>
                            <DropdownItem>Price - High to Low</DropdownItem>
                            <DropdownItem>Name - A-Z</DropdownItem>
                            <DropdownItem>Name - Z-A</DropdownItem>
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
                            <DropdownItem>Price - Low to High</DropdownItem>
                            <DropdownItem>Price - High to Low</DropdownItem>
                            <DropdownItem>Name - A-Z</DropdownItem>
                            <DropdownItem>Name - Z-A</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem header>Cup Type</DropdownItem>
                            <DropdownItem>Classic</DropdownItem>
                            <DropdownItem>Tall</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
            </div>
        </div>
    );
}

export default Sort;