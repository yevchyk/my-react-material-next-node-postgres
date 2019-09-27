import React, { Component } from 'react'
import { connect } from 'react-redux'
import Snackbar from '../components/Snackbar'
import {compose} from 'redux'

class Layout extends Component {
	render() {
		const { children } = this.props
		return (
			<React.Fragment>
				<header>
			    </header>
			    <main >
			      { children }
			    </main>
			    <footer>
			    </footer>
                	<Snackbar />
		    </React.Fragment>
		)
	}
}

export default compose(
	connect(res => res)
)(Layout)