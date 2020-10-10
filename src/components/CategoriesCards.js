import React from "react";

function CategoriesCards(props) {
	return (
		<div>
			<div
				className={`uk-width-1-1 uk-margin-medium uk-margin-medium-left`}
			>
				<p className={`uk-text-lead `}>Search by category</p>
			</div>
			<div
				class="uk-child-width-1-3@s uk-grid-small uk-grid-match uk-margin  uk-margin-medium-left uk-margin-medium-right"
				uk-grid={`true`}
			>
				<div>
					<div class="uk-card uk-card-default uk-card-small uk-card-body uk-card-hover">
						<h3 class="uk-card-title">Default</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing
							elit.
						</p>
					</div>
				</div>
				<div>
					<div class="uk-card uk-card-default  uk-card-small uk-card-body uk-card-hover">
						<h3 class="uk-card-title">Primary</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing
							elit.
						</p>
					</div>
				</div>
				<div>
					<div class="uk-card uk-card-default  uk-card-small uk-card-body uk-card-hover">
						<h3 class="uk-card-title">Secondary</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing
							elit.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CategoriesCards;
