import RestaurantCard from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {

    const [listOfRestaurants, setlistOfRestaurant] = useState([]);
    const [filteredRestaurant, setfilteredRestaurant] = useState([]);

    const [searchText, setSearchText] = useState("");

    console.log(listOfRestaurants);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4400802&lng=78.3489168&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();   
    
        console.log(json);
        setlistOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);


    };    

    const OnlineStatus = useOnlineStatus();

    if(OnlineStatus === false) return <h1>
        You are Offline. Please Check your Internet Connection!!
        </h1>

    const { loggedInUser, setUserName } = useContext(UserContext);

    console.log(loggedInUser);
    console.log(setUserName);
  
    return listOfRestaurants == 0 ? (<Shimmer />): (
        <div className="body">
            <div className = "filter flex">
                <div className = "search m-4 p-4 flex items-center rounded-lg" >
                    <input 
                    type = "text" 
                    data-testid = "searchInput"
                    className = "border border-solid border-black rounded-lg" 
                    value = {searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value);
                    }}/>
                    <button className="px-4 py-1 m-4 bg-green-200 rounded-lg"
                    onClick = {() => {
                    const filteredRestaurant = listOfRestaurants.filter(
                        (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                    );
                    setfilteredRestaurant(filteredRestaurant);

                    }}>
                    Search
                    </button>
                </div>

                 <div className = "search m-4 p-4 flex items-center">
                 <button className = "px-4 py-1 bg-gray-200 rounded-lg" 
                onClick={() => 
                    {
                        const filteredList = listOfRestaurants.filter(
                            (res) => res.info.avgRating > 4
                        );
                        setfilteredRestaurant(filteredList);
                    }}
                    >                
                        Top Rated Restaurants
                    </button>
                 </div> 

                 <div className = "search m-4 p-4 flex items-center">
                    <label>User Name : </label>
                    <input 
                    className= "border border-black p-1 my-1 "
                    value = {loggedInUser}
                    onChange = {(e) => {setUserName(e.target.value)}} 
                    />
                 </div>  

                </div>
            <div className = "flex flex-wrap">
                {
                    filteredRestaurant.map((restaurant) => (
                    <Link 
                    key = {restaurant.info.id} 
                    to = {"/restaurants/"+ restaurant.info.id}>

                    <RestaurantCard resData = {restaurant} />
                    </Link>
                    ))
                }                
            </div>
        </div>
    );
};

export default Body;

