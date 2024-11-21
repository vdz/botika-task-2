import {useParams} from "react-router-dom";
import {Pose} from "../../services/api-client";

export function PoseDetails() {
    const {id} = useParams()

    const poses = JSON.parse(sessionStorage.getItem("poses")!) as Pose[]
    const pose = poses.find(m => m.id === id) as Pose


    return (
        <div style={{
            flex: 1, justifyContent: 'center', alignItems: 'center', alignSelf: 'stretch',
            gap: 12, flexDirection: 'column'
        }}>
            <h1>{pose.id}</h1>
            <img style={{width: 400, height: 600}} src={pose.image}/>

            <h2>Info</h2>
            <h3>{pose.gender}</h3>
        </div>
    );
}
