import NavBar from "../components/NavBar";
import InfoBox from "../components/infoBox";
function ShadowGalactic() {
    let content = "Bridge between crypto and fiat. Coming soon..."
    return (
        <div className="App">
            <NavBar />
            <div className="App-header">
                <InfoBox content = { content } />
            </div>
        </div>
    )
}
export default ShadowGalactic;