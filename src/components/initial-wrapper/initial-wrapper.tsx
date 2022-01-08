import React, { ReactElement } from 'react'
import isEmpty from 'lodash/isEmpty'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'
import { userSelector } from '../../redux/selectors'
import { User } from '../../interfaces'
import { Auth } from '../../pages/auth'

interface Props {
    children: ReactElement,
    user: User | null
}
const InitialWrapper: React.FC<Props> = ({user, children}): ReactElement => {
    if (isEmpty(user)) {
        return <Auth />
    }
    
    return <>{children}</>
}

const mapStateToProps = createStructuredSelector({
    user: userSelector
})
export default connect(mapStateToProps)(InitialWrapper)
