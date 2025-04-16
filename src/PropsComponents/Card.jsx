import React from 'react'

const Card = ({data}) => {
    const { title, description, image } = data;
    // console.log(title, description, image);
    
    return (
        <div className="card" style={{width: '18rem'}}>
            <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">
                        {description}
                    </p>
                </div>
        </div>
    )
}

export default Card