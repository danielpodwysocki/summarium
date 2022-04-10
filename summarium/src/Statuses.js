function Status(props){
    console.log("rendering status: " + props.title + "props: ", props)
    return(
        <div className="Status">
            <h1>{props.title}</h1>
            <ul>
            {
                props.bullet_points.map(
                    kv_pair => 
                   <li key={kv_pair['key']}> {kv_pair['key']}: {kv_pair['value']} </li>
                )
            }

            </ul>
        </div>
    );
}

function Statuses(props){
    let statuses = []

    props.statuses.forEach(status => {
        statuses.push(<Status title={status.title} bullet_points={status.bullet_points}></Status>)
    });

    return(
        <div className="Statuses">
            {statuses}
        </div>
    );
}


export default Statuses;