import React from "react";
import { BsAlarm} from 'react-icons/bs';
import {FaRegLightbulb} from 'react-icons/fa';
import {FaThermometerHalf} from 'react-icons/fa';


export const list = [
    {
        id: 1,
        category_name: 'Alarm',
        logo:   <BsAlarm size={24}/>,
        check_box_parameter_first: 'EV',
        check_box_parameter_second: 'DIŞ',
        delayCount: 10,
    },
    {
        id: 2,
        category_name: "2",
        delayCount: 20,
        logo:   <FaRegLightbulb size={24} />,
        check_box_parameter_first: 'I',
        check_box_parameter_second: 'O',
        selectInput: <select>
        <option>I</option>
        <option>0</option>
        </select>
    },
    {
        id: 3,
        delayCount: 30,
        category_name: 'panel kombi',
        logo:   <FaThermometerHalf size={24}/>,
        check_box_parameter_first: '^',
        check_box_parameter_second: '&',
        check_box_parameter_third: '*',
        negative_button: '-',
        positive_button: '+',
        count: 0,
    }
];