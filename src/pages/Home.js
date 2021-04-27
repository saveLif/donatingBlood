import Bloodgroup from "../components/Bloodgroup";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";


const Home = () =>{
    return (
    <div className="home">
        <Navigation />
        <Logo />
        <Bloodgroup /> 
    </div>
    );

};
export default Home;