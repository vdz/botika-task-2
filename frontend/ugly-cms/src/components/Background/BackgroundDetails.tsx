import {useParams} from "react-router-dom";
import {Background} from "../../services/api-client";

export function BackgroundDetails() {
    const {id} = useParams()

    const models = JSON.parse(sessionStorage.getItem("backgrounds")!) as Background[]
    const background = models.find(m => m.id === id) as Background


    return (
        <div style={{
            flex: 1, justifyContent: 'center', alignItems: 'center', alignSelf: 'stretch',
            gap: 12, flexDirection: 'column'
        }}>
            <h1>{background.name}</h1>
            <img style={{width: 400, height: 600}} src={background.avatar}/>
            <div style={{gap: 12, display: 'flex'}}>
                <img style={{width: 200, height: 300}} src={background.preview_images[0]}/>
                <img style={{width: 200, height: 300}} src={background.preview_images[1]}/>
                <img style={{width: 200, height: 300}} src={background.preview_images[2]}/>
            </div>

            <h2>Info</h2>
            <h3>{background.category}</h3>
        </div>
    );
}
