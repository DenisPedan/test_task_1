import React from 'react';

const Select = ({options, onChange, value}) => {
    return (
        <select value={value} onChange={e => onChange(e.target.value)}>
            <option value=''>Выберите животное</option>
            {options.map(option =>
                <option key={option.id} value={option.title}>{option.title}</option>
            )}
        </select>
    );
};

export default Select;