function Status(props){
    console.log("rendering status: "  + props.title)
    console.log("props:")
    console.log(props)
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
    let bullet_points = [{'key': 'ping', 'value':'100ms'}, {'key':'happy_days', 'value': 'True'}]

    props.statuses.forEach(status => {
        console.log(status.title)
        statuses.push(<Status title={status.title} bullet_points={bullet_points}></Status>)
    });

    return(
        <div className="Statuses">
            {statuses}
        </div>
    );
}


export default Statuses;