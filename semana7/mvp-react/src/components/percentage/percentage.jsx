import "../percentage/percentage.scss"

export const Percentage = (props)=>{
    const{
        label,
        percentage,
    } = props
    return (
        <div className="percentage">
            <label>{label}</label>
            <div className="percentage__bar">
                <div style={{width: percentage}}>{percentage}</div>
            </div>
        </div>
    )
}