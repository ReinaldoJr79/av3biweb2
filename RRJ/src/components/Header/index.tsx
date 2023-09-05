
import ifpr from "../../assets/images/ifpr.jpg"

import { Container, Content } from "./styles";

export function Header() {
    return (
        <Container>
            <Content>
                <img src={ifpr} alt="AppFood" width="150" height="150"/>    
                
                <div className="page-details">
                    <h1>IFPR</h1>
                    <h2>Campus Cascavel</h2>
                </div>
                
            </Content>
        </Container>
    );
}