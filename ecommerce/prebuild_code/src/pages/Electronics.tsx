import {Col,Row} from "react-bootstrap"
import storeItems from "../data/electronics.json"
import { StoreItem } from "../components/StoreItem"

export function Electronics() {
    return <><h1>Electronics</h1>
    <Row md={2} xs={1} lg={3} className="g-3">
        {storeItems.map(item => (
            <Col key={item.id}>
                <StoreItem {...item} />
            </Col>
        ))}
        
    </Row>
    
    </>
}