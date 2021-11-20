const InputCustom = ({ placeholderText, title, height, onChange, value }) => {
    return (
        <div className="inputCustom">
            <p>{title}</p>
            <input type="text" onChange={onChange} value={value} placeholder={placeholderText} className="inputCustom__input" style={{height: `${height}rem`}}/>
        </div>
    )
}

export default InputCustom
