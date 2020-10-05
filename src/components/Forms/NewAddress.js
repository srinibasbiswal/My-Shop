import React from "react";

function NewAddress() {
    return (
        <div className={`uk-card uk-card-body uk-card-default`}>
            <h3 className={`uk-card-title`}>Add a new address</h3>
            <form className={`uk-form-stacked uk-text-left`}>
                <div className={`uk-margin uk-width-1-1`}>
                    <label className={`uk-form-label uk-text-bold`}>
                        Full Name
                    </label>
                    <div className={`uk-form-controls`}>
                        <input
                            className={`uk-input uk-border-rounded`}
                            type="text"
                            placeholder="Full Name"
                        />
                    </div>
                </div>
                <div className={`uk-margin uk-width-1-1`}>
                    <label className={`uk-form-label uk-text-bold`}>
                        Mobile Number
                    </label>
                    <div className={`uk-form-controls`}>
                        <input
                            className={`uk-input uk-border-rounded`}
                            type="number"
                            placeholder="10-digit mobile number without prefixes"
                        />
                    </div>
                </div>
                <div className={`uk-margin uk-width-1-1`}>
                    <label className={`uk-form-label uk-text-bold`}>
                        PIN code
                    </label>
                    <div className={`uk-form-controls`}>
                        <input
                            className={`uk-input uk-border-rounded`}
                            type="number"
                            placeholder="6-digit [0-9] PIN code"
                        />
                    </div>
                </div>
                <div className={`uk-margin uk-width-1-1`}>
                    <label className={`uk-form-label uk-text-bold`}>
                        Flat, House no., Building, Company, Apartment
                    </label>
                    <div className={`uk-form-controls`}>
                        <input
                            className={`uk-input uk-border-rounded`}
                            type="text"
                        />
                    </div>
                </div>
                <div className={`uk-margin uk-width-1-1`}>
                    <label className={`uk-form-label uk-text-bold`}>
                        Area, Colony, Street, Sector, Village
                    </label>
                    <div className={`uk-form-controls`}>
                        <input
                            className={`uk-input uk-border-rounded`}
                            type="text"
                        />
                    </div>
                </div>
                <div className={`uk-margin uk-width-1-1`}>
                    <label className={`uk-form-label uk-text-bold`}>
                        Landmark
                    </label>
                    <div className={`uk-form-controls`}>
                        <input
                            className={`uk-input uk-border-rounded`}
                            type="text"
                            placeholder="Near Lingaraaj Lassi"
                        />
                    </div>
                </div>
                <div className={`uk-margin uk-width-1-1`}>
                    <label className={`uk-form-label uk-text-bold`}>City</label>
                    <div className={`uk-form-controls`}>
                        <input
                            className={`uk-input uk-border-rounded`}
                            type="text"
                            value="Bhubaneswar"
                            disabled={true}
                        />
                    </div>
                </div>
                <div className={`uk-margin uk-width-1-1`}>
                    <label className={`uk-form-label uk-text-bold`}>
                        State
                    </label>
                    <div className={`uk-form-controls`}>
                        <input
                            className={`uk-input uk-border-rounded`}
                            type="text"
                            value="Odisha"
                            disabled={true}
                        />
                    </div>
                </div>
                <div className={`uk-margin uk-width-1-1`}>
                    <label className={`uk-form-label uk-text-bold`}>
                        Country
                    </label>
                    <div className={`uk-form-controls`}>
                        <input
                            className={`uk-input uk-border-rounded`}
                            type="text"
                            value="India"
                            disabled={true}
                        />
                    </div>
                </div>
                <div className={`uk-margin uk-width-1-1 uk-text-center`}>
                    <button
                        className={`uk-button uk-button-primary uk-border-rounded`}
                    >
                        Place Order
                    </button>
                </div>
            </form>
        </div>
    );
}

export default NewAddress;
