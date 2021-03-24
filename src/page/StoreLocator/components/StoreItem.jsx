import React from 'react'

export default function StoreItem({ name, address, phone, store_hours, onClick }) {
    return (
        <div className="card-body border-top" onClick={onClick}>
            {/* Heading */}
            <p className="font-weight-bold">{name}</p>
            <p className="text-gray-500">{address}</p>
            <p>
                <strong>Phone:</strong> <br />
                <a className="text-gray-500" href="tel:6-146-389-574">{phone}</a>
            </p>
            <p className="mb-0">
                <strong>Store Hours:</strong> <br />
                <span className="text-gray-500">{store_hours}</span>
            </p>
        </div>
    )
}

