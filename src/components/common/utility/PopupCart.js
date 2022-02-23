import React, { useMemo, useState } from "react";
import styled from "styled-components";
import { Modal } from 'antd';
import { useSelector, useDispatch } from "react-redux";
import { cartItems, removeFromCart, cleanCart, closeCart } from "../../../features/cart/cartSlice";
import { useNavigate } from "react-router-dom";

const StyledTable = styled.table`
    text-align: center;
    width: 100%;
`

const StyledItemRow = styled.tr`
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`

const RemoveBtn = styled.div`
    cursor: pointer;
    transition: color 0.2s;

    &:hover {
        color: red;
    }
`

const StyledSum = styled.div`
    text-align: end;
    font-size: 16px;
    position: absolute;
    right: 24px;
    padding: 4px 0px;
`

const PopupCart = ({ cartVisible }) => {

    const cart = useSelector(cartItems);
    const dispatch = useDispatch();

   

    const [confirmLoading, setConfirmLoading] = useState(false);

    const cartItemsList = useMemo(() =>
        cart.map((item, index) => (
            <StyledItemRow>
                <th scope="row">{index+1}</th>
                <td>{item.product}</td>
                <td>{item.size}</td>
                <td>{item.count}</td>
                <td>${item.price}</td>
                <td><RemoveBtn onClick={() => dispatch(removeFromCart(index))}>X</RemoveBtn></td>
            </StyledItemRow>
        ))
    , [cart]);

    const getTotalPrice = useMemo(() => 
            cart.reduce((sum, item) => {
                return sum + parseInt(item.price*item.count, 10)
            }, 0)
    , [cart]);

    const handleCheckout = () => {
        alert(`已從您的信用卡中扣除${getTotalPrice}元`)
        setConfirmLoading(true)
        setTimeout(() => {
            dispatch(cleanCart())
            dispatch(closeCart())
            setConfirmLoading(false)
        }, 2000);
    };

    const handleCancel = () => {
        dispatch(closeCart())
        setConfirmLoading(false)
    }

    return (
        cartVisible && (
        <div>
            <Modal
            title="購物車"
            visible={cartVisible}
            onOk={() => handleCheckout()}
            onCancel={() => handleCancel()}
            okText="Checkout"
            cancelText="Cancel"
            confirmLoading={confirmLoading}
            >
            {
                cart.length ?
                <div style={{ paddingBottom: "10px"}}>
                    <StyledTable>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>品項</th>
                                <th>尺寸</th>
                                <th>價格</th>
                                <th>數量</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItemsList}
                        </tbody>
                    </StyledTable>
                    <StyledSum>Total: ${getTotalPrice} NTD</StyledSum>
                </div> :
                <div>
                    購物車裡沒有商品哦...
                </div>
            }
            </Modal>
            
        </div>
        )
    );
};

export default PopupCart;