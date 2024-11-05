import "./Offer.css"

const Offer = () => {
    return (
        <>
        <i className="bi bi-arrow-up-left text-white"></i>
        <div className="offer-card">
            <div className="offer-image"></div>
            <div className="offer-content">
                <p className="offer-text-1">
                Run with the pack
                </p>

                <div className="offer-text-2">
                <span>
                    Get 35% off
                </span>
                <span>PcPartPicker official build</span>
                </div>

                <a className="offer-action" href="#parts">
                Get Discount
                </a>

                <p className="offer-date">
                Offer valid until 29th December, 2024 *
                </p>
            </div>
        </div>
        </>
    )
}

export default Offer;