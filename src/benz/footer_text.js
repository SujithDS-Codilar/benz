import fig1 from './fuel.png';
import './footer_text.css';
import imge1 from './fbb.png';
import imge2 from './twit.png';
import imge3 from './ytube.png';
import imge4 from './insta.png';
import imge5 from './linkedin.png';
import imge6 from './logo_amg.svg';
import imge7 from './logo_daimler.svg';
import imge8 from './logo_smart.svg';


function Footer_Text() {
    return (
        <>
            <div className="Show">
                <p>Show More<i className="Arrow_down"></i></p></div>
            <div className="icons">
                <div className="fuel_consumption">
                    <pre>
                        Kraftstoffverbrauch kombiniert   CO₂-Emissionen kombiniert   Stromverbrauch im kombinierten Testzyklus
                    </pre>
                </div>
            </div>
            <div className="text">
                <p>
                    <sup>1</sup>
                    Die angegebenen Werte wurden nach dem vorgeschriebenen Messverfahren ermittelt. Es handelt sich um die „NEFZ-CO₂-Werte“ i. S. v. Art. 2 Nr. 1 Durchführungsverordnung (EU) 2017/1153. Die Kraftstoffverbrauchswerte wurden auf Basis dieser Werte errechnet. Der Stromverbrauch wurde auf der Grundlage der VO 692/2008/EG ermittelt. Weitere Informationen zum offiziellen Kraftstoffverbrauch und den offiziellen spezifischen CO₂-Emissionen neuer Personenkraftwagen können dem „Leitfaden über den Kraftstoffverbrauch, die CO₂-Emissionen und den Stromverbrauch aller neuen Personenkraftwagenmodelle“ entnommen werden, der an allen Verkaufsstellen und bei der Deutschen Automobil Treuhand GmbH unter www.dat.de unentgeltlich erhältlich ist.
                </p>

                <p>
                    <sup>4</sup>
                    Angaben zu Kraftstoffverbrauch, Stromverbrauch und CO₂-Emissionen sind vorläufig und wurden vom Technischen Dienst für das Zertifizierungsverfahren nach Maßgabe des WLTP-Prüfverfahrens ermittelt und in NEFZ-Werte korreliert. Eine EG-Typgenehmigung und Konformitätsbescheinigung mit amtlichen Werten liegen noch nicht vor. Abweichungen zwischen den Angaben und den amtlichen Werten sind möglich.
                </p>

                <p>
                    <sup>6</sup>
                    Stromverbrauch und Reichweite wurden auf der Grundlage der VO 692/2008/EG ermittelt. Stromverbrauch und Reichweite sind abhängig von der Fahrzeugkonfiguration. Weitere Informationen zum offiziellen Kraftstoffverbrauch und den offiziellen spezifischen CO₂-Emissionen neuer Personenkraftwagen können dem „Leitfaden über den Kraftstoffverbrauch, die CO₂-Emissionen und den Stromverbrauch aller neuen Personenkraftwagenmodelle“ entnommen werden, der an allen Verkaufsstellen und bei der Deutschen Automobil Treuhand GmbH unter www.dat.de unentgeltlich erhältlich ist.
                </p>

                <p>
                    <sup>7</sup>
                    Angaben zu Stromverbrauch und Reichweite sind vorläufig und wurden vom Technischen Dienst für das Zertifizierungsverfahren nach Maßgabe der UN/ECE-Regelung Nr. 101 ermittelt. Die EG-Typgenehmigung und eine Konformitätsbescheinigung mit amtlichen Werten liegen noch nicht vor. Abweichungen zwischen den Angaben und den amtlichen Werten sind möglich.
                </p>

                <p>
                    <sup>8</sup>
                    Alle technischen Angaben sind vorläufig und wurden intern nach Maßgabe der jeweils anwendbaren Zertifizierungsmethode ermittelt. Es liegen bislang weder bestätigte Werte vom TÜV noch eine EG-Typgenehmigung noch eine Konformitätsbescheinigung mit amtlichen Werten vor. Abweichungen zwischen den Angaben und den amtlichen Werten sind möglich.
                </p>
            </div>

            <div className="footer_list"  >

                <h1>More topics</h1>
                <h1>Shopping</h1>
                <h1>All about cars</h1>
                <h1>Discover items</h1>
            </div>
            <hr />
            <br />

            <div className="more_items">
                <ul id="more_topics" type="none">
                    <li>Innovation</li>
                    <li>Design</li>
                    <li>Exhibitions</li>
                    <li>Museum & History</li>
                    <li>Sports</li>
                    <li>Driving Events</li>
                    <li>Mercedes me Portal</li>
                </ul>

                <ul id="shopping" type="none">
                    <li>Dealer Search</li>
                    <li>Mercedes-Benz Accessoires</li>
                    <li>Mercedes-Benz Collection</li>
                    <li>Mercedes me connect Store</li>
                    <li>Service & Parts</li>
                    <li>Formula 1 Store</li>
                    <li>Mercedes-Benz Classic Center</li>
                </ul>

                <ul id="about">
                    <li>Model Overview</li>
                    <li>Configurator</li>
                    <li>Test Drive</li>
                    <li>Mercedes-Maybach</li>
                    <li>Mercedes me connect</li>
                    <li>Mercedes-Benz Ex-Factory Driving Aids</li>
                    <li>WLTP</li>
                    <li>RDE</li>
                    <li>Semiconductors supply situation</li>
                    <li>Li-Ion UN38.3</li>
                </ul>

                <ul id="items">
                    <li>Daimler AG</li>
                    <li>Mercedes-Benz AG</li>
                    <li>Newsroom</li>
                    <li>Press</li>
                    <li>Career</li>
                    <li>heycar</li>
                    <li>SHARE NOW</li>
                    <li>Vulnerability Reporting Policy</li>
                    <li>Mercedes-Benz Energy</li>
                    <li>Mercedes-Benz Bank</li>
                    <li>Fleet Sales</li>
                    <li>Mercedes-Benz Global Training</li>
                    <li>Customer Centre Sindelfingen</li>
                </ul>
            </div>
            <div className="txt">
                <p>Stay informed</p>
            </div>
            <hr></hr>
            <div className="ftext">
                <p>Follow us and use the following social media platforms to get in contact with us and to share your passion<br /><br /> for the brand, products and services of Mercedes-Benz.</p>
            </div>

            <div className="Social_icons">
                <ul id="social_icons_list" type="none">
                    <li><img src={imge1}></img><a href="https://www.facebook.com/MercedesBenz"></a></li>
                </ul>

                <ul id="twitter" type="none">
                    <li><img src={imge2}></img><a href="https://twitter.com/mercedesbenz"></a></li>
                </ul>

                <ul id="youtube" type="none">
                    <li><img src={imge3}></img><a href="https://twitter.com/mercedesbenz"></a></li>
                </ul>

                <ul id="insta" type="none">
                    <li><img src={imge4}></img><a href="https://twitter.com/mercedesbenz"></a></li>
                </ul>

                <ul id="linkedin" type="none">
                    <li><img src={imge5}></img><a href="https://twitter.com/mercedesbenz"></a></li>
                </ul>
            </div>
            <hr />

            <div className="footer_logo">
                <ul id="amg">
                    <img src={imge6}></img>
                </ul>

                <ul id="daimler">
                    <img src={imge7}></img>
                </ul>

                <ul id="smart">
                    <img src={imge8}></img>
                </ul>
            </div>
            <hr />

            <div className="end_cnt">
                <p>This is the International website of Mercedes-Benz AG. Visitors from the U.S., please visit our U.S. website <a href="www.mbusa.com.">www.mbusa.com</a></p>
                <br></br>
                <br></br>
            </div>

        </>
    )
}

export default Footer_Text;