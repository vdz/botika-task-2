import {useState} from "react";
import {API_URL} from "../../api.ts";
import {createPose, gender} from "../../services/api-client";

export function CreatePose() {

    const [image, setImage] = useState<File>();
    const [gender, setGender] = useState<gender>()


    const create = async () => {
        const created = await createPose({
            baseURL: API_URL,
            body: {
                image: image!,
                gender: gender!
            }
        })
    }

    return (
        <div style={{
            display: 'flex',
            flex: 1, justifyContent: 'center', alignItems: 'center', alignSelf: 'stretch',
            gap: 12, flexDirection: 'column'
        }}>
            <div style={{gap: 8, display: 'flex'}}>
                <label htmlFor='image'>Image</label>
                <input type='file' accept="image/*" id='image' onChange={e => setImage(e.target.files![0])}/>
            </div>

            <h2>Info</h2>
            <select onChange={e => setGender(e.target.value as gender)}>
                <option value="MALE">Male</option>
                <option value="FEMALE">Female</option>
            </select>

            <button onClick={() => create()}>Create</button>
        </div>
    );
}
