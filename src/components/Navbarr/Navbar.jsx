
import { useEffect } from "react";
import useAppContext from "../../store/AppContext";

const Navbar = () => {
    const {store, actions} = useAppContext();

    useEffect(() => {
        console.log(store.ejemplo)
    }, [store.ejemplo])
    
    return(
        <div>
            <p>{store.ejemplo}</p>
           <button onClick={() => actions.setEjemplo("chau!")}>Click!</button> 
           
        </div>
    )
}

export default Navbar;