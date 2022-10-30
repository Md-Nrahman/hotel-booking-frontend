import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import useFetch from '../hooks/useFetch'
import './reserve.css'

const Reserve = ({setOpen, hotelId}) => {

    const {data, loading, error}= useFetch(`https://hotel-booking-backend-express.herokuapp.com/api/hotels/hotelRooms/${hotelId}`)
  console.log(data);
    return (
    <div>
        <div className="rContainer">
            <FontAwesomeIcon
            icon={faCircleXmark}
            className="rClose"
            onClick={() => setOpen(false)}
            />
            <span>Select your rooms</span>
            {data?.map((room, index)=>(
                <div className="rRoom" key={index}>
                    <div className="rRoomImg">
                        <img src={room?.image} alt="" />
                        </div>
                        <h3>{room?.title}</h3>
                        <h4>{room?.desc}</h4>
                        <h6>{room?.price}</h6>


         </div>
            ))}

    </div>
    </div>
  )
}

export default Reserve