import { Board, OrdersContainer } from "./styles";

interface OrdersBoardProps {
    icon: String;
    title: String;
}

export function OrdersBoard(props:OrdersBoardProps) {
    return (
        <Board>
                <header>
                    <span>{props.icon}</span>
                    <strong>{props.title}</strong>
                    </header>

                <OrdersContainer>
                    <button type="button">
                        <strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis explicabo cumque, facere unde deleniti iure doloremque dicta possimus alias, expedita sequi excepturi qui iusto facilis fuga quia et, aliquam odit.</strong>
                    </button>
                    
                </OrdersContainer>
            </Board>
    );
}

