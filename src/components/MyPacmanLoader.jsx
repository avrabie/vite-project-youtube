import {PacmanLoader} from "react-spinners";

const myCssOverride = ({display:"block", margin:"100px auto"});
// eslint-disable-next-line react/prop-types
const MyPacmanLoader = ({color="#f5d81f", cssOverride= myCssOverride}) => {

    return (
        <PacmanLoader color={color} cssOverride={cssOverride}/>
    )
}

export default MyPacmanLoader;