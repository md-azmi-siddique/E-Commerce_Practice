import Carousel from "./Carousel";

const HeroSection = () => {
    return (
        <div className="flex flex-row">
            <div className="w-3/4">
                <Carousel />
            </div>
            <div className="w-1/4">
                <Carousel />
            </div>
        </div>
    );
};

export default HeroSection;
