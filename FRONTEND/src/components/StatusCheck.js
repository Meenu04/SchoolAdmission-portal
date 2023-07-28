import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import Navbar from './Navbar';

import './status.css'

export default function StatusCheck() {
  

  return (
    <div>
    <div>
    <Navbar/>
  
    <div className='stat'>
    <h1><center>Exam Details</center></h1>
	<table border="1">
    <center>
	<br/>
	<br/>
	<br/>
	<br/>
		<tr>
			<th>Class</th>
			<th>Exam Date</th>
			
		</tr>
		<tr>
			<td>Std I</td>
			<td><a href="https://forms.gle/vXnCCDmiCzwL7bmm9">click for exam</a></td>
			
		</tr>
        <tr>
			<td>Std II</td>
			<td><a href="https://forms.gle/vXnCCDmiCzwL7bmm9">click for exam</a></td>
			
		</tr>	<tr>
			<td>Std III</td>
			<td><a href="https://forms.gle/vXnCCDmiCzwL7bmm9">click for exam</a></td>
			
		</tr>	<tr>
			<td>Std IV</td>
			<td><a href="https://forms.gle/vXnCCDmiCzwL7bmm9">click for exam</a></td>
			
		</tr>	<tr>
			<td>Std V</td>
			<td><a href="https://forms.gle/vXnCCDmiCzwL7bmm9">click for exam</a></td>
			
		</tr>	<tr>
			<td>Std VI</td>
			<td><a href="https://forms.gle/vXnCCDmiCzwL7bmm9">click for exam</a></td>
			
		</tr>	<tr>
			<td>Std VII</td>
			<td><a href="https://forms.gle/vXnCCDmiCzwL7bmm9">click for exam</a></td>
			
		</tr>	<tr>
			<td>Std VIII</td>
			<td><a href="https://forms.gle/vXnCCDmiCzwL7bmm9">click for exam</a></td>
			
		</tr>	<tr>
			<td>Std IX</td>
			<td><a href="https://forms.gle/vXnCCDmiCzwL7bmm9">click for exam</a></td>
			
		</tr>	<tr>
			<td>Std XI</td>
			<td><a href="https://forms.gle/vXnCCDmiCzwL7bmm9">click for exam</a></td>
			
		</tr>
        </center>
	</table>
    </div>

</div>
     
    </div>
  )
}