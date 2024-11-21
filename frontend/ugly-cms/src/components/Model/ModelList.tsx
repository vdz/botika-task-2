import {useEffect, useState} from "react";
import {API_URL} from "../../api.ts";
import {listModels, Model} from "../../services/api-client";

export function ModelList() {
    const [models, setModels] = useState<Model[]>();
    
    useEffect(() => {
        (async () => {
            const models = await listModels({
                baseURL: API_URL
            });

            setModels(models.data);
            sessionStorage.setItem('models', JSON.stringify(models.data));
        })();
    }, []);

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                gap: 12,
            }}
        >
            {models?.map((model) => (
                <a href={`/models/${model.id}`}>
                    <div key={model.id} style={{width: 300}}>
                        <img
                            src={model.avatar}
                            alt={model.name}
                            style={{width: "100%", height: 400}}
                        />
                        <div>{model.name}</div>
                    </div>
                </a>
            ))}

            <a href="models/create">Create New</a>
        </div>
    );
}
