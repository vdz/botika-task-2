import {useState} from "react";
import {API_URL} from "../../api.ts";
import {age_group, createModel, gender} from "../../services/api-client";

export function CreateModel() {

    const [avatar, setAvatar] = useState<File>();
    const [preview1, setPreview1] = useState<File>();
    const [preview2, setPreview2] = useState<File>();
    const [preview3, setPreview3] = useState<File>();
    const [name, setName] = useState<string>();
    const [gender, setGender] = useState<gender>()
    const [ageGroup, setAgeGroup] = useState<age_group>()


    const create = async () => {
        const created = await createModel({
            baseURL: API_URL,
            body: {
                name: name!,
                avatar: avatar!,
                preview_images: [preview1!, preview2!, preview3!],
                gender: gender!, age_group: ageGroup!,
            }
        })
    }

    return (
        <div style={{
            display: 'flex',
            flex: 1, justifyContent: 'center', alignItems: 'center', alignSelf: 'stretch',
            gap: 12, flexDirection: 'column'
        }}>
            <input type='text' placeholder='Name' onChange={e => setName(e.target.value)}/>

            <div style={{gap: 8, display: 'flex'}}>
                <label htmlFor='avatar'>Avatar</label>
                <input type='file' accept="image/*" id='avatar' onChange={e => setAvatar(e.target.files![0])}/>
            </div>

            <div style={{gap: 12, display: 'flex'}}>
                <div style={{gap: 8, display: 'flex'}}>
                    <label htmlFor='avatar'>Preview 1</label>
                    <input type='file' id='preview1' onChange={e => setPreview1(e.target.files![1]!)}/>
                </div>

                <div style={{gap: 8, display: 'flex'}}>
                    <label htmlFor='avatar'>Preview 2</label>
                    <input type='file' id='preview2' onChange={e => setPreview2(e.target.files![1]!)}/>
                </div>

                <div style={{gap: 8, display: 'flex'}}>
                    <label htmlFor='avatar'>Preview 3</label>
                    <input type='file' id='preview3' onChange={e => setPreview3(e.target.files![1]!)}/>
                </div>
            </div>

            <h2>Info</h2>

            <select onChange={e => setGender(e.target.value as gender)}>
                <option value="MALE">Male</option>
                <option value="FEMALE">Female</option>
            </select>

            <select onChange={e => setAgeGroup(e.target.value as age_group)}>
                <option value='TWENTIES'>20s</option>
                <option value='THIRTIES'>30s</option>
                <option value='FORTIES'>40s</option>
                <option value='FIFTIES'>50s</option>
                <option value='SIXTIES'>60s</option>
                <option value='SEVENTIES'>70s</option>
                <option value='EIGHTIES'>80s</option>
            </select>

            <button onClick={() => create()}>Create</button>
        </div>
    );
}
