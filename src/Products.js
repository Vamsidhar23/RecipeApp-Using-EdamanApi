import React from 'react'

function Products({data}) {
    return (
        <div>
            <div className="row">
                {data.map(data =>  
                <div className="col-md-4">
                    <div class="card" style={{"width": "18rem"}}>
                    <img class="card-img-top" src={data.recipe.image} alt="Card image" />
                    <div class="card-body">
                    <center>
                        <h5 class="card-title">{data.recipe.label}</h5>
                        <p class="card-text">Total Amount Of Calories : {Math.round(data.recipe.calories)}</p>
                        <a href={data.recipe.shareAs} class="btn btn-primary">Reciepe</a>
                        </center>
                    </div>
                    </div>
                </div>
                )}
                <footer className='text-center mt-1 py-3 custom-footer'>Made by Vamsidhar Gokavarapu</footer>
            </div>
        </div>
    )
}
export default Products
