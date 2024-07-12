import { useLoaderData } from "react-router-dom";

const Details = () => {
    const detail = useLoaderData()
    console.log(detail)

    return (
        <div>
            this is details page
            id {detail._id}
        </div>
    );
};

export default Details;