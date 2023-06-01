const SelectComponent=(props)=>{

    const handleChange=(evt)=>{
        // the selected value from option
        // will be passed to the onSelectionChanged() method
        props.onSelectionChanged(evt.target.value);
    };


    // check for data validity
    if( props.dataSource === undefined || props.dataSource.length === 0){
        return (
            <div className="danger">
                <strong>
                    No data to show
                </strong>
            </div>
        );
    }

    return(
        <div className="form-group">
            <select className="form-control" onChange={handleChange}
              value={props.bindableProperty}
            >
                <option>Select your choice</option>
                {
                    props.dataSource.map((record,index)=>(
                        <option key={index} value={record}>{record}</option>
                    ))
                }
            </select>
        </div>
    );
};

export default SelectComponent;