import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css';

const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-10 my-20">
            <SectionTitle
            heading="From Our Menu"
            subHeading={"Check it out"}
            ></SectionTitle>
            <div className="md:flex justify-center items-center py-20 px-36 bg-slate-500 bg-opacity-60">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Nov,11,2024</p>
                    <p className="uppercase">Where can I get some?</p>
                    <p>We prepare all our dishes with the finest quality, using ingredients sourced directly from our own farm crops.</p>
                    <button className="btn btn-outline text-white border-0 border-b-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;