import React, {ReactElement, useState } from 'react';
import get from 'lodash/get';
import map from 'lodash/map';
import { SideBarOpenButton, SideBarContentStyled, HeaderSideBarStyled, UserInformationWrapper } from './style'
import {SideBarConfig, User} from '../../interfaces';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Icon from '@mui/material/Icon';

interface Props {
    sideBarActions: SideBarConfig[] | null,
    user: User | null
}

const SideBar: React.FC<Props> = ({user, sideBarActions}): ReactElement => {
    const [showMenu, setShowMenu] = useState(true)
    const handleChangeViewMode = () => setShowMenu(!showMenu)
    
    if (showMenu) {
        return (
            <SideBarContentStyled>
                <HeaderSideBarStyled>
                    <UserInformationWrapper>
                        <Typography variant="h6" gutterBottom component="div" sx={{color: '#fff'}}>
                            {get(user, 'name', 'Имя')}
                        </Typography>
                        <Typography variant="button" gutterBottom component="div" sx={{color: '#fff'}}>
                            {get(user, 'role', 'Должность')}
                        </Typography>
                        {/*    TODO - добавить рейтинг сотрудника и можно будет баланс, статистику какую то*/}
                    </UserInformationWrapper>
                    <IconButton
                        onClick={handleChangeViewMode}
                        aria-label="close sidebar"
                    >
                        <CloseIcon />
                    </IconButton>
                </HeaderSideBarStyled>
                <Divider />
                <List
                    sx={{ padding: '5px 5px'}}
                >
                    <ListItemText
                        primary='Меню навигации'
                        primaryTypographyProps={{ fontSize: 24, fontWeight: 'bold', color: '#fff', padding: '0 0 0 10px', letterSpacing: '1.10px'}}
                    />
                    {map(sideBarActions, (action, i) => (
                        <ListItemButton
                            key={get(action, 'name', i)}
                            sx={{ py: 0, minHeight: 50, boxShadow: '0px 0px 28px -1px #000000', margin: '30px 0 0 0', background: '#3F51B5', border: '1px solid rgba(255, 255, 255, 0.3)'}}
                            component='a'
                            href={get(action, 'link')}
                        >
                            <ListItemIcon sx={{ color: '#fff' }}>
                                <Icon sx={{color: '#fff' }}>{get(action, 'icon')}</Icon>
                            </ListItemIcon>
                            <ListItemText
                                primary={get(action, 'name', 'Имя кнопки')}
                                primaryTypographyProps={{ fontSize: 19, fontWeight: 'medium', color: '#fff' }}
                            />
                        </ListItemButton>
                    ))}
                </List>
            </SideBarContentStyled>
        )
    }
    return (
        <SideBarOpenButton
            onClick={handleChangeViewMode}
            aria-label="open sidebar"
        >
            <MenuOpenIcon />
        </SideBarOpenButton>
    )
}

export default SideBar
