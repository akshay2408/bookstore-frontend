import axios from 'axios'
import React, { useState } from 'react'
import Header from './Header'
import { books } from './Book'
import { useNavigate } from 'react-router-dom'

function CreateBook() {
	const Navigate = useNavigate()
	const [newUser, setNewUser] = useState(
		{
			name: '',
			category: '',
			photo: '',
			author: '',
			stock: '',
			description: '',
		}
	);


	const handleSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData();
		formData.append('photo', newUser.photo);
		formData.append('category', newUser.category);
		formData.append('name', newUser.name);
		formData.append('author', newUser.author);
		formData.append('stock', newUser.stock);
		formData.append('description', newUser.description);


		axios.post('http://localhost:5000/add', formData)
			.then(res => {
				console.log(res);
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
				<input
					type="text"
					name="photo"
					placeholder="image url"
					value={newUser.photo}
					onChange={handleChange}
				/>

				<input
					type="text"
					placeholder="name"
					name="name"
					value={newUser.name}
					onChange={handleChange}
				/>

				<input
					type="text"
					name="category"
					placeholder="category"
					value={newUser.category}
					onChange={handleChange}
				/>
				<input
					type="text"
					name="author"
					placeholder="author"
					value={newUser.author}
					onChange={handleChange}
				/>

				<input
					type="number"
					name="stock"
					placeholder="number of stock"
					value={newUser.stock}
					onChange={handleChange}
				/>

				<textarea
					type="text"
					name="description"
					placeholder="description"
					rows="2"
					cols="24"
					value={newUser.description}
					onChange={handleChange}
					style={{ resize: "none", overflowY: "scroll" }}
				/>

				<input
					type="submit"
				/>
			</form>

		</div>
	)
}

export default CreateBook
