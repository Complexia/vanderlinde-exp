import NavBar from "../components/NavBar";
import InfoBox from "../components/infoBox";

function Vanderswap() {
    let content = "A dex which allows users to pay for swaps with currency other than ether, \
    taken directly from the pool";
    return (
        <div className="App">
            <NavBar />
            <div className="App-header">
                <InfoBox content = { content } />

            </div>
        </div>
    )
}
export default Vanderswap;