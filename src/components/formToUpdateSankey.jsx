import React, { useState } from "react";

function FormToUpdateSankey(props) {
    const { addDataToSankeySeries } = props;
    const [inputField, setInputField] = useState({
        from: '',
        to: '',
        weight: ''
    })

    const inputsHandler = (e) => {
        const { name, value } = e.target;
        setInputField((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }

    const submitButton = () => {
        addDataToSankeySeries(inputField);
    }

    return (
        <div>
            <input
                type="text"
                name="from"
                onChange={inputsHandler}
                placeholder="From Field"
                value={inputField.from} />

            <br />

            <input
                type="text"
                name="to"
                onChange={inputsHandler}
                placeholder="To Field"
                value={inputField.to} />

            <br />

            <input
                type="number"
                name="weight"
                onChange={inputsHandler}
                placeholder="weight"
                value={inputField.weight} />

            <br />

            <button onClick={submitButton}>Add Now</button>
        </div>
    )
}

export default FormToUpdateSankey;