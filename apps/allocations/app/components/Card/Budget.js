import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import BigNumber from 'bignumber.js'
import { displayCurrency } from '../../utils/helpers'
import * as types from '../../utils/prop-types'

import { usePath } from '../../api-react'
import {
  Card,
  IconCheck,
  IconCross,
  Link,
  ProgressBar,
  Text,
  useTheme,
} from '@aragon/ui'
import BudgetContextMenu from '../BudgetContextMenu'

const Budget = ({ budget }) => {
  const theme = useTheme()
  const { active, amount, remaining, token } = budget

  const tokensSpent = BigNumber(amount).minus(remaining)

  return (
    <Wrapper budget={budget} theme={theme}>
      {active && (
        <React.Fragment>
          <ProgressBar
            color={String(theme.accentEnd)}
            value={tokensSpent.div(amount).toNumber()}
          />
          <StatsValueSmall css={{
            color: theme.content,
            paddingTop: '8px',
          }}>
            {displayCurrency(tokensSpent)}
            <Text>{' ' + token.symbol + ' utilized'}</Text>
          </StatsValueSmall>
        </React.Fragment>
      )}
    </Wrapper>
  )
}

Budget.propTypes = {
  budget: types.budget.isRequired,
}

const Wrapper = ({ budget, children, theme }) => {
  const [ , requestPath ] = usePath()
  const { active, amount, id, name, token } = budget
  return (
    <StyledCard theme={theme}>
      <CardTop>
        <MenuContainer>
          <BudgetContextMenu budget={budget} />
        </MenuContainer>
        <CardTitle theme={theme}>
          <Link onClick={() => requestPath(`/budgets/${id}`)}>
            {name}
          </Link>
        </CardTitle>
        <StatsContainer>
          {children}
        </StatsContainer>
      </CardTop>
      <CardBottom theme={theme}>
        <Text>{displayCurrency(BigNumber(amount)) + ' ' + token.symbol + ' / PERIOD'}</Text>
        {active ? (
          <Status
            color={theme.positive}
            icon={<IconCheck />}
          >
            ACTIVE
          </Status>
        ) : (
          <Status
            color={theme.negative}
            icon={<IconCross />}
          >
            INACTIVE
          </Status>
        )}
      </CardBottom>
    </StyledCard>
  )
}

Wrapper.propTypes = {
  budget: types.budget.isRequired,
  children: PropTypes.node.isRequired,
  theme: PropTypes.object.isRequired,
}

const Status = ({ children, color, icon }) => (
  <div css={`
      display: flex;
      color: ${color}
    `}
  >
    {icon}
    <span>{children}</span>
  </div>
)

Status.propTypes = {
  children: PropTypes.node.isRequired,
  icon: PropTypes.node.isRequired,
  color: PropTypes.object.isRequired,
}

const StyledCard = styled(Card)`
  box-shadow: ${({ theme }) => '0 2px 4px ' + theme.border};
  border: 0;
  height: 264px;
  width: auto;
`

const CardTop = styled.div`
  padding: 12px;
  height: 229px;
  width: 100%;
  display: flex;
  flex-direction: column;
`

const CardBottom = styled.div`
  padding: 4px 12px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  line-height: 26px;
  vertical-align: middle;
  color: ${({ theme }) => theme.contentSecondary};
  border-top: 1px solid ${({ theme }) => theme.border};
`

const MenuContainer = styled.div`
  align-self: flex-end;
  align-items: center;
`

const CardTitle = styled(Text.Block).attrs({
  size: 'large',
  weight: 'bold',
})`
  height: 78px;
  font-size: 24px;
  font-weight: 400;
  margin: 20px 12px;
  text-align: center;
  color: ${({ theme }) => theme.content};
  display: block;
  /* stylelint-disable-next-line */
  display: -webkit-box;
  -webkit-line-clamp: 2;
  /* stylelint-disable-next-line */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`

const StatsContainer = styled.div`
  text-align: center;
  padding: 12px;
`

const StatsValueSmall = styled.div`
  font-size: 14px;
  font-weight: normal;
`

/* eslint-disable-next-line import/no-unused-modules */
export default Budget
