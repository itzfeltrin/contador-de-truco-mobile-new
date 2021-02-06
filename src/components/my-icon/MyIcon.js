import React from 'react';

import ControllerIcon from '../../assets/svg/controller.svg';
import EspadaoIcon from '../../assets/svg/espadao.svg';
import HistoryIcon from '../../assets/svg/history.svg';
import HomeIcon from '../../assets/svg/home.svg';
import RankingIcon from '../../assets/svg/ranking.svg';
import RightArrowIcon from '../../assets/svg/right-arrow.svg';
import TeamIcon from '../../assets/svg/team.svg';

const MyIcon = (props) => {
  const {name} = props;
  const commonProps = (({name, ...rest}) => ({...rest}))(props);

  switch (name) {
    case 'controller':
      return <ControllerIcon {...commonProps} />;
    case 'espadao':
      return <EspadaoIcon {...commonProps} />;
    case 'history':
      return <HistoryIcon {...commonProps} />;
    case 'home':
      return <HomeIcon {...commonProps} />;
    case 'ranking':
      return <RankingIcon {...commonProps} />;
    case 'right-arrow':
      return <RightArrowIcon {...commonProps} />;
    case 'team':
      return <TeamIcon {...commonProps} />;
    default:
      return <ControllerIcon {...commonProps} />;
  }
};

export default MyIcon;
