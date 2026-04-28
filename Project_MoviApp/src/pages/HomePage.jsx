import Heder from "../Components/Heder";
import NavigationBar from "../Components/NavigationBar";
import ImageSlider from "../Components/ImageSlider";
import LoadingMovies from "../Components/LoadingMovies";

const HomePage = () => {
    return (
        <div className="w-screen h-screen bg-gray-800 border-box overflow-auto">
            <div className="lg:px-10 px-5 py-5 sticky top-0">
                <Heder />
            </div>

            <div className="w-full flex h-[80%] flex-col lg:flex-row items-center justify-start gap-5 p-5">
                <ImageSlider />

                <div className="w-full lg:w-[68%] h-full p-5 bg-gray-700/20 backdrop-blur-md border border-gray-600/20 shadow-[0_8px_32px_rgba(0,0,0,0.3)] rounded-xl overflow-hidden">
                    <LoadingMovies/>
                </div>

            </div>

            <div>

            </div>

            <div className="lg:px-10 px-2 py-5 fixed bottom-0 w-screen">
                <NavigationBar />
            </div>
        </div>
    );
};

export default HomePage;
