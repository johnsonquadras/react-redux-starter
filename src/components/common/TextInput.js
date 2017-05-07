import React, { PropTypes } from 'react';

const TextInput = ({name, label, onChange, placeHolder, value, error}) => {

    let wrapperClass = "form-group";
    if (error && error.length > 0) {
        wrapperClass += " " + 'has-error';
    }

    function getError() {
        if (error) {
            return <div className="alert alert-danger"> {error.title} </div>;
        }

        return null;
    }

    return (
        <div className={wrapperClass}>
            <label htmlFor={name}> {label} </label>
            <div className="field">
                <input type="text" name={name} className="form-control" placeHolder={placeHolder}
                    value={value} onChange={onChange} />
                {getError()}
            </div>
        </div>
    );
};

TextInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeHolder: PropTypes.string,
    value: PropTypes.string.isRequired,
    error: PropTypes.string.isRequired
};


export default TextInput;