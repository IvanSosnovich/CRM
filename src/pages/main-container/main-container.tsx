import React, { useEffect, useState } from 'react'
import get from 'lodash/get'
import map from 'lodash/map'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'
import { userSelector } from '../../redux/selectors'
import { InitialWrapper } from '../../components/initial-wrapper'
import {User, SideBarConfig, RoutingConfig} from '../../interfaces';
import { getRoutingWitUserRole } from '../../helpers/route-config'
interface Props {
    user: User | null
}

const MainContainer: React.FC<Props> = ({ user }) => {
    const [sideBarActions, setSideBarActions] = useState<SideBarConfig[] | null>(null)
    const [routingActions, setRoutingConfig] = useState<RoutingConfig[] | null>(null)
    
    useEffect(() => {
        const {routingConfig, sideBarConfig} = getRoutingWitUserRole(get(user, 'role', ''))
        setSideBarActions(sideBarConfig)
        setRoutingConfig(routingConfig)
    }, [user])
    return (
        <InitialWrapper>
            <Router>
                <>
                    <>
                        {/*// TODO - тут надо будет замапить сайд бар в зависимости от роли */}
                        {map(sideBarActions, ({name}) => <h1>{name}</h1>)}
                    </>
                    <Switch>
                        {map(routingActions, (route) => {
                            return (
                                <Route
                                    key={route.path}
                                    exact path={route.path}
                                >
                                    <route.component />
                                </Route>
                            )
                        })}
                    </Switch>
                    <h1>MainContainer</h1>
                </>
            </Router>
        </InitialWrapper>
    )
}




const mapStateToProps = createStructuredSelector({
    user: userSelector
})

export default connect(mapStateToProps)(MainContainer)
