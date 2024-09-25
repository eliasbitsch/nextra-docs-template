// components/DonateButton.jsx
import React from 'react';

const DonateButton = () => (
    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
        <input type="hidden" name="cmd" value="_donations" />
        <input type="hidden" name="business" value="eliasbitsch@hotmail.com" />
        <input type="hidden" name="item_name" value="ROS Course Support" />
        <input type="hidden" name="currency_code" value="EUR" />
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
            Trinkgeld geben
        </button>
    </form>
);

export default DonateButton;
