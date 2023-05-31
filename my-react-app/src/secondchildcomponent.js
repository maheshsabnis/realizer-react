const SecondChildComponent=(props)=>{
    return(
        <div className="container">
            <strong>
                {
                    props.information
                }
            </strong>
        </div>
    );
};

export default SecondChildComponent;