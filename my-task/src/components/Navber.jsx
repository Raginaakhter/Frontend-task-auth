
import logo from './../../public/logo (2).png'
const Navber = () => {
    return (
        <div className='flex justify-between mt-1 mr-1 ml-2'>
            <img src={logo}alt="" />
           <button className="btn btn-active btn-success text-shadow-warning text-white **:">Get started</button>
        </div>
    );
};

export default Navber;