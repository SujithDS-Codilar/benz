import Header from "./header";
import Carousel from "./carousel";
import Search from "./search_bar"
import Content from "./text";
import './container.css';
import Three_Box from "./three_box";
import Grid from "./grid";
import Footer_Text from "./footer_text";

function Container(){
    return (
        
        <div className="container">
        <Header />
        <Carousel/>
        <Search/>
        <Content />
        <Three_Box />
        <Grid />
        <Footer_Text />
        </div>
        
    );
}

export default Container;