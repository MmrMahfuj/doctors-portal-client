import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutFrom from './CheckoutFrom';
import { Elements } from '@stripe/react-stripe-js';




const stripePromise = loadStripe('	pk_test_51JwiY4GYi8hdIdjJaiIZwgkiccQXlTei66wy9Dv2v9tNIAoxZq1bagRbr08OBcTiJnIjHc6hLcP0zgnw12LKyixV00BNUC8Vt0')

const Payment = () => {
    const { appointmentId } = useParams();
    const [appointment, setAppointment] = useState([]);

    useEffect(() => {
        fetch(`https://cryptic-tor-49954.herokuapp.com/appointment/${appointmentId}`)
            .then(res => res.json())
            .then(data => {
                setAppointment(data)
            })
    }, [appointmentId])

    return (
        <div>
            <h2>Please Pay for {appointment?.serviceName}</h2>
            <h4>Pay: ${appointment?.price}</h4>
            {appointment.price && <Elements stripe={stripePromise}>
                <CheckoutFrom
                    appointment={appointment}
                />
            </Elements>}
        </div>
    );
};

export default Payment;

/*
1. install stripe and stripe-react
2. set publishable key
3. Elements
4. Checkout Form
*/