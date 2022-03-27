function Status(props){
    return(
        <div className="Status">
            <h1>{props.title}</h1>
            <ul>
            {props.bullet_points.map(
                kv_pair => 
                <li key={kv_pair['key']}> {kv_pair['key']}: {kv_pair['value']} </li>)
            }

            </ul>
        </div>
    );
}

function Statuses(){
    let bullet_points = [{'key': 'ping', 'value':'100ms'}, {'key':'happy_days', 'value': 'True'}]
    return(
        <div className="Statuses">
            <Status title="my test status" bullet_points={bullet_points}></Status>
        </div>
    );
}


export default Statuses;