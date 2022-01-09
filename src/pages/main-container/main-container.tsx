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
import { MainContainerStyled, ContentContainerStyled, WrapperContentStyled } from './style'
import {SideBar} from '../../components/side-bar';
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
        <MainContainerStyled>
            <InitialWrapper>
                <Router>
                    <ContentContainerStyled>
                        <SideBar sideBarActions={sideBarActions} user={user}/>
                        <Switch>
                            <WrapperContentStyled>
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
                            </WrapperContentStyled>
                        </Switch>
                    </ContentContainerStyled>
                </Router>
            </InitialWrapper>
        </MainContainerStyled>
    )
}




const mapStateToProps = createStructuredSelector({
    user: userSelector
})

export default connect(mapStateToProps)(MainContainer)
