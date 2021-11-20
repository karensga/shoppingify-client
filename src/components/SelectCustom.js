const SelectCustom = ({ title, placeholderText, options, onChange, value }) => {
    return (
        <div className="selectCustom">
            <p>{title}</p>
            <select className="selectCustom__select" onChange={onChange} value={value}>
                <option hidden selected className="selectCustom__select__placeholder">{placeholderText}</option> 
                {
                    options?.map(option => <option value={option._id} key={option.name}>{option.name}</option>)
                }
            </select>
        </div>
    )
}

export default SelectCustom
