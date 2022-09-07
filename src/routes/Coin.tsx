import { useParams } from "react-router";

interface RouteParams {
    coinId: string;
}

function Coin(){

    const {coinId} = useParams();
    return (
        <div>
             ddd {coinId}
        </div>

    );

}

export default Coin;