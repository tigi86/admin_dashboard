import React from 'react';
import './WidegetLg.css';

import tigi from '../../assets/tigi.jpg';

const WidgetLg = () => {

  const Button = ({ type }) => {
    return (
      <button className={"widgetLgButton " + type}>{type}</button>
    );
  };

  return (
    <div className='widgetLg'>
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable"> 
          <tr className="widgetLgTr">
            <th className="widgetLgTh">Customer</th>
            <th className="widgetLgTh">Date</th>
            <th className="widgetLgTh">Amount</th>
            <th className="widgetLgTh">Status</th>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img src={tigi} alt="" className="widgetLgImg" />
              <span className="widgetLgName">Tigi John</span>
            </td>
            <td className="widgetLgDate">2 Jun 2024</td>
            <td className="widgetLgAmount">$15000.00</td>
            <td className="widgetLgStatus">
              <Button type='Approved' />
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img src={tigi} alt="" className="widgetLgImg" />
              <span className="widgetLgName">Tigi John</span>
            </td>
            <td className="widgetLgDate">2 Jun 2024</td>
            <td className="widgetLgAmount">$15000.00</td>
            <td className="widgetLgStatus">
              <Button type='Declined' />
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img src={tigi} alt="" className="widgetLgImg" />
              <span className="widgetLgName">Tigi John</span>
            </td>
            <td className="widgetLgDate">2 Jun 2024</td>
            <td className="widgetLgAmount">$15000.00</td>
            <td className="widgetLgStatus">
              <Button type='Pending' />
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img src={tigi} alt="" className="widgetLgImg" />
              <span className="widgetLgName">Tigi John</span>
            </td>
            <td className="widgetLgDate">2 Jun 2024</td>
            <td className="widgetLgAmount">$15000.00</td>
            <td className="widgetLgStatus">
              <Button type='Approved' />
            </td>
          </tr> 
      </table>
    </div>
  );
};

export default WidgetLg;
