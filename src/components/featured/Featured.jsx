import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {

  const {data, loading, error} = useFetch("http://localhost:5000/api/hotels/countByCity?cities=Dhaka,Chittagong");

  console.log(data,error);

  return (
    <div className="featured">
     {loading ? <div>Loading...</div>:
      <>
      {data?.map((item) => (
        <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>{item?.city}</h1>
          <h2>{item?.count} Properties</h2>
        </div>
      </div>
      ))}
       </>}
    </div>
  );
};

export default Featured;
