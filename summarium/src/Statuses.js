import React, { useState, useEffect } from 'react';

function Status(props){
    const refetch_interval = 1000

    function update_data(url, data){
        console.log("fetching data from", url)
        fetch(url).then(response => response.json())
        .then(new_data => {
            if(JSON.stringify(new_data) !== JSON.stringify(data)){
                setData(new_data);
                console.log("old data", data)
                console.log("fetched data: ",new_data)
            }
        });      
    }

    const [data, setData] = useState();
    const data_url = props.config.url;
    
    useEffect( () =>{
        const interval = setInterval(() => {
            update_data(data_url, data)
        }, refetch_interval);
    return () => clearInterval(interval);
  }, []);

        

    console.log("rendering status: " + props.config.name + "props: ", props)

    return(
        <div className="Status">
            <h1>{props.config.name}</h1>
        </div>
    );
}

function Statuses(props){
    let statuses = []
    props.status_configs.forEach(status_config => {
            statuses.push(<Status config={status_config}></Status>)
        });


    return(
        <div className="Statuses">
            {statuses}
        </div>
    );
}


export default Statuses;