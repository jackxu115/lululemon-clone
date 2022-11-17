import React, {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import paymentAction from "../actions";
import {taxRate} from "../Helper";
import {PayPalScriptProvider, PayPalButtons} from "@paypal/react-paypal-js";

export const Payment = ({itemList, amount}) => {

    // const ref = useRef(null)
    // useEffect(() => {
    //     const element = ref.current
    //     console.log(element)
    //     element.addEventListener("click", () => {
    //         console.log('click')
    //     })

    // return () => {
    //     element.removeEventListener('onClick')
    // }
    // },[])

    const [transactions, setTransactions] = useState({
        transactions: [{
            amount: null,
            description: 'Mark2win Full Stack Developer Bootcamp Ultimate version',
            custom: '90048630024435',
            //invoice_number: '12345', Insert a unique invoice number
            payment_options: {
                allowed_payment_method: 'INSTANT_FUNDING_SOURCE'
            },
            soft_descriptor: 'ECHI5786786',
            item_list: {
                items: null
                ,
                shipping_address: {
                    recipient_name: 'Mark Xu',
                    line1: '50 Acadia Ave, Markham, ON L3R 0B3',
                    line2: 'Unit #200',
                    city: 'Toronto',
                    country_code: 'CA',
                    postal_code: 'L3R 0B3',
                    phone: '6474017219',
                    state: 'Ontario'
                }
            }
        }],
        note_to_payer: 'Contact us markxu@mark2win.com for any questions on your order.'
    })

    useEffect(() => {
        setTransactions(state => (state.transactions[0].amount = amount, state))
        setTransactions(state => (state.transactions[0].item_list.items = itemList, state))
    }, [itemList, amount])

    const dispatch = useDispatch()
    useEffect(() => {
        window.PAYPAL.Button.render(paypalIntegrate(window.PAYPAL, () => {

        }), '#paypal-button');
    }, [])
    const paypalIntegrate = (paypal, PaymentSuccess) => {

        return {
            // Configure environment
            env: 'sandbox',
            client: {
                sandbox: 'AT00CBFees-dWFZkvRZIdRoC-HcSBflw-Bi2e7S1Y1mCGOlY46BUkBEOTElGDUFwfPEuyy9afsitY7xF',
                production: 'AWy7L0BwPpJU1qoh9hNZiR9-sadMHUpnOhlRbTw9ha-4LOhB9y4biARxSpBnk1KjbaXEHCnv1pBhumgI'
            },
            // Customize button (optional)
            locale: 'en_US',
            style: {
                // layout: 'vertical',
                size: 'large',
                color: 'blue',
                shape: 'rect',
                tagline: 'false',
                label: 'paypal'
            },
            funding: {
                allowed: [paypal.FUNDING.CARD],
                disallowed: [paypal.FUNDING.CREDIT]
            },

            // Enable Pay Now checkout flow (optional)
            commit: true,

            // Set up a payment
            payment: (data, actions) => {
                return actions.payment.create(transactions
                );
            },
            // Execute the payment
            onAuthorize: (data, actions) => {
                return actions.payment.execute().then(function (res) {
                    // Show a confirmation message to the buyer
                    // call your action to tackle after payment process
                    console.log('payment returned results', res)
                    dispatch(paymentAction.checkoutAction.PaymentSuccess()) // call my PaymentSucess action
                });
            }
        }
    }

    return (
        <div id="paypal-button">

        </div>
    )

}