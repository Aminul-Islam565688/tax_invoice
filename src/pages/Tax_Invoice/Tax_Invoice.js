import React, { useState } from 'react';
import './Tax_Invoice.scss';



const Tax_Invoice = () => {

    const [total, setTotal] = useState(0)
    const [numToWords, setNumToWords] = useState('')

    const insertRow = () => {
        const table = document.querySelector('.item-table'),
            row = table.insertRow(2),
            cell1 = row.insertCell(0),
            cell2 = row.insertCell(1),
            cell3 = row.insertCell(2),
            cell4 = row.insertCell(3),
            cell5 = row.insertCell(4)

        cell1.innerHTML = "<input type='text'/>"
        cell2.innerHTML = "<input type='text'/>"
        cell3.innerHTML = "<input type='text'/>"
        cell4.innerHTML = "<input type='text'/>"
        cell5.innerHTML = "<input type='text'/>"
        console.log('clicked')
    }
    const percentage = e => {
        const subTotal = 800;
        console.log(e.target.value)
        const tax = (subTotal / 100) * e.target.value;
        setTotal(subTotal + tax)
        console.log(total)
    }

    var converter = require('number-to-words');
    const text = converter.toWordsOrdinal(total);
    console.log(text);

    console.log(total)
    return (
        <div className='invoice-main'>
            <div className='form-address'>
                <div className='form-address-main'>
                    <input type="file" id='upload-logo' />
                    <label for="upload-logo" className='upload-logo-label'>Upload Company Logo</label>
                    <p className='from-text'>From,</p>
                    <label for='from-line-1'>Address Line 1</label>
                    <input type="text" id='from-line-1' />
                    <br />
                    <label for='from-line-2'>Address Line 2</label>
                    <input type="text" id='from-line-2' />
                    <br />
                    <label for='to-state'>State</label>
                    <select name="to-state" id="to-state">
                        <option selected disabled hidden>Select</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Kolkata">Kolkata</option>
                    </select>
                    <p>To,</p>
                    <label for='to-line-1'>Address Line 1</label>
                    <input type="text" id='to-line-1' />
                    <br />
                    <label for='to-line-2'>Address Line 2</label>
                    <input type="text" id='to-line-2' />
                    <br />
                    <label for='from-state'>State</label>
                    <select name="from-state" id="to-state">
                        <option selected disabled hidden>Select</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Kolkata">Kolkata</option>
                    </select>
                </div>
                <div>
                    <h1 className='tax-invoice-text'>TAX INVOICE</h1>
                    <label for='invoice-number'>Invoice Number</label>
                    <input type="text" id='invoice-number' />
                </div>
            </div>
            <div className='date-picker-table'>
                <table >
                    <tr>
                        <th>Invoice Date</th>
                        <th>Due Date</th>
                    </tr>
                    <tr>
                        <td>
                            <label for='invoice-date'>Date Picker 1<input type="date" name="invoice-date" id="invoice-date" /></label>
                        </td>
                        <td>
                            <label for='due-date'>Date Picker 2<input type="date" name="due-date" id="due-date" /></label>
                        </td>
                    </tr>
                </table>
            </div>
            <div className='item-table-main'>
                <table className='item-table'>
                    <colgroup>
                        <col span="1" style={{ width: '5%' }} />
                        <col span="1" style={{ width: '35%' }} />
                        <col span="1" style={{ width: '20%' }} />
                        <col span="1" style={{ width: '20%' }} />
                        <col span="1" style={{ width: '20%' }} />
                    </colgroup>
                    <tr>
                        <th>#</th>
                        <th>Item Name</th>
                        <th>Quantity</th>
                        <th>Rate</th>
                        <th>Ammount</th>
                    </tr>
                    <tr>
                        <td>01</td>
                        <td>Samsung</td>
                        <td>03</td>
                        <td>45,000</td>
                        <td>135,000</td>
                    </tr>
                </table>
                <button onClick={insertRow}>Add Item</button>
            </div>
            <div className='calculation-main'>
                <div>
                    <p><span>Sub Total</span><span>800</span></p>
                    <div className='tax-input'>
                        <label for='tax'>Tax (in %)</label>
                        <input onChange={(e) => percentage(e)} type="number" id='tax' />
                    </div>
                    <p><span>Total</span><span>{total}</span></p>
                </div>
            </div >
            <p className='class-in-words'>Total in Words Rupees <span>{text}</span></p>
        </div >
    );
};

export default Tax_Invoice;