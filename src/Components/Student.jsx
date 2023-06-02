import React from 'react'
import Nav from './Nav'

function Student() {
    
  return (
    <div className="Shru">
         <Nav/>
        <h1  className='hello1'>Student</h1>
        <table border={2} className='hello2'>
            <thead>
                <th>Name</th>
                <th>Age</th>
                <th>Course</th>
                <th>Batch</th>
                <th>Change</th>
            </thead>
            <tbody>
            <tr>
                    <td>Raam</td>
                    <td>23</td>
                    <td>MERN</td>
                    <td>Dec</td>
                    <td>Edit</td>
                </tr>
                <tr>
                    <td>Shruthi</td>
                    <td>22</td>
                    <td>MERN</td>
                    <td>Dec</td>
                    <td>Edit</td>
                </tr>
                <tr>
                    <td>Kokila</td>
                    <td>24</td>
                    <td>MERN</td>
                    <td>Dec</td>
                    <td>Edit</td>
                </tr>
                <tr>
                    <td>Barby</td>
                    <td>23</td>
                    <td>MERN</td>
                    <td>Dec</td>
                    <td>Edit</td>
                    
                </tr>
            </tbody>

        </table>
        </div>
  )
}

export default Student