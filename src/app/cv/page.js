
import React, {Suspense} from "react";
import CVContent from "../Components/CVContent";

export const runtime = "nodejs";

export default function Home() {

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <CVContent />
        </Suspense>
    )
}
