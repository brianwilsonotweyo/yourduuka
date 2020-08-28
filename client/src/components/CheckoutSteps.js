const CheckoutSteps ={
    render: (props) =>{
        return `
            <div class="checkout-steps">
                <div class="${props.step1 ? 'active' : ""}">Login</div>
                <div class="${props.step2 ? 'active' : ""}">Delivery</div>
                <div class="${props.step3 ? 'active' : ""}">Payment</div>
                <div class="${props.step4 ? 'active' : ""}">Place Order</div>
            </div>
        `
    }
}

export default CheckoutSteps