import React, {useState} from "react";
import sortImg from '../images/sort.svg'

function TableHeadCell(props) {

    const [isAsc, setAsc] = useState(true);

    const onClick = () => {
        props.sortBy(props.text.toLowerCase(), isAsc);
        setAsc(!isAsc);
    }

    const showTableHeadCell = () => {
        if (['#', 'Name', 'Username', 'Email', 'Phone', 'Website'].includes(props.text)) {
            return <th onClick={() => onClick()} scope="col" rowSpan="2"
                       className="text-center align-middle mw-80px">{props.text} <img src={sortImg} alt={'sort by'}/>
            </th>;
        } else if (props.text === 'Address') {
            return <th scope="col" rowSpan="1" colSpan="4" className="text-center align-middle">{props.text}</th>;
        } else if (props.text === 'Company') {
            return <th scope="col" rowSpan="1" colSpan="3" className="text-center align-middle">{props.text}</th>;
        } else {
            return <th onClick={() => onClick()} className="text-center align-middle">{props.text} <img src={sortImg}
                                                                                                        alt={'sort by'}/>
            </th>;
        }
    };

    return (
        <>
            {showTableHeadCell()}
        </>
    );
};

export default TableHeadCell;