import useUserData from "../../Hook/useUserData"

const ManageUser = () =>{
    const AllUser= useUserData([])
    console.log(AllUser)
    return(
        <div>
            <p>{AllUser.index}</p>
            ddcd

        </div>
    )
}
export default ManageUser