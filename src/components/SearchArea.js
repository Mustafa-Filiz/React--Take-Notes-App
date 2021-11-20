import { FormControl, TextField } from '@mui/material'
import React from 'react'

function SearchArea() {
	return (
		<FormControl>
			<TextField variant="outlined" label="Search..." />
		</FormControl>
	)
}

export default SearchArea
