import { connect } from "react-redux"
import Cards from "./Cards";

function favorites({favorites}){
    return (<div>
        <Cards characters={favorites}/>
    </div>
    );
}

const mapStateToProps = (state) => {
    return{
        favorites: state.myFavorites
    }
}

export default connect(mapStateToProps, null) (favorites);