import {useEffect, useState} from "react";
import {API_URL} from "../../api.ts";
import {listPoses, Pose} from "../../services/api-client";

export function PoseList() {
    const [poses, setPoses] = useState<Pose[]>();
    useEffect(() => {
        (async () => {
            const poses = await listPoses({
                baseURL: API_URL
            });

            setPoses(poses.data);
            sessionStorage.setItem('poses', JSON.stringify(poses.data));
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
            {poses?.toSorted(
                (a, b) => a.gender.localeCompare(b.gender)
            ).map((pose) => (
                <a href={`/products/${pose.id}`}>
                    <div key={pose.id} style={{width: 300}}>
                        <img
                            src={pose.image}
                            alt={pose.id}
                            style={{width: "100%", height: 400}}
                        />
                        <div>{pose.gender}</div>
                    </div>
                </a>
            ))}

            <a href="poses/create">Create New</a>
        </div>
    );
}
