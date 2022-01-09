import styled from '@emotion/styled'
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';

export const SideBarContentStyled = styled.div`
  margin: 0;
  padding: 0;
  flex: 4 1 12%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-content: baseline;
  background: #3F51B5;
  height: 100%;
  box-sizing: border-box;
  overflow: hidden
`

export const HeaderSideBarStyled = styled.div`
  margin: 0;
  padding: 10px 10px;
  width: 100%;
  height: 90px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
`

export const UserInformationWrapper = styled(Box)`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: flex-start;
`

export const SideBarOpenButton = styled(IconButton)`
    position: absolute;
    top: 10px;
    left: 5px;
    color: red;
`
