import React, { PropTypes } from 'react';

const SelectInput = ({name, label, onChange, defaultOption, value, error, options}) => {

    let wrapperClass = "form-group";
    if (error && error.length > 0) {
        wrapperClass += " " + 'has-error';
    }

    return (
        <div className={wrapperClass}>
            <label htmlFor={name}>{label}</label>
            <div className="field">
                <select type="text" name={name} className="form-control"
                    value={value} onChange={onChange} >
                    <option value="">{defaultOption}</option>
                    {options.map(function(option) {
                        return <option key={option.text} value={option.value}> {option.text} </option>;
                    })}
                </select>
                {error && <div className="alert alert-danger"> {error} </div>}
            </div>
        </div>
    );
};

SelectInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    defaultOption: PropTypes.string,
    value: PropTypes.string.isRequired,
    error: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.object)
};
export default SelectInput;