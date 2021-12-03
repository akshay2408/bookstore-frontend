import React from 'react'
import { useSelector } from 'react-redux';
import Header from './Header'

function Favourite() {
	const state = useSelector(state => state)
	return (
		<div>
			<Header />
			<div className="cards-are container mt-5">
				{state && state.map((value, index) => {
					return <>
						<div class="card" style={{ width: "18rem" }} key={index}>
							<img src={value.photo} class="card-img-top" alt="..." />
							<div class="card-body">
								<p class="card-title">Name-{value.name}</p>
								<p class="card-text">Author-{value.author}</p>
								<p class="card-title">category-{value.category}</p>
								<p class="card-title">Available-Qty-{value.stock}</p>
							</div>
						</div>
					</>
				})}
			</div>
		</div>
	)
}

export default Favourite
