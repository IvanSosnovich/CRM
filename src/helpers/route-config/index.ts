import { RoutingWitUserRole } from '../../interfaces';
import { adminRouteConfig, adminSideBarLink } from './admin'
import { operatorRouteConfig, operatorSideBarLink } from './operator'
import { logistRouteConfig, logistSideBarLink } from './logist'
import { superAdminRouteConfig, superAdminSideBarLink } from './super-admin'
import { ADMIN_ROLE, OPERATION_ROLE, LOGIST_ROLE, SUPER_ADMIN_ROLE } from '../../constants'
export const getRoutingWitUserRole = (role: string): RoutingWitUserRole => {
    switch (role) {
    case ADMIN_ROLE:
        return {
            routingConfig: adminRouteConfig,
            sideBarConfig: adminSideBarLink
        }
    case OPERATION_ROLE:
        return {
            routingConfig: operatorRouteConfig,
            sideBarConfig: operatorSideBarLink
        }
    case LOGIST_ROLE:
        return {
            routingConfig: logistRouteConfig,
            sideBarConfig: logistSideBarLink
        }
    case SUPER_ADMIN_ROLE:
        return {
            routingConfig: superAdminRouteConfig,
            sideBarConfig: superAdminSideBarLink
        }
    default:
        return {
            routingConfig: adminRouteConfig,
            sideBarConfig: adminSideBarLink
        }
    }
}
