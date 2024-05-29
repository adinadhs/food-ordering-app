import UserContext from "../utils/UserContext";
import { CDN_URL } from "../utils/constants";
import { useContext } from "react";


const RestaurantCard = (props) => {
    const {resData} = props;
    const {loggedInUser} = useContext(UserContext);

    console.log(resData);
    
    const {
        name, 
        locality, 
        areaName, 
        cuisines, 
        costForTwo,
        avgRating,
        cloudinaryImageId} = resData?.info;
    
        return(
            <div 
            data-testid = "resCard"
            className = "m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-300">
                <img 
                className = "rounded-lg"
                src = { CDN_URL + cloudinaryImageId}
    
                alt = "res-logo"></img>
                <h3 className="font-bold py-4 text-lg">{name}</h3>
                <h4>{locality}</h4>
                <h4>{areaName}</h4>
                <h4>{cuisines.join(", ")}</h4>
                <h4>{costForTwo}</h4>
                <h4>{avgRating} stars</h4>
                <h4>User: {loggedInUser} </h4>
            </div>    )
    };

    export default RestaurantCard;