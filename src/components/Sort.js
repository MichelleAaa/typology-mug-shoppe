import React, { useState } from 'react';
// import { AiFillRightSquare } from 'react-icons/ai';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { BsArrowDownCircleFill, BsFillArrowUpCircleFill } from 'react-icons/bs';
import { FcAlphabeticalSortingAz, FcAlphabeticalSortingZa } from 'react-icons/fc';
import { FaTrash } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import { GiSplitCross } from 'react-icons/gi';
import { HiOutlineX } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux';
import { filterProducts, renderFilter, sortProducts, removeSingleFilter, removeAllFilters } from '../redux/productsSlice';

const Sort = () => {
    const [dropdownOpen1, setDropdownOpen1] = useState(false);
    const toggle1 = () => setDropdownOpen1(prevState => !prevState);
    const [dropdownOpen2, setDropdownOpen2] = useState(false);
    const toggle2 = () => setDropdownOpen2(prevState => !prevState);
    const [dropdownOpen3, setDropdownOpen3] = useState(false);
    const toggle3 = () => setDropdownOpen3(prevState => !prevState);
    const [dropdownOpen4, setDropdownOpen4] = useState(false);
    const toggle4 = () => setDropdownOpen4(prevState => !prevState);

    let filters = useSelector(state => state.products.totalFilters);
    let dispatch = useDispatch();

    // const HandleFilterPType = (product) => {
    //     dispatch(filterPType(product));
    // };
    // const HandleFilterCupType = (product) => {
    //     dispatch(filterCupType(product));
    // };


    const HandleSort = (filterType) => {
        dispatch(sortProducts(filterType));
    }

    const HandleFilterProducts = (filter) => {
        dispatch(filterProducts(filter));
        dispatch(renderFilter());
    };

    // let dispatch = useDispatch();
    // const HandleRemoveFilter = (filter) => {
    //     dispatch(removeSingleFilter(filter));
    //     dispatch(renderFilter());
    // };

    const HandleReset = () => {
        dispatch(removeAllFilters());
    };

    return (
        <div className="container-fluid mt-1 pt-4 pb-5">
            <div className='row justify-content-center mx-5'>
                <div className="col-12 d-flex justify-content-end filter-list">
                    <div className='d-flex flex-row flex-wrap justify-content-center my-auto font-italic'>{filters.map(filter => <ActiveFilters filterType={filter}/>)}</div>
                        {filters.length !== 0 ? 
                        <>
                        <div className='d-flex flex-row justify-content-center align-items-center'>
                            <p className='text-nowrap my-auto'>- Remove All</p>
                            <button type='button' className='amount-btn my-0 py-0' onClick={() => HandleReset()}><HiOutlineX size='29px' color='red' />
                            </button>
                            </div>
                        </> : ''}
                    </div>
                </div>
            <div className='row d-none d-sm-flex justify-content-center mx-5'>
                {/* <div className="col-12 d-flex justify-content-end filter-list">
                    <p className='my-auto font-italic'>{filters.map(filter => <ActiveFilters filterType={filter}/>)}</p>
                        {filters.length !== 0 ? <><span>- Remove All</span><button type='button' className='amount-btn' onClick={() => HandleReset()}><ImCross size='18px' color='red' /></button></> : ''}
                        
                </div> */}
                <div className="col-12 d-flex justify-content-end sort-wrapper">
                    <Dropdown direction='left' isOpen={dropdownOpen1} toggle={toggle1} className="d-none d-sm-block">
                        <DropdownToggle caret className='dropdown-filter' >
                            Personality Type
                        </DropdownToggle>
                        <DropdownMenu className='drop-menu'>
                            <DropdownItem onClick={() => HandleFilterProducts('ENFJ')}>ENFJ</DropdownItem>
                            <DropdownItem onClick={() => HandleFilterProducts('ENFP')}>ENFP</DropdownItem>
                            <DropdownItem onClick={() => HandleFilterProducts('ENTJ')}>ENTJ</DropdownItem>
                            <DropdownItem onClick={() => HandleFilterProducts('ENTP')}>ENTP</DropdownItem>
                            <DropdownItem onClick={() => HandleFilterProducts('ESFJ')}>ESFJ</DropdownItem>
                            <DropdownItem onClick={() => HandleFilterProducts('ESFP')}>ESFP</DropdownItem>
                            <DropdownItem onClick={() => HandleFilterProducts('ESTJ')}>ESTJ</DropdownItem>
                            <DropdownItem onClick={() => HandleFilterProducts('ESTP')}>ESTP</DropdownItem>
                            <DropdownItem onClick={() => HandleFilterProducts('INFJ')}>INFJ</DropdownItem>
                            <DropdownItem onClick={() => HandleFilterProducts('INFP')}>INFP</DropdownItem>
                            <DropdownItem onClick={() => HandleFilterProducts('INTJ')}>INTJ</DropdownItem>
                            <DropdownItem onClick={() => HandleFilterProducts('INTP')}>INTP</DropdownItem>
                            <DropdownItem onClick={() => HandleFilterProducts('ISFJ')}>ISFJ</DropdownItem>
                            <DropdownItem onClick={() => HandleFilterProducts('ISFP')}>ISFP</DropdownItem>
                            <DropdownItem onClick={() => HandleFilterProducts('ISTP')}>ISTP</DropdownItem>
                            <DropdownItem onClick={() => HandleFilterProducts('ISTJ')}>ISTJ</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                {/* </div>
                <div className="col-4 text-center"> */}
                    <Dropdown direction='left' isOpen={dropdownOpen2} toggle={toggle2} className="d-none d-sm-block">
                        <DropdownToggle caret className='dropdown-filter'>
                            Cup Type
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem onClick={() => HandleFilterProducts('Classic')}>Classic</DropdownItem>
                            <DropdownItem onClick={() => HandleFilterProducts('Tall')}>Tall</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                {/* </div>
                <div className="col-4 text-right"> */}
                    <Dropdown direction='left' isOpen={dropdownOpen3} toggle={toggle3} className="d-none d-sm-block">
                        <DropdownToggle caret className='dropdown-filter'>
                            Sort By
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem onClick={() => HandleSort('PriceHightoLow')}>Price: <BsArrowDownCircleFill/></DropdownItem>
                            <DropdownItem onClick={() => HandleSort('PriceLowtoHigh')}>Price: <BsFillArrowUpCircleFill/></DropdownItem>
                            <DropdownItem onClick={() => HandleSort('NameAtoZ')}>Name: <FcAlphabeticalSortingAz/></DropdownItem>
                            <DropdownItem onClick={() => HandleSort('NameZtoA')}>Name: <FcAlphabeticalSortingZa/></DropdownItem>
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
                            <DropdownItem onClick={() => HandleSort('PriceHightoLow')}>Price: <BsArrowDownCircleFill/></DropdownItem>
                            <DropdownItem onClick={() => HandleSort('PriceLowtoHigh')}>Price: <BsFillArrowUpCircleFill/></DropdownItem>
                            <DropdownItem onClick={() => HandleSort('NameAtoZ')}>Name: <FcAlphabeticalSortingAz/></DropdownItem>
                            <DropdownItem onClick={() => HandleSort('NameZtoA')}>Name: <FcAlphabeticalSortingZa/></DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem header>Cup Type</DropdownItem>
                            <DropdownItem onClick={() => HandleFilterProducts('Classic')}>Classic</DropdownItem>
                            <DropdownItem onClick={() => HandleFilterProducts('Tall')}>Tall</DropdownItem>
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

const ActiveFilters = (filterType) => {

    let dispatch = useDispatch();

    const HandleRemoveFilter = (filter) => {
        dispatch(removeSingleFilter(filter));
        dispatch(renderFilter());
    };

    console.log(filterType);
    return (
        <div className='d-flex flex-row justify-content-center'>
            <p className='my-auto'> 
            {filterType.filterType}</p>
            <button type='button' className='amount-btn' onClick={() => HandleRemoveFilter(filterType.filterType)}><HiOutlineX size='20px' color='gray' /></button>
            {/* <p className='my-auto'> - </p> */}
        </div>
    );
}

export default Sort;