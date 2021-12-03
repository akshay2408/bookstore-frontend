import axios from 'axios'
import { React, useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import Header from './Header'
import { saveFav } from './action/action';
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import Delete from './Delete';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	pt: 2,
	px: 4,
	pb: 3,
};

export default function Dashboard() {
	const dispatch = useDispatch()
	const state = useSelector(state => state)
	const [booksfile, setbooksfile] = useState()
	const [showDescription, setShowDescription] = useState(false)
	const [showId, setShowId] = useState([])
	useEffect(() => {
		axios.get('http://localhost:5000/getData')
			.then(res => {
				setbooksfile(res.data.msg)
			})
			.catch(err => console.log(err))
	}, [])

	const addfavourite = (value) => {
		dispatch(saveFav(value))
		alert('added to favourites')
	}
	const currentShowDescription = (id) => {
		setShowId(id)
		setShowDescription(!showDescription)
	}
	return (
		<div>
			<Header />
			<h1>List of books</h1>
			<div className="cards-are container mt-5">
				{booksfile && booksfile.map((value, index) => {
					;
					return <>
						<div class="card" style={{ width: "18rem" }} key={index}>
							<img src={value.photo} class="card-img-top" alt="..." />
							<div class="card-body">
								<p class="card-title">Name: {value.name}</p>
								<p class="card-text">Author: {value.author}</p>
								<p class="card-title">Category: {value.category}</p>
								<p class="card-title">Available-Qty: {value.stock}</p>

								<Button onClick={() => currentShowDescription(value._id)}>Show Description</Button>
								{(showId.includes(value._id) && showDescription) && <p class="card-title">Desc: {value.description}</p>}

								<p><Delete value={value} /></p>

								<p>
									<Link to={`/edit/${value._id}`}><Button><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
										<path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z" />
									</svg> Edit</Button></Link></p>
							</div>
							<button onClick={() => { addfavourite(value) }}>Add to favourites</button>
						</div>
					</>
				})}
			</div>


		</div>
	)
}
