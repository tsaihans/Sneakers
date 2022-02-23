import React from "react";
import { Select } from 'antd';



const SizeSelector = ({
    setSize
}) => {
    const { Option } = Select;

    const handleChange = (value) => {
        setSize(value);
    };

    return (
        <div>
            <Select 
            defaultValue="UK7" 
            style={{ width: 150 }} 
            onChange={handleChange}
            >
                <Option value="UK5">UK5</Option>
                <Option value="UK6">UK6</Option>
                <Option value="UK7">UK7</Option>
                <Option value="UK8">UK8</Option>
                <Option value="UK9">UK9</Option>
                <Option value="UK10">UK10</Option>
            </Select>
        </div>
    );
};

export default SizeSelector;