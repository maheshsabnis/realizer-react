import { Button } from "bootstrap";

const DataGridComponent=(props)=>{

    const onEditClick=(rec)=>{
        // EMit the selected record to parent
         props.onRowSelection(rec);
    };


    if(props.dataSource === undefined || props.dataSource.length === 0) {
        return(
            <div className="alert alert-danger">
                <strong>No records</strong>
            </div>
        );
    }

    // read zeroth index to extract keys from it
    
    let headers = Object.keys(props.dataSource[0]);

    if(headers.length === 0) {
        return(
            <div className="alert alert-danger">
                <strong>Column Headers are not avaialbel</strong>
            </div>
        );
    }

    return (

        <table className='table table-bordered table-striped'>
                <thead>
                    <tr>
                        {
                            headers.map((col,index)=>(
                                <th key={index}>{col}</th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        props.dataSource.map((record,idx)=>(
                            <tr key={idx}>
                                 {
                                    headers.map((col,i)=>(
                                        <td key={i}>{record[col]}</td>
                                        
                                    ))
                                 }
                                 <td hidden={!props.CanEdit}>
                                    <button className="btn btn-warning"
                                     onClick={()=>onEditClick(record)}> Edit</button>
                                 </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
    );

};

export default DataGridComponent;