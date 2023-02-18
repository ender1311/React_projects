import {Col,Row} from "react-bootstrap"
import storeItems from "../data/toys.json"
import { StoreItem } from "../components/StoreItem"

export function Toys() {
    return <><h1>Toys</h1>
    <Row md={2} xs={1} lg={3} className="g-3">
        {storeItems.map(item => (
            <Col key={item.id}>
                <StoreItem {...item} />
            </Col>
        ))}
        
    </Row>
    
    </>
}