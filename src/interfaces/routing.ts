import React from 'react';

export interface RoutingConfig {
    path: string,
    component: React.FC
}
export interface SideBarConfig {
    link: string,
    name: string,
    icon: string
}

export interface RoutingWitUserRole {
    routingConfig: RoutingConfig[],
    sideBarConfig: SideBarConfig[]
}
