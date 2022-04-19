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

    return (
        <div className="container-fluid mt-4 py-5">
            <div className='row d-flex justify-content-around'>
                <div className="col-4 text-right">
                    <Dropdown isOpen={dropdownOpen1} toggle={toggle1}>
                        <DropdownToggle caret>
                            Dropdown
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem header>Header</DropdownItem>
                            <DropdownItem>Some Action</DropdownItem>
                            <DropdownItem text>Dropdown Item Text</DropdownItem>
                            <DropdownItem disabled>Action (disabled)</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>Foo Action</DropdownItem>
                            <DropdownItem>Bar Action</DropdownItem>
                            <DropdownItem>Quo Action</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
                <div className="col-4 text-center">
                    <Dropdown isOpen={dropdownOpen2} toggle={toggle2}>
                        <DropdownToggle caret>
                            Dropdown
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem header>Header</DropdownItem>
                            <DropdownItem>Some Action</DropdownItem>
                            <DropdownItem text>Dropdown Item Text</DropdownItem>
                            <DropdownItem disabled>Action (disabled)</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>Foo Action</DropdownItem>
                            <DropdownItem>Bar Action</DropdownItem>
                            <DropdownItem>Quo Action</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
                <div className="col-4 text-left">
                    <Dropdown isOpen={dropdownOpen3} toggle={toggle3}>
                        <DropdownToggle caret>
                            Dropdown
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem header>Header</DropdownItem>
                            <DropdownItem>Some Action</DropdownItem>
                            <DropdownItem text>Dropdown Item Text</DropdownItem>
                            <DropdownItem disabled>Action (disabled)</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>Foo Action</DropdownItem>
                            <DropdownItem>Bar Action</DropdownItem>
                            <DropdownItem>Quo Action</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
            </div>
        </div>
    );
}

export default Sort;