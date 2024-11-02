import "./Offer.css"

const Offer = () => {
    return (
        <>
        <i class="bi bi-arrow-up-left text-white"></i>
        <div class="offer-card">
            <div class="offer-image"></div>
            <div class="offer-content">
                <p class="offer-text-1">
                Run with the pack
                </p>

                <div class="offer-text-2">
                <span>
                    Get 35% off
                </span>
                <span>PcPartPicker official build</span>
                </div>

                <a class="offer-action" href="#parts">
                Get Discount
                </a>

                <p class="offer-date">
                Offer valid until 29th December, 2024 *
                </p>
            </div>
        </div>
        </>
    )
}

export default Offer;