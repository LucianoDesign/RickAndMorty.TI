import styles from "./Nav.module.css";
import SearchBar from "../searchBar/searchBar"


export default function Nav(props) {
    const {onSearch} = props
    return(
        <div>
         <SearchBar onSearch = {onSearch}/>
        </div>
    )
}