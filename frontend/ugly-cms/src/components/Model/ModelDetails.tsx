import {useParams} from "react-router-dom";
import {Model} from "../../services/api-client";

export function ModelDetails() {
    const {id} = useParams()

    const models = JSON.parse(sessionStorage.getItem("models")!) as Model[]
    const model = models.find(m => m.id === id) as Model


    return (
        <div style={{
            flex: 1, justifyContent: 'center', alignItems: 'center', alignSelf: 'stretch',
            gap: 12, flexDirection: 'column'
        }}>
            <h1>{model.name}</h1>
            <img style={{width: 400, height: 600}} src={model.avatar}/>
            <div style={{gap: 12, display: 'flex'}}>
                <img style={{width: 200, height: 300}} src={model.preview_images[0]}/>
                <img style={{width: 200, height: 300}} src={model.preview_images[1]}/>
                <img style={{width: 200, height: 300}} src={model.preview_images[2]}/>
            </div>

            <h2>Info</h2>
            <h3>{model.gender}</h3>
            <h3>{model.age_group}</h3>
        </div>
    );
}
