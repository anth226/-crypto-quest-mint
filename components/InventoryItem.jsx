export default function InventoryItem ({

}) {
    return (
        <div className="inventory-item rounded-l box-shadow-l">
            <div className="inventory-item__image m:d-flex m:align-items-end px-4 pt-3 m:px-0 m:pt-0">
                <picture>
                <source type="image/webp" srcset="/img/@@image.webp" />
                <img src="/img/@@image.png" width="320" height="340" alt="@@name" className="d-block mx-auto shadow-l" />
                </picture>
            </div>
            <div className="inventory-item__main relative px-4 py-5 s:px-5 m:px-6 m:py-5">
                <div className="d-flex justify-content-between">
                <div>
                    <p className="inventory-item__label mb-1">Character Name</p>
                    <h1 className="mt-0 mb-2 m:mb-2">@@name</h1>
                </div>
                <p className="my-0 pl-4 m:pl-5">
                    <a href="#" className="m:fs-xl">
                    <svg className="icon" width="16" height="16" role="img" aria-label="Share"><use xlinkHref="/img/icons.svg#share"></use></svg>
                    </a>
                </p>
                </div>
                <p className="d-flex mt-0 mb-4 fs-m">
                <span className="inventory-item__label flex-shrink-0 pr-2">Token Id:</span>
                <span className="text-ellipsis">53487987R498U098908Uoi53487987R498U098908Uoi</span>
                </p>
                
                <ul className="label-list">
                <li className="label-list__item">
                    <span className="label-list__label inventory-item__label">Race</span>
                    <span className="label-list__value">@@race</span>
                </li>
                <li className="label-list__item">
                    <span className="label-list__label inventory-item__label">Gender</span>
                    <span className="label-list__value">@@gender</span>
                </li>
                <li className="label-list__item">
                    <span className="label-list__label inventory-item__label">Level</span>
                    <span className="label-list__value">@@level</span>
                </li>
                </ul>
                
                <p className="text-clamp" style="--clamp-lines: 2;">@@description</p>
                
                <div className="d-flex flex-wrap justify-content-center m:justify-content-start gap-4 mt-5">
                <button className="btn btn--primary btn--m">
                    <svg className="icon" width="16" height="16" aria-hidden="true"><use xlinkHref="/img/icons.svg#opensea"></use></svg>
                    Marketplace
                </button>
                <button className="btn btn--ghost btn--m">
                    Rename Character
                </button>
                </div>
            </div>
        </div>

    )
}