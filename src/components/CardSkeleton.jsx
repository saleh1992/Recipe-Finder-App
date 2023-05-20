import React from 'react'
import Skeleton from 'react-loading-skeleton'

function CardSkeleton({ cards }) {
    return (
        Array(cards).fill(0).map((items, i) =>
            <div className='card-skeleton' key={i}>
                <div className="card w-96 bg-primary-content text-neutral-focus shadow-xl " style={{ maxWidth: '300px' }}>
                    <div className="left-col">
                        <Skeleton count={1} height={300} direction='50' borderRadius={20} />
                    </div>
                    <div className="right-col">
                        <Skeleton count={4} height={30} direction='50' />
                    </div>
                </div>
            </div>)

    )
}

export default CardSkeleton