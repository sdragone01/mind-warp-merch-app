import React from 'react';
import { useState } from 'react';
import { AddressAutofill } from '@mapbox/search-js-react';

export default function Component() {
    const [value, setValue] = useState("");
    return (

        <form>
            <AddressAutofill accessToken={"pk.eyJ1Ijoic2RyYWdvbmUwMSIsImEiOiJjbDhvbnhnaGoxaDNzM3ZvZ24yMDFuZ3RhIn0.nxfRfhk5TMRi2zw_OCSX2w"}>
                <input
                    autoComplete="shipping address-line1"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
            </AddressAutofill>
        </form>
    )
}
