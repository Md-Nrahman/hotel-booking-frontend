import useFetch from "../../hooks/useFetch";
import "./propertyList.css";

const PropertyList = () => {

  const {data, loading, error} = useFetch("https://hotel-booking-backend-express.herokuapp.com/api/hotels/countByType");

  return (
    <div className="pList">
     {loading ? <div>Loading...</div>:
     data?.map((item) => (
      <div className="pListItem">
      <img
        src="https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o="
        alt=""
        className="pListImg"
      />
      <div className="pListTitles">
        <h1>{item?.type}</h1>
        <h2>{item?.count} hotels</h2>
      </div>
    </div>
     ))}
    </div>
  );
};

export default PropertyList;
