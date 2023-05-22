import React from 'react'

function WidgetLarge() {
    const Button=({type})=>{
        return <button className={"bg-blue-600 p-[5px] rounded-lg text-white font-bold"}>{type}</button>
    }
  return (
    <div className='flex-1 p-[20px] shadow-md'>
        <h3 className='text-[16px] sm:text-xl text-center'>Latst transactions</h3>
        <table>
            <tr>
                <th>Customer</th>
                <th>Data</th>
                <th>Amount</th>
                <th>Customer</th>
                <th>Status</th>
            </tr>
            <tr>
                <td>
                    <img className='w-[40px] rounded-[50%] object-cover h-[55px]' src="https://th.bing.com/th/id/OIP.rB3g6x_R40ohTjQ8bHI7tgHaLd?w=115&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7" alt="/" />
                    <span>Martin</span>
                </td>
                <td>2 Jun 2023</td>
                <td>$322.21</td>
                <td>
                    <Button type="Approved"/>
                </td>
            </tr>

            <tr>
                <td>
                    <img className='w-[40px] rounded-[50%] object-cover h-[55px]' src="https://th.bing.com/th/id/OIP.rB3g6x_R40ohTjQ8bHI7tgHaLd?w=115&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7" alt="/" />
                    <span>Martin</span>
                </td>
                <td>2 Jun 2023</td>
                <td>$322.21</td>
                <td>
                    <Button type="Declined"/>
                </td>
            </tr>

            <tr>
                <td>
                    <img className='w-[40px] rounded-[50%] object-cover h-[55px]' src="https://th.bing.com/th/id/OIP.rB3g6x_R40ohTjQ8bHI7tgHaLd?w=115&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7" alt="/" />
                    <span>Martin</span>
                </td>
                <td>2 Jun 2023</td>
                <td>$322.21</td>
                <td>
                    <Button type="Pending"/>
                </td>
            </tr>

            <tr>
                <td>
                    <img className='w-[40px] rounded-[50%] object-cover h-[55px]' src="https://th.bing.com/th/id/OIP.rB3g6x_R40ohTjQ8bHI7tgHaLd?w=115&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7" alt="/" />
                    <span>Martin</span>
                </td>
                <td>2 Jun 2023</td>
                <td>$322.21</td>
                <td>
                    <Button type="Approved"/>
                </td>
            </tr>
        </table>
    </div>
  )
}

export default WidgetLarge