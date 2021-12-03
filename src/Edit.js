import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './Header'
import { useParams } from 'react-router';

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

export default function Edit() {
	const id = useParams()
	const Navigate = useNavigate()
	const [newUser, setNewUser] = useState();
	useEffect(() => {
		axios.get(`http://localhost:5000/edit/${id.id}`).then((res) => {
			console.log(res, "./././")
			setNewUser(res.data)
		}).catch((err) => console.log(err))
	}, [])
	const handleSubmit = (e) => {
		e.preventDefault();
		axios.put(`http://localhost:5000/editbook/${id.id}`, newUser)
			.then(res => {
				Navigate('/dashboard')

			})
			.catch(err => {
				console.log(err);
			});
	}

	const handleChange = (e) => {
		setNewUser({ ...newUser, [e.target.name]: e.target.value });
	}

	return (
		<div>
			<Header />

			<form onSubmit={handleSubmit} encType='multipart/form-data' className="headerfomdata">

				<label>Edit Image URL</label>
				<input
					type="text"
					name="photo"
					placeholder="image url"
					value={newUser?.photo}
					onChange={handleChange}
				/>

				<label>Edit name:</label>
				<input
					type="text"
					placeholder="name"
					name="name"
					value={newUser?.name}
					onChange={handleChange}
				/>

				<label>Edit category</label>
				<input
					type="text"
					name="category"
					placeholder="category"
					value={newUser?.category}
					onChange={handleChange}
				/>
				<label> Edit book author</label>
				<input
					type="text"
					name="author"
					placeholder="author"
					value={newUser?.author}
					onChange={handleChange}
				/>

				<label>Edit stock</label>
				<input
					type="number"
					name="stock"
					placeholder="number of stock"
					value={newUser?.stock}
					onChange={handleChange}
				/>

				<label>Edit description</label>
				<textarea
					type="text"
					name="description"
					placeholder="description"
					rows="2"
					cols="24"
					value={newUser?.description}
					onChange={handleChange}
					style={{ resize: "none", overflowY: "scroll" }}
				/>

				<input
					type="submit"
				/>
			</form>

		</div>
	);
}
