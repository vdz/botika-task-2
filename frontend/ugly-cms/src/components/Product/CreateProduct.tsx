import {useState} from "react";
import {API_URL} from "../../api.ts";
import {createProduct} from "../../services/api-client";

export function CreateProduct() {

    const [previewImage, setPreviewImage] = useState<File>();
    const [image1, setImage1] = useState<File>();
    const [image2, setImage2] = useState<File>();
    const [image3, setImage3] = useState<File>();
    const [name, setName] = useState<string>();

    const create = async () => {
        const created = await createProduct({
            baseURL: API_URL,
            body: {
                name: name!,
                images: [image1!, image2!, image3!],
                preview_image: previewImage!
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
                <label htmlFor='avatar'>Preview image</label>
                <input type='file' accept="image/*" id='avatar' onChange={e => setPreviewImage(e.target.files![0])}/>
            </div>

            <div style={{gap: 12, display: 'flex'}}>
                <div style={{gap: 8, display: 'flex'}}>
                    <label htmlFor='avatar'>Image 1</label>
                    <input type='file' id='preview1' onChange={e => setImage1(e.target.files![1]!)}/>
                </div>

                <div style={{gap: 8, display: 'flex'}}>
                    <label htmlFor='avatar'>Image 2</label>
                    <input type='file' id='preview2' onChange={e => setImage2(e.target.files![1]!)}/>
                </div>

                <div style={{gap: 8, display: 'flex'}}>
                    <label htmlFor='avatar'>Image 3</label>
                    <input type='file' id='preview3' onChange={e => setImage3(e.target.files![1]!)}/>
                </div>
            </div>

            <button onClick={() => create()}>Create</button>
        </div>
    );
}
